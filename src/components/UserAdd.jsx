import React, { Component } from "react";
import { connect } from "react-redux";
import { addUser } from "../actions";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

class UserAdd extends Component {
  constructor() {
    super();
    this.state = { email: "", first_name: "", last_name: "" };
  }

  render() {
    return (
      <Formik
        initialValues={{
          email: "",
          firstName: "",
          lastName: ""
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email("Email is invalid")
            .required("Email is required"),
          firstName: Yup.string().required("First Name is required"),
          lastName: Yup.string().required("Last Name is required")
        })}
        onSubmit={fields => {
          alert(
            "New user has been created!! \n\n" + JSON.stringify(fields, null, 4)
          );
        }}
        render={({ errors, status, touched }) => (
          <div className="container">
            <h2>Add User</h2>
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
              <div className="form-group row">
                <div className="col-6">
                  <button type="submit" className="btn btn-success">
                    Create
                  </button>
                </div>
                <div className="col-6">
                  <button type="reset" className="btn btn-secondary">
                    Reset
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

const mapDispatchToProps = { addUser };

export default connect(
  null,
  mapDispatchToProps
)(UserAdd);
