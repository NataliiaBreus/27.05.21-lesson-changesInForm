import React, { Component } from "react";
import cx from "classnames";
import style from "./SignUpForm.module.css";
import FormInput from "./FormInput";

const intialValues = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  
};

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...intialValues };
  }

  submitHandler = (event) => {
    const { registerUser } = this.props;
    event.preventDefault();
    registerUser({ ...this.state });
    this.setState({ ...intialValues });
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value, [`is${name}Valid`]: !value.includes(" ") });
  };

  firstnameChange(){

  }

  lastnameChange(){

  }
  emailChange(){
    
  }
  passwordChange({ target: { value } }){
    const isValid = value.length >= 8;
    this.setState({[name]: value});
  }

  render() {
    const {
      firstname,
      lastname,
      email,
      password,
      isemailValid,
      isfirstnameValid,
      islastnameValid,
      ispasswordValid,
    } = this.state;
    return (
      <form className={style.container} onSubmit={this.submitHandler}>
        <FormInput name = "firstname" value={firstname} onChange={this.handleChange} validationHandler={this.validateFirstname} placeholder="Введите имя"/>
        <FormInput name = "lastname" value={lastname} onChange={this.handleChange} validationHandler={this.validateLastname} placeholder="Введите фамилию"/>
        <FormInput name = "email" value={email} onChange={this.handleChange} validationHandler={this.validateEmail} placeholder="Введите email" type="email"/>
        <FormInput name = "password" value={password} onChange={this.handleChange} validationHandler={this.validatePassword} placeholder="Введите пароль" type="password"/>
        <input className={style.input} type="submit" />
      </form>
    );
  }
}

export default SignUpForm;

/*
  1. Написать функции-обработчики изменений имени, фамилии, email.
  2. Добавить валидацию этих полей.
*/