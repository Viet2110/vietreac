import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Todolist from './pages/todolist/Todolist'
import ClientRouter from './routers/ClientRouter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Header/>
       <ClientRouter />
       <Footer />
    </>
  )
}

export default App
