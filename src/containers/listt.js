import React from 'react';
import * as ReactDOM from "react-dom";
import {Item} from "../components/item";

export class List extends React.Component {
    constructor(){
        super();

    }
    render() {
        let data = this.props.data;
        let f = this.props.delFunc;
        let toDOs;
        if (this.props.data.length > 0) {
            toDOs = data.map(function (item, index) {
                return (
                    <div className={'item'}
                         key={index}>
                        <Item data={item}
                              id = {index}
                              func = {f}
                        />
                    </div>
                );
            })
        } else{
            toDOs = <p> Nothing to Do! </p>
            return (
                <div className={'list'}>
                    {toDOs}
                </div>
            );
        }
        return(
            <div className={'list'}>
                {toDOs}
            </div>
        )
    }
}