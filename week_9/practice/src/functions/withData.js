import React from 'react';

export default function withData(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        defaultName: 'Norbert',
        apiData: [],
      };
    }
    componentDidMount() {
      this.setState({ apiData: ['Norbert', 'Justyna'] });
    }
    render() {
      return (
        <WrappedComponent
          defaultName={this.state.defaultName}
          apiData={this.state.apiData}
          {...this.props}
        />
      );
    }
  };
}
