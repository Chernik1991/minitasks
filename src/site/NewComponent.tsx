export type studentType = {
    manufacturer: string,
    model: string
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
                        <td>{m.manufacturer}</td>
                        <td>{m.model}</td>
                    </tr>)}
                )
            }
        </>

    )
}

