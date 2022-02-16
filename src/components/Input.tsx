import React, {ChangeEvent} from 'react';

type InputPropsType={
    title:string,
    setTitle:(title:string)=>void
}
export const Input=(props:InputPropsType)=>{

    const onChangeImputHandler=(event:ChangeEvent<HTMLInputElement>)=>{
        props.setTitle(event.currentTarget.value)
    }

    return(
        <input value={props.title} onChange={onChangeImputHandler}/>

    )
}


// type FullInputPropsType={
//     addMessage:(title:string)=>void
// }
//
// export function FullInput(props:FullInputPropsType) {
//     let [title, setTitle]=useState('')
//
//     const onChangeImputHandler=(event:ChangeEvent<HTMLInputElement>)=>{
//         setTitle(event.currentTarget.value)
//     }
//
//     const onClickButtonHandler=()=>{
//         props.addMessage(title)
//         setTitle('')
//     }
//     return (
//         <div>
//             <input value={title} onChange={onChangeImputHandler}/>
//             <button onClick={onClickButtonHandler}>+</button>
//         </div>
//
//     )
// }
