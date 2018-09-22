import React from 'react';
import * as ReactDOM from "react-dom";

export class Form extends React.Component{
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        event.preventDefault();
    }

    handleSubmit(event) {
        this.props.inputFunc(this.state.value);
        this.setState ({value : ''});
        event.preventDefault();
    }

    render() {
        return (
            <form className = { 'form-group' }
                  onSubmit={this.handleSubmit}>

                <label>
                    <input type = "text"
                           className={'form-control'}
                           value = {this.state.value}
                           onChange = {this.handleChange}
                           placeholder = {'Enter your ToDo'}
                    />
                </label>

                <input type = "submit"
                       className={'btn btn-primary'}
                       value = "Submit"
                       disabled={!this.state.value}
                />
            </form>
        );
    }
}