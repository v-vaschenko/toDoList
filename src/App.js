import React, {Component} from 'react';
import './App.css';
import {List} from './containers/listt';
import {Form} from './components/form';
import * as ReactDOM from "react-dom";
import {Filter} from "./components/filter";

let todoList = [
    {text : '111111111111111111111', status : true, id : 1},
    {text : '222222222222222222222', status : true, id : 2},
    {text : '333333333333333333333', status : true, id : 3},
    {text : '444444444444444444444', status : false, id : 4},
    {text : '555555555555555555555', status : false, id : 5},
    {text : '666666666666666666666', status : false, id : 6}
];
let listFiltered = todoList;

export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {list: listFiltered};
        this.inputForm = this.inputForm.bind(this);
        this.deleteFunction = this.deleteFunction.bind(this);
        this.editFunction = this.editFunction.bind(this);
        this.statusChange = this.statusChange.bind(this);
        this.filterFunction = this.filterFunction.bind(this);
        this.filterFunctionAll = this.filterFunctionAll.bind(this);
    }

    inputForm(input) {
        todoList.push({text : input, status : false, id : (todoList.length) + 1})
        this.setState({list: listFiltered});
        console.log(todoList);
    }

    deleteFunction(id) {
        delete listFiltered[id];
        this.setState({list: listFiltered});
    }
    editFunction() {
        todoList[arguments[0]] = arguments[1];
        this.setState ({list : listFiltered});
    }
    statusChange(id){
        console.log(id);
        let status = this.state.list[id].status;
        todoList[id].status = !status;
        this.setState({list : listFiltered});
        console.log(id);
        console.log(status);
    }
    filterFunction(param){
        listFiltered = todoList.filter(function (index) {
            return index.status == param;
        });
        this.setState ({list : listFiltered});
    }
    filterFunctionAll(){
        this.setState ({list: todoList});
    }

    render() {
        return (
            <div className={'app container-fluid'}>
                <div className={'panel-heading'}>
                    <h1> ToDo list </h1>
                </div>
                <div className={'panel-body'}>
                    <List data={this.state.list}
                          delFunc={this.deleteFunction}
                          editFunc = {this.editFunction}
                          done = {this.statusChange}
                    />
                    <Filter data = {this.state.list}
                            filterAll = {this.filterFunctionAll}
                            filterFalse = {this.filterFunction}
                            filterTrue = {this.filterFunction}
                    />
                    <Form inputFunc={this.inputForm}/>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
