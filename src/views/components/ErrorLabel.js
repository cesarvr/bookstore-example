import React, {Component} from 'react';

class ErrorLabel extends Component {

    constructor(props){
      super(props);
      this.state = { message: '' };

      this.key = props.field;
      props.dataSource.invalidEntry(this.showFromList.bind(this))
    }

    showFromList(messages){
      this.setState({message: messages[this.key]});
    }

    render() {
      return (
        <span className="help-block">{this.state.message}</span>
      );
    }
};

export default ErrorLabel;
