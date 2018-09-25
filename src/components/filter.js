import React from 'react';
import * as ReactDOM from "react-dom";
import {render} from "react-dom";

export class Filter extends React.Component {
    constructor(props){
        super(props);
        this.counter=this.counter.bind(this);
        this.filterAll = this.filterAll.bind(this);
        this.filterFalse = this.filterFalse.bind(this);
        this.filterTrue = this.filterTrue.bind(this);
    }
    counter(param) {
        let data = this.props.data;
        let count = data.filter(function (index) {
            return index.status == param;
        });
        return(count.length);
    }
    filterAll(){
        this.props.filterAll(0);
    }
    filterFalse(){
        this.props.filterFalse(false);
    }
    filterTrue(){
        this.props.filterTrue(true);
    }
    render() {
        return (
            <div>
                <a href='#'
                   onClick={this.filterAll}
                > All:
                </a>
                <strong>{this.props.data.length} </strong>
                <a href='#'
                   onClick={this.filterTrue}
                > Done:
                </a> <strong>{this.counter(true)} </strong>
                <a href='#'
                   onClick={this.filterFalse}
                > Undone:
                </a> <strong>{this.counter(false)} </strong>
            </div>
        );
    }
}