import React from 'react';
import './App1.css';
import {NewComponent} from "./NewComponent";

export function App1() {
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
