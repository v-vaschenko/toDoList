import React from 'react';

export class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {
        let a = event.target.value;
        a = a.replace(/^\s+/g, '');
        this.setState({value: a});
    }

    handleSubmit(event) {
        if (this.state.value === ''){
            console.log('empty form');
        }
        else{
            this.props.inputFunc(this.state.value);
            this.setState({value: ''});
        }
        event.preventDefault();
    }


    render() {
        return (
            <form className={'form-group'}
                  onSubmit={this.handleSubmit}
                  autoComplete='off'
            >
                <input type="text"
                       className={'form-control'}
                       value={this.state.value}
                       onChange={this.handleChange}
                       placeholder={'Enter your ToDo'}
                       autoFocus={true}
                       id={'msg'}
                       autoComplete='off'
                />
            </form>


    );
    }
}