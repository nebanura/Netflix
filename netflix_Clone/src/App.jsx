import { useState } from 'react'
import SearchIcon from "@mui/icons-material/Search";

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Netflix</h1>
      <ul>
        <li><SearchIcon/></li>
      </ul>
    </>
  );
}

export default App
