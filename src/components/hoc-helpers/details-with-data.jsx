import React, { Component } from 'react';

const detailsWithData = (View, getData) => {
  return class extends Component {

    state = {
      item: null
    };

    componentDidUpdate(prevProps) {
      if(prevProps.itemId === this.props.itemId) return;
      this.updateItem();
    };

    componentWillMount() {
      this.updateItem();
    }

    updateItem() {
      const { itemId } = this.props;
      if(!itemId) return;
      getData(itemId)
        .then((item) => {
          this.setState({
            item
          });
        });
    };

    render() {

      const { item } = this.state;

      if(!item) return <span>Select a item from a list</span>;

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
