import React, {ChangeEvent, useState} from 'react';
type FullInputPropsType={
    addMessage:(title:string)=>void
}

export function FullInput(props:FullInputPropsType) {
    let [title, setTitle]=useState('')

    const onChangeImputHandler=(event:ChangeEvent<HTMLInputElement>)=>{
        setTitle(event.currentTarget.value)
    }

    const onClickButtonHandler=()=>{
        props.addMessage(title)
        setTitle('')
    }
    return (
            <div>
                <input value={title} onChange={onChangeImputHandler}/>
                <button onClick={onClickButtonHandler}>+</button>
            </div>

    )
}
