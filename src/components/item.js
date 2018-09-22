import React from 'react';
import * as ReactDOM from "react-dom";

export class Item extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        let data = this.props.data.text;
        return (
            <div className = { 'item' }>
                <p className={'itemText'}> {data} </p>
            </div>
        );
    }
}