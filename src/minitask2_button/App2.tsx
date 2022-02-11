import React from 'react';
import './App2.css';


export function App2() {

    // const myFirstSubscriber=()=>{
    //     console.log('HelloWorld2')
    // }
    // const myFirstSubscriber2=()=>{
    //     console.log('HelloWorld22')
    // }

    const onClicHandler=(name:string)=>{
        console.log(name)
    }

    return (
        <div className='App2'>
            {/*/!*<button onClick={(event)=>{console.log('HelloWorld')}}>MyYouTubeChenel-1</button>*!/*/}
            <button onClick={(event )=> onClicHandler('Ivan')} >MyYouTubeChenel-1</button>
            <button onClick={(event )=> onClicHandler('Vasya')} >MyYouTubeChenel-2</button>

        </div>
                )
}
