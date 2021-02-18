import React, { Component } from 'react';
import ToDoItems from './ToDoItems';
import './ToDoList.css';

class ToDoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);

    }

    addItem = (e) => {
        if (this._inputElement.value.match(/(?!^$)([^\s])/)) {
            const newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };
            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });
        } else {
            console.log("Input can't be empty or contain only whitespaces.")
            window.alert("Task can't contain only whitespaces or be empty.");
        }
        this._inputElement.value = "";

        e.preventDefault();
    }

    deleteItem(key) {
        const filteredItems = this.state.items.filter((item) => {
           return (item.key !== key); 
        });

        this.setState({
            items: filteredItems
        });
    }

    render() {
        return (
            <div className="toDoListMain">
                <div className="ToDoListContainers">
                    <h1>To do list</h1>
                    <div className="header">
                    <form onSubmit={this.addItem}>
                        <input ref={(value) => this._inputElement = value}placeholder="enter task"></input>
                        <button type="submit">add</button>
                    </form>
                    </div>
                    <ToDoItems entries={this.state.items} delete={this.deleteItem} />
                </div>
            </div>
        );
    }
}

export default ToDoList;