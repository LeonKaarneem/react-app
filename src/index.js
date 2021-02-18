import React from 'react';
import reactDOM from 'react-dom';
import './index.css';
import ToDoList from './ToDoList';

const destination = document.querySelector("#container");

reactDOM.render(
    <div>
        <ToDoList/>
    </div>,
    destination
);