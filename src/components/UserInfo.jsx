import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getUser, deleteUser } from "../actions";

class UserInfo extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.id);
  }

  deleteUser = event => {
    let r = window.confirm("Do you want to delete this user?");
    if (r === true) {
      this.props.deleteUser(this.props.user.id);
    }
  };

  render() {
    const { user } = this.props;
    return (
      <div className="container">
        <h2>User Details</h2>
        <table className="table table-borderless">
          <tr>
            <td>
              <label>Email:</label>
            </td>
            <td>{user.email}</td>
            <td rowSpan="2">
              <img src={user.avatar}></img>
            </td>
          </tr>
          <tr>
            <td>
              <label>First Name:</label>
            </td>
            <td>{user.first_name}</td>
          </tr>
          <tr>
            <td>
              <label>Last Name:</label>
            </td>
            <td>{user.last_name}</td>
          </tr>
          <tr>
            <td>
              <Link
                to={{
                  pathname: `/users/${user.id}/edit`,
                  state: { user: user }
                }}
                className="btn btn-info"
              >
                Edit
              </Link>
            </td>
            <td>
              <button
                className="btn btn-danger"
                type="button"
                onClick={this.deleteUser}
              >
                Delete
              </button>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({ user: state.user });

const mapDispatchToProps = { getUser, deleteUser };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserInfo);

// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { Link } from "react-router-dom";
// import { fetchUsers, deleteUser } from "../actions";
// import { userInfo } from 'os';

// class UserList extends Component {
//   constructor() {
//     super();
//   }
//   componentDidMount() {
//     this.props.fetchUsers();
//   }
//   render() {
//     return (
//       <div className="container">
//         <h2>All Users</h2>

//         <table className="table table-bordered">
//           <thead>
//             <tr>
//               <th>Id</th>
//               <th>Email</th>
//               <th>First Name</th>
//               <th>Last Name</th>
//               <th>Edit/Save</th>
//             </tr>
//           </thead>
//           <tbody>
//             {this.props.users.data.map(user => (
//               <tr key={user.id}>
//                 <td>{user.id}</td>
//                 <td>{user.email}</td>
//                 <td>{user.first_name}</td>
//                 <td>{user.last_name}</td>
//                 <td>
//                   <button className="btn btn-primary"> Edit </button>
//                   &nbsp;
//                   <button
//                     className="btn btn-danger"
//                     onClick={() => this.props.deleteUser(user.id)}
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => ({ users: state.users });

// const mapDispatchToProps = { getuser, deleteUser };

// export default connect(
//   mapStateToProps,
//   { fetchUsers }
// )(UserList);
