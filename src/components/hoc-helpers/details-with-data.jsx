import React, { Component } from 'react';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

const detailsWithData = (View) => {
  return class extends Component {

    state = {
      item: null,
      loading: true,
      error: false
    };

    componentDidMount() {
      const { itemId } = this.props;
      if(itemId) this.updateItem();
    };

    componentDidUpdate(prevProps) {
      if(prevProps.itemId === this.props.itemId) return;
      this.updateItem();
    };

    updateItem() {
      const { itemId, getData } = this.props;
      if(!itemId) return;
      this.setState({
        loading: true
      })
      getData(itemId)
        .then((item) => {
          this.setState({
            item,
            loading: false
          });
        })
        .catch(() => {
          this.setState({
            error: true,
            loading: false
          });
        });
    };

    render() {

      const { item, loading, error } = this.state;
      const { singlePage } = this.props;

      if(singlePage && !item && !error) return <Spinner/>

      if(!singlePage && !item && !error) return <span>Choose a item from list</span>

      if(loading) return <Spinner/>

      if(error) return <ErrorIndicator />

      const { image, name } = item;

      const details = React.Children.map(this.props.children, (child) => {
        return React.cloneElement(child, { item });
      });

      return(
        <View 
          details={details} 
          image={image} 
          name={name} />
      );
    };
  };
};

export default detailsWithData;
