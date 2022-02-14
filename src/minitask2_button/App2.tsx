import React from 'react';
import './App2.css';
import {Button} from './components/Button';


export function App2() {
    const Button1Foo=(subscriber:string, age:number)=>{
console.log(subscriber,age)
    }
    const Button2Foo=(subscriber:string,)=>{
        console.log(subscriber)
    }
    const Button3Foo=()=>{
        console.log("Im stupped Button")
    }
    return (
        <div className={'App2'}>
            <Button name={"MyYouTubeChenel-1"} callBack={()=>Button1Foo('Im Vasya',21)}/>
            <Button name={"MyYouTubeChenel-2"} callBack={()=>Button2Foo('Im Ivan',)}/>
            <Button name={"Stupped BUTTON"} callBack={Button3Foo}/>
        </div>
                )
}
