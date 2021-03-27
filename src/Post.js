import React from 'react'

export default function (props) {
    let item = props.item
    let index = props.index
    let list = props.list

    // const delete = () =>{
        
    // }
    
    return (
        <div >
            <div/>{item.name}
            <div>
                <img src={item.link}/>
            </div>
            <div/>{item.content}
            <div/>Nghề Nhiệp: {item.job}
            <button >Delete</button>
        </div>
    )
}
