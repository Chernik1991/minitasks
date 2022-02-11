import React from 'react';
import './App.css';
import {NewComponent} from "./site/NewComponent";

function App() {
    const tasks = [
        {id: 1, name: "James", age: 8},
        {id: 2, name: "Robert", age: 18},
        ]
    return (
        <table>
            <tr>
                <td>Название</td>
                <td>Стоимость</td>
            </tr>
            <tr>
            <NewComponent task={tasks}/>
            </tr>
        </table>
    )
        ;
}

export default App;
