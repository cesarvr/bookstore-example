import React, {Component} from 'react';
import Cell from './Cell';  // This can be injected as parameter in the props.
import _ from 'underscore';

class List extends Component {

    constructor(props){
      super(props);
      let refresh = this.refresh.bind(this);
      this.state = {list:{}};

      // Binding with our DAO here.
      props.dataSource.refresh((collection)=>refresh(null,collection));
      props.dataSource.newBookAdded(refresh);
      props.dataSource.bookHasBeenRemoved(refresh);
    }

    refresh(model,collection){
      this.setState({ list: collection.models });
    }

    render() {
      let cells = _.map(this.state.list, (model) => <Cell key={model.cid} model={model}/>);

      return (
        <div className="list-group">
           {cells}
        </div>
      );
    }
}

export default List;
