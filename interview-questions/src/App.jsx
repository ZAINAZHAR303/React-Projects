import { useState } from 'react'

import './App.css'
import menus from "./components/TreeView/data"
import TreeView from './components/TreeView/TreeView'

import QrGenerator from './components/qr-code-generator/QrGenerator'

function App() {



  const [count, setCount] = useState(0)

  return (
    <>
      {/* <TreeView menus={menus} /> */}
      
     <QrGenerator />
    </>
  )
}

export default App
