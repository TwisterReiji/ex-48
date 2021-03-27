import React, { Component, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
export default function Main() {
    const [listUser, setlistUser] = useState([])
    let history = useHistory();
    const [name, setName] = useState('')
    const [age, setAge] = useState(0)
    const[value,setValue]=useState('submit')
    const [valueEdit,setEdit] =useState({name:'',age:0})
    const changeName = (event) => setName(event.target.value)
    const addAge = () => setAge(age + 1)
    const miusAge = () => setAge(age - 1)
    // useEffect(() => { //theo doi thay doi cua mang giong eventlisten  
    //     console.log('hello ');
    // },[age])
    const goAbout = () => {
        history.push('/about')
    }
    
    const submit = () => {
        let obj = {
            name,
            age,
        }
        setName('')
        setAge(0)

        let newList = listUser
        newList.push(obj)
        setlistUser([...newList])
    }
     // them nut edit vao tung the li 
    // khi bam vao edit thi hien thi tuoi tren o nhap 
    // nut submit thanh edit xuat hien nut cancel 
    // bam cancel thi edit lai tro thanh submit cancel mat ddi
    // bam edit thif edit data giu nguyen thu tu
   const edit=(index) =>{
    let newList = [...listUser];
    setName(newList[index].name)
    setAge(newList[index].age)
    setEdit({name: newList[index].name, age:newList[index].age})
    setValue('edit')
   }
   const changeValue=()=>{
    let newList = [...listUser];
        const a = newList.findIndex(item => item.name === valueEdit.name && item.age === valueEdit.age)
        newList[a].name = name
        newList[a].age = age
        setListuser(newList)
        setValue('submit')
        setName('')
        setAge(0)
}
const Cancel =()=>{
    setValue('submit')
    setName('')
    setAge(0)
}
    const rederItem = (item, index) => {
        return <li key={index} className='color'
            style={{ color: `rgb(${item.r},${item.g},${item.b})` }}
        > nguoi thu {index + 1} co ten :{item.name} tuoi:{item.age}
            <button onClick={remove}>Remove</button>
            <button onClick={() => { colorradom(index) }}>color</button>
            <button  onClick={editer}>Edit</button>
        </li>
    }
   
    const remove = (index) => {
        listUser.splice(index, 1)
        setlistUser([...listUser])
    }
    const colorradom = (index) => {
        let newList = listUser
        let r = Math.floor(Math.random() * Math.floor(255))
        let g = Math.floor(Math.random() * Math.floor(255))
        let b = Math.floor(Math.random() * Math.floor(255))
        console.log(newList)
        newList[index].r = r
        newList[index].g = g
        newList[index].b = b
        setlistUser([...newList])
    }



    return (
        <div>
            hello  {name}
          age {age}
            <input id='change' type='text' value={name} onChange={changeName}  ></input>
            <button onClick={addAge} > Add</button>
            <button onClick={miusAge}>Mius</button>
            {value =='submit' ? <button onClick={submit}>submit</button>: <div><button onClick={changeValue}>Edit</button>
            <button onClick={Cancel}>cancel</button></div>}
            <ul>
                {listUser.map( rederItem )}
            </ul>
        </div>
    )
}