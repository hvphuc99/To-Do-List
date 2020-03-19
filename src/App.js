import React, {Component} from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import Control from './components/Control';
import TaskList from './components/TaskList';
import { connect } from 'react-redux';
import * as actions from './actions/index'

class App extends Component {
  render() {
    console.log(this.props.isDisplayTaskForm);
    let elementTaskForm = this.props.isDisplayTaskForm ? <TaskForm /> : '';
    return (
      <div className="container">
          <div className="text-center">
              <h1>To Do List</h1>
              <hr/>
          </div>
          <div className="row">
              <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                { elementTaskForm }
              </div>
              <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                  <button type="button" className="btn btn-primary" onClick={this.props.openTaskForm}>
                      <span className="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Add Event
                  </button>
                  <Control />
                  <div className="row mt-15">
                      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <TaskList />
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isDisplayTaskForm: state.isDisplayTaskForm
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    openTaskForm: () => {
      dispatch(actions.openTaskForm())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
