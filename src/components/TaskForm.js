import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index'

class TaskForm extends Component {
  render() {
    return (
      <div className="panel panel-warning">
          <div className="panel-heading task-form-header">
              <h3 className="panel-title">Add Event</h3>
              <button type="button" className="btn btn-danger task-form-btn-remove" onClick={this.props.closeTaskForm}>
                <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
              </button>
          </div>
          <div className="panel-body">
              <form>
                  <div className="form-group">
                      <label>Title :</label>
                      <input type="text" className="form-control" />
                  </div>
                  <label>Status :</label>
                  <select className="form-control" required="required">
                      <option value="1">Kích Hoạt</option>
                      <option value="0">Ẩn</option>
                  </select>
                  <br/>
                  <div className="text-center">
                      <button type="submit" className="btn btn-warning">Add</button>
                  </div>
              </form>
          </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    closeTaskForm: () => {
      dispatch(actions.closeTaskForm())
    }
  }
}

export default connect(null, mapDispatchToProps)(TaskForm);
