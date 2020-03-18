import React, {Component} from 'react';

class TaskForm extends Component {
  render() {
    return (
      <div className="panel panel-warning">
          <div className="panel-heading task-form-header">
              <h3 className="panel-title">Add Event</h3>
              <button type="button" class="btn btn-danger task-form-btn-remove">
                <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
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

export default TaskForm;
