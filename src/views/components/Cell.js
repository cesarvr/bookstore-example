import React, {Component} from 'react';

class Cell extends Component {
    constructor(props){
      super(props);
      this.model = props.model;
      this.btnStyle = { position: 'absolute', right: 5, top: 10 };
      this.remove = this.remove.bind(this);
    }

    remove(){
      this.model.destroy();
    }

    render() {

      return (
        <a key={this.model.cid} className="list-group-item">

          <div>
              <h4 className="list-group-item-heading">{this.model.get('name')}</h4>
              <p className="list-group-item-text">{this.model.get('description')}</p>
          </div>
          <div style={this.btnStyle}>
            <p className="btn" onClick={this.remove}>
              <span className="glyphicon glyphicon-remove" ></span>
            </p>
          </div>
        </a>

      );
    }
};

export default Cell;
