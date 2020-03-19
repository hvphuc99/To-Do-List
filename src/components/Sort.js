import React, {Component} from 'react';

class Sort extends Component {
  render() {
    return (
      <div className="dropdown">
          <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              Sort <span className="glyphicon glyphicon-list" aria-hidden="true"></span>
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
              <li>
                  <a role="button">
                    <span className="fa fa-sort-alpha-asc pr-5">
                        A-Z
                    </span>
                  </a>
              </li>
              <li role="separator" className="divider"></li>
              <li><a role="button">Trạng Thái Kích Hoạt</a></li>
              <li><a role="button">Trạng Thái Ẩn</a></li>
          </ul>
      </div>
    );
  }
}

export default Sort;
