import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Post from './Post'

export default function HomePage(props) {
    // router
    let history = useHistory();
    const goCreatPost = () => {
        history.push('./CreatPost')
    }
    //declare
    const newList = (item,index) => {
        return (
            <Post
            item={item}
            index={index}
            />
        )   
    }

    const container = {
        textAlign: 'center'
    }
    return (
        <div style={container}>
            <div/>Danh sách bài đăng
            <div/><button  onClick={goCreatPost}>Post</button>
            <div/>{props.list.map(newList)}
        </div>
    )
}
