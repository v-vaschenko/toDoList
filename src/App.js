import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {List} from './containers/listt';
import {Form} from './components/form';
import {Item} from "./components/item";
import * as ReactDOM from "react-dom";
let todoList = [
    { text: 1111111111111},
    { text: 1111111111111},
    { text: 1111111111111}
];
class App extends Component {
    constructor(props){
        super(props);
        this.state = {list:todoList};
        this.inputForm = this.inputForm.bind(this);
    }
    inputForm(){
            let input = {text: arguments[0]};
            todoList.push(input);
            this.setState({list: todoList});
}

  render() {
    return (
      <div className = {'app container-fluid'}>
        <div className = {'panel-heading'}>
            <h1> ToDo list </h1>
        </div>
          <div className={'panel-body'}>
              <List data = {this.state.list}/>
              <Form inputFunc = {this.inputForm}/>
          </div>
      </div>
    );
  }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
