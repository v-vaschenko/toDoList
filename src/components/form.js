import React from 'react';
import BottomNavigation from "@material-ui/core/BottomNavigation/BottomNavigation";

export class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit() {
        this.props.inputFunc(this.state.value);
        this.setState({value: ''});
    }

    render() {
        return (
            <form className={'form-group'}
                  onSubmit={this.handleSubmit}>
                <input type="text"
                       className={'form-control'}
                       value={this.state.value}
                       onChange={this.handleChange}
                       placeholder={'Enter your ToDo'}
                       autoFocus={true}
                />
            </form>

        );
    }
}