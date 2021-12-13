import { Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import Input from "../../components/Input/Input";
import { userFromActions } from "../../userFromRedux";

const LoginForm = (props) => {
  const dispatch = useDispatch();

  const validate = (values) => {
    const errors = {};
    if ((values.customerFirstName = "")) {
      errors.customerFirstName = "Required.";
    } else if (!values.customerFirstName.match(/^[a-zA-Z]+$/)) {
      errors.customerFirstName = "Only alphabets are allowed";
    }
    if (!values.customerLastName.match(/^[a-zA-Z]+$/)) {
      errors.customerLastName = "Only alphabets are allowed";
    }

    if ((values.email = "")) {
      errors.email = "Required.";
    }
    if (!values.email) {
      errors.email = "Please enter valid Email Address.ex abc@test.com";
    }
    if (values.password.length < 8 || values.password.length > 16) {
      errors.password = "Password must be  8 to 16 characters long.";
    }
    if (values.password !== values.confirmPassword) {
      errors.password = "Password and Confirm Password must be same.";
    }
    return errors;
  };

  return (
    <div
      className="formWrapper"
      //   style={{ display: "flex", margin: "auto", justifyContent: "center" }}
    >
      <h2> Create New User</h2>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = "Invalid email address";
          }
          if (!values.password > 8) {
            errors.email = "Required";
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.password = "[password must be more than 8 character]";
          }
          return errors;
        }}
        onSubmit={(values) => {
          console.log(values);
          dispatch(userFromActions.postsignupUser(values, () => props.history.push("/login")));
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <Input
                type="text"
                labelName="First Name"
                name="firstName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
                touched={touched}
                errors={errors}
              />
              <div className="error">
                {errors.firstName && touched.firstName && errors.firstName}
              </div>
            </div>
            <div>
              <Input
                type="text"
                name="lastName"
                labelName="Last Name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastName}
              />
              <div className="error">{errors.lastName && touched.lastName && errors.lastName}</div>{" "}
            </div>
            <div>
              <Input
                type="email"
                name="email"
                labelName="Email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <div className="error"> {errors.email && touched.email && errors.email}</div>
            </div>
            <div>
              <Input
                type="text"
                labelName={"Number"}
                name="phoneNumber"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phoneNumber}
              />
              <div className="error">
                {errors.phoneNumber && touched.phoneNumber && errors.phoneNumber}
              </div>
            </div>{" "}
            <div>
              <Input
                type="password"
                labelName={"Password"}
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              <div className="error">{errors.password && touched.password && errors.password}</div>
            </div>
            <div>
              <Input
                type="password"
                labelName={"Confirm Password"}
                name="confirmPassword"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}
              />
              <div className="error">
                {errors.confirmPassword && touched.confirmPassword && errors.confirmPassword}
              </div>
            </div>
            <button className="button" type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
      <div className="link" onClick={() => props.history.push("/login")}>
        Already have an account login
      </div>
    </div>
  );
};

export default LoginForm;
