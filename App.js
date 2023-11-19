import React from 'react'
import Header from './components/Header/Header'
import Home from './Pages/Home/Home'
import Search from './Pages/Search/Search'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

const App = () => {
  return (
      <Router>
        <Header />
        <Routes>
          <Route path='/search' element={<Search />} />
          <Route path='/' element={<Home/> } />
        </Routes>
      </Router>
  )
}

export default App
