import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Person  from './Person';

export default function Main() {
    let history = useHistory();

    const [name, setName] = useState('')
    const [age, setAge] = useState(0)
    const [listUser, setListuser] = useState([])
    const [value, setValue] = useState('submit')
    const [valueEdit, setValueEdit] = useState({name: '', age: 0})
    const [valuedelete,setvaluedelete] = useState({name:'',age:''})
    const [listCheck,setListCheck] =useState([])
    //  giống    state    setState

    const handleCheckBox =(index)=>{
        if(listCheck.indexOf(index)===-1){
            setListCheck([...listCheck,index])//tao mang moi gom phan tu mang cu
        }else
        {
            setListCheck([...listCheck.filter(item => item != index)])// xoa phan tu giong phan tu cu
        }
    }
    const deleteAll=()=>{
        setListuser([...listUser.filter((item,index)=>!listCheck.includes(index))])
        setListCheck([])
    }
    const submit = () => {
        let obj = {
            name,
            age,
        }
        setName('')
        setAge(0)
        // setListuser([...listUser, obj])
        let newList = listUser
        newList.push(obj)
        setListuser([...newList])
    }

    useEffect(() => {
        console.log("hello lan dau")
    }) // lang nghe su kien thay doi

    useEffect(() => {
        console.log("ban da thay doi tuoi")
    }, [age]) // lang nghe su kien thay doi

    const goAbout = () => {
        history.push('/about')
    }

    const changeName = (event) => setName(event.target.value)
    const addAge = () => setAge(age + 1)
    const MinusAge = () => setAge(age - 1)

    const remove = (index) => {
        listUser.splice(index, 1)
        setListuser([...listUser])
    }


    const edit = (index) => {
        let newList = [...listUser];
        setName(newList[index].name)
        setAge(newList[index].age)
        setValueEdit({name: newList[index].name, age:newList[index].age})
        setValue('edit')
    }
    const renderItem = (item, index) => {
        return (
        <Person
        item = {item}
        remove={remove}
        index ={index}
        edit ={edit}
        handleCheckBox ={handleCheckBox}
        listCheck={listCheck}
        />
        ) 
    }
    const changeValue = () => {
        let newList = [...listUser];
        const a = newList.findIndex(item => item.name === valueEdit.name && item.age === valueEdit.age)
        newList[a].name = name
        newList[a].age = age
        setListuser(newList)
        setValue('submit')
        setName('')
        setAge(0)
    }

    const Cancel = () => {
        setValue('submit')
        setName('')
        setAge(0)
     
    }

    return (
        <div>
            hello {name} age {age}
            <input type='text' value={name} onChange={changeName} />
            <button onClick={addAge}>add</button>
            <button onClick={MinusAge}>Minus</button>
            <button onClick={deleteAll}>Delete</button>
            {/* <button onClick={goAbout}>about</button> */}
            {value === 'submit' ? <button onClick={submit}>submit</button> : <div><button onClick={changeValue}>Edit</button> <button onClick={Cancel}>Cancel</button></div>}
            
            <ul>
                {listUser.map(renderItem)}
                {}
            </ul>
        </div>
    )
}


