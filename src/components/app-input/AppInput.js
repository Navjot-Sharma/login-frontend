import React from "react";
import * as classnames from "classnames";
import { VscEye, VscEyeClosed } from "react-icons/vsc";

import "./AppInput.scss";

class AppInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: React.createRef(),
      value: props.value,
      touched: false,
      dirty: false,
      errors: [],
      valid: false,
      label: props.label,
      type: props.type || "text",
    };
  }

  componentDidUpdate() {
    if (this.props.value !== this.state.value) {
      this.setState({
        value: this.props.value,
        touched: false,
        dirty: false,
        errors: [],
        valid: false,
        type: this.props.type || "text",
      });
      this.state.input.value = this.props.value;
    }
  }

  setInputRef = (ref) => {
    this.setState({ input: ref });
    if (ref && this.props.focus && !this.state.touched) {
      ref.focus();
    }
    if (ref && this.state.value) {
      ref.value = this.state.value;
    }
  };

  validateErrors = (forceCheck = false) => {
    let errors = [];

    if (this.state.touched || forceCheck) {
      console.log(this.state.input.value, this.state.input.value?.length);
      if (this.props.required && !this.state.input.value) {
        errors.push((this.props.name || "Field") + " is required");
      } else if (
        this.props.type == "password" &&
        this.state.input.value?.length < 8
      ) {
        errors.push(
          (this.props.name || "Field") + ` must be at least 8 characters`
        );
      } else if (
        this.props.minLength &&
        this.state.editor.value?.length < this.props.minLength
      ) {
        errors.push(
          (this.props.name || "Field") +
            ` must be at least ${this.props.Length} characters`
        );
      } else if (
        this.props.maxLength &&
        this.state.editor.value?.length > this.props.maxLength
      ) {
        errors.push(
          (this.props.name || "Field") +
            ` must not exceed ${this.props.maxLength} characters`
        );
      } else if (this.props.min && this.state.editor.value < this.props.min) {
        errors.push(
          (this.props.name || "Field") +
            ` must be greater than ${this.props.min}`
        );
      } else if (this.props.max && this.state.editor.value > this.props.max) {
        errors.push(
          (this.props.name || "Field") + ` must be less than ${this.props.max}`
        );
      }
      this.setState({ errors });
    }
    return errors;
  };

  onFocusInput = () => {
    this.setState({ touched: true });
  };

  onBlurInput = () => {
    let errors = this.validateErrors();
  };

  getValue = () => {
    return [this.props.field, this.state.input.value];
  };

  onTogglePassword = (hide = false) => {
    if (hide) {
      this.setState({ type: "password" });
    } else {
      this.setState({ type: "text" });
    }
    // this.state.input.focus();
  };

  getElement = () => {
    if (this.state.type == "textarea") {
      return (
        <textarea
          className={classnames({
            "error-border": this.state.errors.length > 0,
          })}
          placeholder={this.props.placeholder}
          ref={this.setInputRef}
          onFocus={() => this.onFocusInput()}
          onBlur={() => this.onBlurInput()}
          name={this.props.name}
          id={this.props.id}
        ></textarea>
      );
    }

    return (
      <div className="input-container">
        <label htmlFor={this.props.id} className="input-label">
          {/* <sup className="app-primary">*</sup> */}
          {this.props.label}
        </label>
        <input
          className={classnames({
            "error-border": this.state.errors.length > 0,
          })}
          placeholder={this.props.placeholder}
          ref={this.setInputRef}
          type={this.state.type}
          onFocus={() => this.onFocusInput()}
          onBlur={() => this.onBlurInput()}
          name={this.props.name}
          id={this.props.id}
        />
      </div>
    );
  };

  render() {
    return (
      <div className={this.props.className}>
        {/* {this.props.label && ( */}
        {/* <label htmlFor={this.props.id} className="input-label"> */}
        {/* <sup className="app-primary">*</sup> */}
        {/* {this.props.label} */}
        {/* <p className="my-10"> */}
        {/* <sup className="app-primary">*</sup> */}
        {/* {this.props.name}: */}
        {/* </p> */}
        {/* </label> */}
        {/* )} */}
        <div className="relative">
          {this.getElement()}
          {this.props.type == "password" && this.state.type == "text" && (
            <VscEye
              className="input-eye"
              onClick={() => this.onTogglePassword(true)}
            />
          )}
          {this.props.type == "password" && this.state.type == "password" && (
            <VscEyeClosed
              className="input-eye"
              onClick={() => this.onTogglePassword()}
            />
          )}
          {
            <div className="">
              {this.state.errors.map((error, i) => (
                <div className="error" key={i}>
                  {error}
                  {/* <BiErrorCircle className="f-30" /> */}
                </div>
              ))}
            </div>
          }
        </div>
      </div>
    );
  }
}

export default AppInput;
