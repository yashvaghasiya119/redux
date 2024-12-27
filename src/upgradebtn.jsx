import { useRef, useState } from "react"
import { useDispatch } from "react-redux"

    export  function Button(){

let dispatch = useDispatch()

function inc(){
    dispatch({type:"inc"})
}

function dec(){
    dispatch({type:"dec"})
}

function addfive(){
    dispatch({type:"addfive",payload:{num:5}})
}
function addone(){
    dispatch({type:"minfive", payload:{num:5}})
}
function rendomadd(){
    dispatch({type:"inputadd", payload:{num:num}})
}
function rendomsub(){
    dispatch({type:"inputmin", payload:{num:num}})
}
function privacy(){
    dispatch({type:"privacy"})
}
function theme(){
    dispatch({type:"change-theme"})
}
let [num,setnum]=useState("")

        return<>
        <button onClick={inc}> INc</button>
        <button onClick={dec}>dec</button>
        <button onClick={privacy}>Privacy</button><br/>
        <button onClick={addfive}>add five</button>
        <button onClick={addone}>min five</button>
        <input type="text" value={num} onChange={(e)=> setnum(e.target.value)}  />       
        <button onClick={rendomadd}>randomadd</button>
        <button onClick={rendomsub}>randomadd</button>
        <br/>
        <button onClick={theme}>Change theme</button>
         </>
    }