import React, { Fragment } from "react";

import { Field, ErrorMessage } from "formik";

import StyledErrorMessage from "../error-message";

const renderField = (name, id, type, label, children) => {
  if (type === "select") {
    return (
      <Fragment>
        <label className="label" htmlFor={id}>{label}</label>
        <Field name={name} id={id} component={type}>
          {children}
        </Field>
      </Fragment>
    );
  }

  if (type === "checkbox") {
    return (
      <Fragment>
        <label className="label" htmlFor={id}>{label}</label>
        <Field name={name} id={id} component={type}>
          {children}
        </Field>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <label className="label" htmlFor={id}>{label}</label>
      <Field name={name} id={id} type={type} />
    </Fragment>
  );
};

const FormField = ({ name, id, hasError, type, label, children }) => (
  <Fragment>
    {renderField(name, id, type, label, children)}
    <ErrorMessage name={id} type={StyledErrorMessage} />
  </Fragment>
);

export default FormField;
