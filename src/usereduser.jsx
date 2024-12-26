import { useReducer } from "react"

export function Reduser(){
    function Reduser(state,action){
console.log(state,action);
if(action.op ==="inc"){
    return state + 1
}
else{
    return state - 1
}
    }

    let [count,dispatch]=useReducer(Reduser,0)
    return<>
    <h2>{count}</h2>
    <button onClick={()=>dispatch({op:"inc"})}>inc</button>
    <button  onClick={()=>dispatch({op:"dec"})}>dec</button>
    </>
}
