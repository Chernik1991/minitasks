import React, {ChangeEvent, useState} from 'react';


export function FullInput() {
    let [title, setTitle]=useState('')

    const onChangeImputHandler=(event:ChangeEvent<HTMLInputElement>)=>{
        setTitle(event.currentTarget.value)
    }
    return (
            <div>
                <input onChange={onChangeImputHandler}/>
                <button onClick={()=>{}}>+</button>
            </div>

    )
}
