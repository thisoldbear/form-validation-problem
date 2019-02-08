import React, { Fragment } from "react";
import { Formik, Form as FormikForm, FieldArray } from "formik";
import * as Yup from "yup";

import FormField from "../form-field";
import Checkbox from "../checkbox";

const FormSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Your password is too short. Please enter 8 characters or more.")
    .required("Required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Required"),
  color: Yup.string().required("Required"),
  animal: Yup.array().min(2, "Please select two animals"),
  typeOfTiger: Yup.string().when("animal", (animal, schema) => {
    return animal.includes("tiger")
      ? schema.required("Please enter a type of tiger")
      : schema.notRequired();
  })
});

const animals = [
  { id: "bear", name: "Bear" },
  { id: "tiger", name: "Tiger" },
  { id: "snake", name: "Snake" },
  { id: "donkey", name: "Donkey" }
];

const handleSubmit = values => {
  fetch("/", {
    method: "POST",
    body: JSON.stringify(values)
  })
    .then(() => console.log("POST"))
    .catch(error => alert(error));
};

const Form = () => (
  <Formik
    initialValues={{
      email: "",
      password: "",
      color: "",
      animal: [],
      typeOfTiger: ""
    }}
    validationSchema={FormSchema}
    onSubmit={values => {
      console.log(values);
      handleSubmit(values);
    }}
  >
    {({ values, errors, touched }) => (
      <FormikForm>
        <h1>Fill out this awesome form</h1>
        <fieldset>
          <h3>Your details</h3>
          <p className={errors.email && touched.email ? "error" : ""}>
            <FormField
              type="text"
              name="email"
              id="email"
              label="Email"
              hasError={errors.email && touched.email}
            />
          </p>
          <p className={errors.password && touched.password ? "error" : ""}>
            <FormField
              type="password"
              name="password"
              id="password"
              label="Password"
              hasError={errors.password && touched.password}
            />
          </p>
        </fieldset>

        <fieldset>
          <h3>Your animal</h3>
          <p className={errors.color && touched.color ? "error" : ""}>
            <FormField
              type="select"
              name="color"
              id="color"
              label="Color"
              hasError={errors.color && touched.color}
            >
              <option value="blue">Blue</option>
              <option value="green">Green</option>
              <option value="red">Red</option>
              <option value="black">Black</option>
              <option value="brown">Brown</option>
            </FormField>
          </p>

          <p className={errors.animal && touched.animal ? "error" : ""}>
            <FieldArray
              name="animal"
              render={arrayHelpers => (
                <Fragment>
                  <span class="label">Animal</span>
                  {animals.map(animal => (
                    <Checkbox
                      key={animal.id}
                      label={animal.name}
                      id={animal.id}
                      value={animal.id}
                      checked={values.animal.includes(animal.id)}
                      onChange={e => {
                        if (e.target.checked) arrayHelpers.push(animal.id);
                        else {
                          const idx = values.animal.indexOf(animal.id);
                          arrayHelpers.remove(idx);
                        }
                      }}
                    />
                  ))}
                </Fragment>
              )}
            />
          </p>

          <p className={errors.typeOfTiger ? "error" : ""}>
            <FormField
              type="text"
              name="typeOfTiger"
              id="typeOfTiger"
              label="Type of tiger"
              hasError={errors.typeOfTiger}
            />
          </p>
        </fieldset>

        <fieldset>
          <p>
            <input type="submit" value="Create account" />
          </p>
        </fieldset>
      </FormikForm>
    )}
  </Formik>
);

export default Form;
