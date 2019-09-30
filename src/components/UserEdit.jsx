import React from "react";
import { connect } from "react-redux";
import { updateUser } from "../actions";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

class UserEdit extends React.Component {
  handleCancel = () => {
    this.props.history.push(`/users/${this.props.user.id}`);
  };

  handleSubmit = values => {
    this.props.updateUser(values);
  };

  render() {
    return (
      <Formik
        initialValues={{
          email: this.props.user.email,
          firstName: this.props.user.first_name,
          lastName: this.props.user.last_name
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email("Email is invalid")
            .required("Email is required"),
          firstName: Yup.string().required("First Name is required"),
          lastName: Yup.string().required("Last Name is required")
        })}
        onSubmit={fields => {
          this.handleSubmit(fields);
          alert("Updated user details: \n\n" + JSON.stringify(fields, null, 4));
        }}
        render={({ errors, status, touched }) => (
          <div className="container">
            <h2>
              Edit {this.props.user.first_name} {this.props.user.last_name}
            </h2>
            <Form>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Field
                  name="email"
                  type="text"
                  className={
                    "form-control" +
                    (errors.email && touched.email ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <Field
                  name="firstName"
                  type="text"
                  className={
                    "form-control" +
                    (errors.firstName && touched.firstName ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="firstName"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <Field
                  name="lastName"
                  type="text"
                  className={
                    "form-control" +
                    (errors.lastName && touched.lastName ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="lastName"
                  component="div"
                  className="invalid-feedback"
                />
              </div>

              <div className="row">
                <div className="col-6">
                  <button type="submit" className="btn btn-success">
                    Update
                  </button>
                </div>

                <div className="col-6">
                  <button
                    type="button"
                    onClick={this.handleCancel}
                    className="btn btn-secondary"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Form>
          </div>
        )}
      />
    );
  }
}

const mapStateToProps = state => ({ user: state.user });

const mapDispatchToProps = { updateUser };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserEdit);
