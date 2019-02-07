import React, { Fragment } from "react";

import { Field, ErrorMessage } from "formik";

import StyledErrorMessage from "../error-message";

const renderField = (name, id, value, label, onChange) => {
  return (
    <Fragment>
      <label className="label" htmlFor={id}>{label}</label>
      <Field id={id} type="checkbox" onChange={onChange} />
    </Fragment>
  );
};

const Checkbox = ({ name, id, value, label, onChange, hasError }) => (
  <Fragment>
    {renderField(name, id, value, label, onChange)}
    <ErrorMessage name={id} type={StyledErrorMessage} />
  </Fragment>
);

export default Checkbox;
