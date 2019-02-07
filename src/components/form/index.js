import React, { Fragment } from "react";
import { Formik, Form as FormikForm, FieldArray } from "formik";

import FormField from "../form-field";
import Checkbox from "../checkbox";

const animals = [
  { id: "bear", name: "Bear" },
  { id: "tiger", name: "Tiger" },
  { id: "snake", name: "Snake" },
  { id: "donkey", name: "Donkey" }
];

const Form = () => (
  <Formik
    initialValues={{
      email: "",
      password: "",
      color: "",
      animal: [],
      typeOfTiger: ""
    }}
    onSubmit={values => {
      // same shape as initial values
      console.log(values);
    }}
  >
    {({ values, errors, touched }) => (
      <FormikForm>
        <h1>Fill out this awesome form</h1>
        <fieldset>
          <h3>Your details</h3>
          <p>
            <FormField
              type="text"
              name="email"
              id="email"
              label="Email"
              hasError={errors.email && touched.email}
            />
          </p>
          <p>
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
          <p>
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

          <p>
            <FieldArray
              name="animal"
              render={arrayHelpers => (
                <Fragment>
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

          <p>
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
            <button type="submit">Create account</button>
          </p>
        </fieldset>
      </FormikForm>
    )}
  </Formik>
);

export default Form;
