import { useSelector } from "react-redux"

export function Counter(){
let data = useSelector((state)=>state.counter)
console.log(data);

    return<>
    <h2>{data}</h2>
    </>
}