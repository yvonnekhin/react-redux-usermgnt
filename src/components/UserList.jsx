import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUsers } from "../actions/index";

class UserList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    return (
      <div className="container">
        <h2>All Users</h2>

        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Id</th>
              <th>Email</th>
              <th>First Name</th>
              <th>Last Name</th>
            </tr>
          </thead>
          <tbody>
            {this.props.users.data.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>
                  <Link to={`/users/${user.id}`}>{user.email}</Link>
                </td>
                <td>
                  <Link to={`/users/${user.id}`}>{user.first_name}</Link>
                </td>
                <td>
                  <Link to={`/users/${user.id}`}>{user.last_name}</Link>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({ users: state.users });

export default connect(
  mapStateToProps,
  { fetchUsers }
)(UserList);
