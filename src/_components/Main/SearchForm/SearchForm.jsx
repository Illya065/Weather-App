import React from "react";
import { Field, reduxForm } from "redux-form";
import { required } from "../../../_validators/validate";

const AddCityForm = (props) => {
  return (
    <form className="search__form" onSubmit={props.handleSubmit}>
      <Field
        className="search__input"
        component="input"
        name="city"
        placeholder="Enter the city"
        type="text"
        validate={[required]}
      />
      <button className="search__button">Find</button>
    </form>
  );
};

const AddCityFormRedux = reduxForm({ form: "addForm" })(AddCityForm);

export default AddCityFormRedux;
