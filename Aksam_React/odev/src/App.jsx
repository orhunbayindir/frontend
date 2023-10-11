import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'
import { getResult } from './service/api'

function App() {
 const [results, setResults] = useState([])

useEffect(()=>{
  getResult().then(data=>setResults(data))
},[])

  return (
    <div className='app'>

     <div className='results'>
      {results.map(result=>(
        <Card result = {result} />
      ))}
     </div>
    </div>
  )
}

export default App
