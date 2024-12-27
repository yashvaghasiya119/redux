import { useSelector } from "react-redux"
import { Counter } from "./counter"
import { Button } from "./upgradebtn"
import { Privacy } from "./privacy"


function App() {

  let d = useSelector((state) => state.privacy)
  let theme = useSelector((state) => state.theme)
  return <>
    <div className={theme ? "white" : "black"}>
      <div className="header3">
        <ul className="menu3">
          <li>Home</li>
          <li>About</li>
          <li>Blog</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
      <h2 className="head">head</h2>
      {/* <Reduser/> */}
      {d ? <Privacy /> : <Counter />}
      <Button />
    </div>

  </>
}

export default App
