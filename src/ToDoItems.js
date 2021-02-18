import React, { Component } from 'react';


class ToDoItems extends Component {

    constructor(props) {
        super(props);
        this.createTasks = this.createTasks.bind(this);
    }

    createTasks(item) {
        return <li key={item.key} draggable>{item.text}<div className='itemDelete' onClick={() => this.delete(item.key)}>
            <i className="fas fa-trash"></i></div></li>
    }

    delete(key) {
        this.props.delete(key);
    }

    render() {
        const todoEntries = this.props.entries;
        const listItems = todoEntries.map(this.createTasks);
        return (
            <ul className="theList">
                {listItems}
            </ul>
        );
    }
}

export default ToDoItems;