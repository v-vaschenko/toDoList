import React from 'react';
import * as ReactDOM from "react-dom";

export class Item extends React.Component{
    constructor(props){
        super(props);
        this.state = {checkbox : false,
                      undone : 'itemText',
                      done : 'itemTextDone'
        };
        this.checkBox = this.checkBox.bind(this);
    }
    checkBox(){
        this.setState({checkbox : !this.state.checkbox});
    }
    render() {
        let data = this.props.data.text;
        return (
                <p className={ this.state.checkbox ? this.state.done : this.state.undone}>
                    {data}
                <input type = 'checkbox'
                       onChange={this.checkBox}
                />
                </p>
        );
    }
}