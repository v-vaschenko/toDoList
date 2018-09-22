import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {List} from './containers/listt';
import {Form} from './components/form';
import {Item} from "./components/item";
import * as ReactDOM from "react-dom";
let todoList = [
    { text: 1111111111111 },
    { text: 2222222222222 },
    { text: 3333333333333 },
    { text: 4444444444444 }
];
class App extends Component {
    constructor(props){
        super(props);
        this.state = {list: todoList};
    }

  render() {
    return (
      <div className={'app container-fluid'}>
        <div className={'panel-heading'}>
            <h1>ToDo list</h1>
        </div>
          <div className={'panel-body'}>
              <List data = {this.state.list}/>
              <Form/>
          </div>
      </div>
    );
  }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
