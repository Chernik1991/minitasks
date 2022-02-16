import React from 'react';

type ButtonPropsType={
    name:string,
    callBack:()=>void

}
export const Button = (props:ButtonPropsType) => {

    const onClickBattonHandler=()=>{
        props.callBack()
    }
    return (
        <button onClick={onClickBattonHandler}>
            {props.name}
        </button>
    )
}