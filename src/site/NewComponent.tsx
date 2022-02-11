export type studentType = {
    id: number,
    name: string,
    age: number
}
type newComponentType = {
    task: Array<studentType>
}

export const NewComponent = (props:newComponentType) => {
    return (
        <>
            {props.task.map((m:studentType, index:number)=>{
                return(
                    <tr key={index}>
                        <td>{m.name}</td>
                        <td>{m.age}</td>
                    </tr>)}
                )
            }
        </>

    )
}

