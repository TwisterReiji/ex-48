import React,{ useEffect, useState } from 'react'

export default function Person (props) {
    let item = props.item
    let index = props.index
    const [color,setcolor]=useState('black')
    const changecolor = () => {
        let aa = Math.floor(Math.random() * 255) + 1
        let bb = Math.floor(Math.random() * 255) + 1
        let cc = Math.floor(Math.random() * 255) + 1
        setcolor(`rgb:(${aa},${bb},${cc})`)
    
    }
    return (
        <li key={index} style={{ color: `rgb(${item.r || 0}, ${item.g || 0}, ${item.b || 0} ` }}>Người thứ {index + 1}, có tên: {item.name}, có tuổi: {item.age}
        <input type='checkbox'style={{width:'20px',height:'20px'}} checked={props.listCheck.includes(index)} onChange={()=>{
            props.handleCheckBox(index)
         
        }}/>
        <button onClick={() => props.remove(index)}>Remove</button>
        <button onClick={() => props.changecolor(index)}>Changecolor</button>
        <button onClick={() =>props.edit(index)}>Edit</button>
    </li>
    )
}
