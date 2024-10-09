import { useState } from 'react'

import './App.css'
import menus from "./components/TreeView/data"
import TreeView from './components/TreeView/TreeView'
import List from './components/TreeView/list'

function App() {



  const [count, setCount] = useState(0)

  return (
    <>
      <TreeView menus={menus} />
      {/* <List /> */}
     {/* <h1>hello</h1> */}
    </>
  )
}

export default App
