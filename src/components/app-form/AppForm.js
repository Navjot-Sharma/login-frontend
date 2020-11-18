import React from 'react';
// import AppInput from '../app-input/AppInput';

class AppForm extends React.Component {

    inputs = [];
    supportedTypes = ['AppInput'];
    myInputs = ['AppInput'];
    
    
    constructor(props) {
        super(props);

        this.state = {
            isValid: false
        };
    }

    componentWillUpdate() {
        this.inputs = [];
    }
    componentDidUpdate() {
        console.log(this.inputs);
    }

    recursiveCloneChildren(children) {
        return React.Children.map(children, (child) => {
          if (!React.isValidElement(child)) return child;
          let childProps = {};
          let isInput = false;
          if (React.isValidElement(child) && child.type && this.supportedTypes.includes(child.type.name)) {
              childProps = {
                  ref : `child${this.inputs.length}`
                };
                isInput = true;
            }
            if (this.supportedTypes.includes(child.type.name)) {
                console.log(child, isInput);
            }
        childProps.children = this.recursiveCloneChildren(child.props.children);
        const el = React.cloneElement(child, childProps);
        if (isInput) {
            this.inputs.push(el);
        }
          return el;
        });
    }

    validateForm = () => {
        console.log(this.inputs);
        let errors = [];
        this.inputs.forEach(input => {
            errors = this.validateInput(input, errors);
        });
        console.log(errors);
        return errors.length <= 0;
    }

    validateInput = (input, errors) => {
        if (this.myInputs.includes(input.type.name)) {
            errors = [...errors, ...this.refs[input.ref].validateErrors(true)];
        }
        return errors;
    }
    
    getValue = () => {
        let values = {};
        this.inputs.forEach(input => {
            let value = this.getValueInput(input);
            values[value[0]] = value[1];
        });

        return values;
    }

    getValueInput = (input) => {
        let value = [];
        console.log(input);
        if (this.myInputs.includes(input.type.name)) {
            value = this.refs[input.ref].getValue();
        }
        return value;
    }

    render(){
        return <form>
            { this.recursiveCloneChildren(this.props.children) }
        </form>;
    }
}

export default AppForm;