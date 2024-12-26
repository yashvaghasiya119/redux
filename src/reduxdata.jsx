import { configureStore } from "@reduxjs/toolkit";
import { createStore } from "redux";
// configureStore

let data= {
    counter:0,
    privacy:false
}

let reduser = (state =data,action)=>{
    if(action.type === "inc"){
        return {counter:state.counter +1,privacy:state.privacy}
    }
   else if(action.type === "dec"){
        return {counter:state.counter - 1}
    }
   else if(action.type === "addfive"){
        return { ...state, counter:state.counter + action.payload.num }
    }
    else if (action.type === "minfive") {
        return { ...state, counter: state.counter - action.payload.num };
    }
    else if (action.type === "inputadd") {
        return { ...state, counter: state.counter +  Number(action.payload.num) };
    }
    else if (action.type === "inputmin") {
        return { ...state, counter: state.counter -  Number(action.payload.num) };
    }
    else if (action.type === "privacy") {
        return { ...state, privacy:!state.privacy }
    }
    return state
}

export let storedata = createStore(reduser)