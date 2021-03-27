import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import HomePage from './HomePage'

export default function CreatPost(props) {
    //Router
    let history = useHistory();
    const goHomePage = () => {
        history.push('/')
    }
    //Declare
    let [name, setName] = useState('')
    let [link, setLink] = useState('')
    let [content, setContent] = useState('')
    let [job, setJob] = useState('Bác sỹ')
    let [listUser, setListUser] = useState([])
    // Function
    const changeName = (event) => setName(event.target.value)
    const changeLink = (event) => setLink(event.target.value)
    const changeContent = (event) => setContent(event.target.value)
    const select = (event) => setJob(event.target.value)

    const Lists = () => {
        let obj = {
            name,
            link,
            content,
            job
        }
        setName('')
        setContent('')
        setLink('')
        props.addList(obj)
        history.push('/')
    }
    const container = {
        textAlign: 'center'
    }
    const button = {



    }
    return (
        <div style={container}>
            <div />Bài đăng mới
            <div /><input value={name} type='text' onChange={changeName} placeholder='Tên người đăng bài' />
            <div>
                <input value={link} type='text' onChange={changeLink} placeholder='Link ảnh' />
                <div /><img src={link} />
            </div>
            <div /><textarea value={content} type='text' onChange={changeContent} placeholder='Nội dung bài viết' />
            <div>
                <select type={button} onChange={select}>
                    <option>Bác sỹ</option>
                    <option>Giáo viên</option>
                    <option>Y tá</option>
                </select>
            </div>
            <div>
                <button onClick={Lists}>Đăng bài</button>
                <button onClick={goHomePage}>Hủy</button>
            </div>
        </div>
    )
}

