import React,{useEffect, useState} from 'react'
import {getPokemon} from './Axios'
import './Pokemon.css'

export default function Pokemon() {
    const [name,setName] = useState('')
    const [data,setData] =useState(null)
    const changeName = (event) =>setName(event.target.value)
    const [loading,setLoading] = useState(false)

    const fetchPokemon = () =>{
        if (name) {
            setLoading(true)
            getPokemon(name).then(res=>{
                setTimeout(() => {
                    setData(res.data)
                    console.log(res.data);
                    setLoading(false)   
                }, 2000);
            }).catch(err =>setData(null))   
        }
        else{
            alert('nhap ten de')
        }
    }
    return (
        <div>
            <input type='text' value={name} onChange={changeName}>
            </input>
            <button onClick={fetchPokemon}>Search</button>
            { loading ? <div class="lds-heart"><div></div></div> : data ? (<div>
            <p>Thông tin :{data.name}</p>
            <p>Cân nặng :{data.weight}</p>
            <img src={data?.sprites?.other["official-artwork"]?.front_default} />
            </div>) : <p>Khong co co nao ten la:{name} dau</p>}
        </div>
    )
}
