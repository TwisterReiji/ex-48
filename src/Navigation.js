import React, { useState } from "react";
import CreatPost from "./CreatPost"
import HomePage from "./HomePage"
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";
import Pokemon from "./Pokemon";
export default function Navigation() {
    const [list,setList] = useState([])
    const addList = (newPost) => {
        setList([newPost,...list])
    }
    return (
        <Router>
            <Route exact path="/"  render={() => <HomePage list={list}/>}/>
            <Route path="/creatPost" render={() => <CreatPost addList={addList}/>}>
            </Route>
            <Route path='/pokemon'>
                <Pokemon/>
            </Route>
        </Router>
    );
}


