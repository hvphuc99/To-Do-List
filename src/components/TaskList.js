import React, {Component} from 'react';
import Task from './Task'

class TaskList extends Component {
  render() {
    return (
      <table className="table table-bordered table-hover">
          <thead>
              <tr>
                  <th className="text-center">STT</th>
                  <th className="text-center">Title</th>
                  <th className="text-center">Status</th>
                  <th className="text-center">Action</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td></td>
                  <td>
                      <input type="text" className="form-control" />
                  </td>
                  <td>
                      <select className="form-control">
                          <option value="-1">All</option>
                          <option value="0">Ẩn</option>
                          <option value="1">Kích Hoạt</option>
                      </select>
                  </td>
                  <td></td>
              </tr>
              <Task />
          </tbody>
      </table>
    );
  }
}

export default TaskList;
