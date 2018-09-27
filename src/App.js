import React, {Component} from 'react';
import './App.css';
import {List} from './containers/listt';
import {Form} from './components/form';
import * as ReactDOM from "react-dom";
import {Filter} from "./components/filter";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

let todoList = [
    {text: '111111111111111111111', status: true, id: 0},
    {text: '222222222222222222222', status: true, id: 1},
    {text: '333333333333333333333', status: true, id: 2},
    {text: '444444444444444444444', status: false, id: 3},
    {text: '555555555555555555555', status: false, id: 4},
    {text: '666666666666666666666', status: false, id: 5}
];
let listFiltered = [];

export class App extends Component {
    notifyDelete = () => toast("Item successfully deleted");
    notifyAdd = () => toast("Item successfully added!");
    notifyEdit = () => toast("Item successfully edited");
    notifyStatus = () => toast("Status successfully changed");
    notifyDelDone = () => toast("Done items cleared");
    notifyEmpty = () => toast("Form is Empty!");


    constructor(props) {
        super(props);
        this.state = {
            list: todoList,
            filter: 'none'
        };
        this.inputForm = this.inputForm.bind(this);
        this.deleteFunction = this.deleteFunction.bind(this);
        this.editFunction = this.editFunction.bind(this);
        this.statusChange = this.statusChange.bind(this);
        this.filterFunction = this.filterFunction.bind(this);
        this.filterFunctionAll = this.filterFunctionAll.bind(this);
        this.delAllDone = this.delAllDone.bind(this);
    }

    inputForm(input) {
        todoList.push({
            text: input,
            status: false,
            id: todoList.length === 0 ? 0 : ((todoList[todoList.length - 1].id + 1))
        });
        if (this.state.filter === 'none') {
            this.setState({list: todoList});
        }
        else {
            this.setState({list: listFiltered});
        }
        this.filterFunction(this.state.filter);
        this.notifyAdd();
    }

    deleteFunction(id) {
        let a = todoList.findIndex(x => x.id === id);
        todoList.splice(a, 1);
        if (this.state.filter === 'none') {
            this.setState({list: todoList});
        }
        else {
            this.setState({list: listFiltered});
        }
        this.filterFunction(this.state.filter);
        this.notifyDelete();
    }

    delAllDone() {
        let arr = [];
        for (let i = 0; i < todoList.length; ++i) {
            todoList[i].status === true ? arr.push(todoList[i].id) : null;
        }
        for (let i = 0; i < arr.length; ++i) {
            let a = todoList.findIndex(x => x.id === arr[i]);
            todoList.splice(a, 1);
        }
        this.setState({list: todoList});
        this.filterFunction(this.state.filter);
        this.notifyDelDone();

    }

    editFunction(id, value) {
        let a = todoList.findIndex(x => x.id === id);
        todoList[a].text = value;
        if (this.state.filter === 'none') {
            this.setState({list: todoList});
        }
        else {
            this.setState({list: listFiltered});
        }
        this.filterFunction(this.state.filter);
        this.notifyEdit;
    }

    statusChange(id) {
        let a = todoList.findIndex(x => x.id === id);
        let status = todoList[a].status;
        todoList[a].status = !status;
        if (this.state.filter === 'none') {
            this.setState({list: todoList});
        }
        else {
            this.setState({list: listFiltered});
        }
        this.filterFunction(this.state.filter);
        this.notifyStatus();
    }

    filterFunction(param) {
        if (param === 'none') {
            return (null);
        }
        else {
            listFiltered = todoList.filter(function (index) {
                return index.status === param;
            });
            this.setState({list: listFiltered});
            this.setState({filter: param});
        }
    }

    filterFunctionAll() {
        this.setState({list: todoList});
        this.setState({filter: 'none'});
    }

    render() {

        return (
            <div className={'app container-fluid justify-content-md-center col-md-5'}>
                <div className={'panel-heading'}>
                    <h1> ToDo list </h1>
                </div>
                <div className={'panel-body'}>
                    <Form inputFunc={this.inputForm}
                          note = {this.notifyEmpty}
                    />
                    <List data={this.state.list}
                          delFunc={this.deleteFunction}
                          editFunc={this.editFunction}
                          done={this.statusChange}
                    />
                    <Filter data={todoList}
                            filterAll={this.filterFunctionAll}
                            filterFalse={this.filterFunction}
                            filterTrue={this.filterFunction}
                            delAllDone={this.delAllDone}
                    />
                    <ToastContainer position="top-right"
                                    autoClose={1000}
                                    hideProgressBar={false}
                                    newestOnTop={false}
                                    closeOnClick
                                    rtl={false}
                                    pauseOnVisibilityChange
                                    draggable
                                    pauseOnHover
                    />

                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
