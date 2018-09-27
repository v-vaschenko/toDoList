import React from 'react';
import * as ReactDOM from "react-dom";
import {Item} from "../components/item";

export class List extends React.Component {
    constructor() {
        super();
    }

    render() {
        let data = this.props.data;
        let del = this.props.delFunc;
        let done = this.props.done;
        let edit = this.props.editFunc;
        let toDOs;
        toDOs = data.map(function (item, index) {
            return (
                <Item className={'item' + (data[index].status)}
                      key={index}
                      data={item}
                      index={index}
                      id={data[index].id}
                      status={data[index].status}
                      del={del}
                      edit={edit}
                      done={done}
                />
            );
        })
        return (
            <div className={'list'}>
                {toDOs}
            </div>
        )
    }
}