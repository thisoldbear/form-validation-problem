# [Form validation problem](https://thibaudcolas.github.io/form-validation-problem/)

Soultion to validating a form against validation criteria. Forked from [Form validation problem](https://github.com/torchbox/form-validation-problem).

## The task

With the time constraints and the need for a "stateful" form, React felt a good fit.

Additionally, I wanted to demonstrate some React knowledge, as this came up in the interview and my subsequent phone calls.

I've used [Formik](https://jaredpalmer.com/formik/docs/api/formik) to build the form and used [Yup](https://github.com/jquense/yup) for validation.

Having worked with Formik for the past few months, I'm fairly familiar with it.

Yup was something I looked into for a recent project. Due to the time contstraints I opted to use it for validation, over rolling my own.

Had I written my own basic validation functions, I would have added Jest unit tests.

### Form fields

I've abstracted the different form fields into their own React components, to make them reusable and more maintainable.

### Error messaging

I used Formik's `<ErrorMessage />` to display a validation message after touch or form submit.

It's a good feature of Formik, as it allows custom components to be dropped in to the error message and is connected to the parent form.

### Links

[Source](https://github.com/thisoldbear/form-validation-problem)

[Live Demo](https://jolly-archimedes-9f0558.netlify.com/)

## Setup

### Install

`yarn install`

### Run

`yarn start`

## Observations/todos

### Known issue

Yuk error message for `animal` does not display when invalid.

### No PropTypes

I would have liked to have added `PropType` checking.

### Form POST

I've used a `fetch()`, which would need to be Polyfilled for older browsers.

I've used [Axios](https://github.com/axios/axios) a lot recently, and would definitely use again on a production app.

This would allow any requests to be tested with [Moxios](https://github.com/axios/moxios).
