import React from 'react';
import * as ReactDOM from "react-dom";
import {Item} from "../components/item";

export class List extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let data = this.props.data;
        let toDOs;
        if (this.props.data.length > 0) {
            toDOs = data.map(function (item, index) {
                return (
                    <div className={'item'}
                         key={index}>
                        <Item data={item}/>
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