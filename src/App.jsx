import React from 'react'
import Navbar from './components/Nav/Navbar'
import Input from './components/input/Input'
import globalStyles from './app.module.css'

export default function App() {
  return (
    <main className={globalStyles.main}>
     <Navbar />
      <Input />
    </main>
  )
}
