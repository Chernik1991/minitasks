import React from 'react';
import './App.css';
import {NewComponent} from "./site/NewComponent";

function App() {
    const topCars = [
        {manufacturer:'BMW', model:'m5cs'},
        {manufacturer:'Mercedes', model:'e63s'},
        {manufacturer:'Audi', model:'rs6'}
    ]


    return (
        <table>
            <tr>
                <td>manufacturer</td>
                <td>model</td>
            </tr>
            <tr>
            <NewComponent task={topCars}/>
            </tr>
        </table>
    )
        ;
}

export default App;
