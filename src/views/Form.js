import React, { Component } from 'react';
import ErrorLabel from './components/ErrorLabel'

class NameForm extends Component {
  constructor(props) {
    super(props);
    this.dataSource = props.dataSource;

    this.state = { name:'',
                   description:'' };

    this.dataSource.newBookAdded(this.restart.bind(this))
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  restart(dataSource){
    this.setState({name:'', description:''});
  }

  handleChange(event) {
    const target = event.target;

    this.setState({
     [target.name]: target.value
    });
  }

  handleSubmit(event) {
    this.dataSource.add(this.state,{validate:true});
    event.preventDefault();
  }

  render() {
    return (
      <form className="form-horizontal" onSubmit={this.handleSubmit}>
        <fieldset>

          <legend>BookDB</legend>

          <div className="form-group">
            <label className="col-md-4 control-label">Name</label>
            <div className="col-md-4">
              <input  type="text"
                      name="name"
                      value={this.state.name}
                      onChange={this.handleChange}
                      placeholder="Quixote"
                      className="form-control input-md"/>

              <ErrorLabel dataSource={this.dataSource} field="name" />
            </div>
          </div>

          <div className="form-group">
            <label className="col-md-4 control-label">Description</label>
            <div className="col-md-4">

              <textarea className="form-control"
                        name="description"
                        onChange={this.handleChange}
                        value={this.state.description}
                        />

               <ErrorLabel dataSource={this.dataSource} field="description" />
              </div>
          </div>

          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="singlebutton">Single Button</label>
            <div className="col-md-4">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </div>

        </fieldset>
      </form>
    );
  }
}

export default NameForm;
