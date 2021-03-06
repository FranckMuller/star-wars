import React, { Component } from 'react';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

const withData = (View) => {
  return class extends Component {

    state = {
      data: null,
      loading: false,
      error: false
    };
  
    componentDidMount() {
      this.props.getData()
        .then((data) => {
          this.setState({
            data
          });
        })
        .catch(() => {
          this.setState({
            error: true
          });
        });
    };

    render() {
      const { data, error } = this.state;

      if(!data && !error) return <Spinner />;
      if(error) return <ErrorIndicator />

      return (
        <View {...this.props} data={data} />
      );
    };
  };
};

export default withData;
