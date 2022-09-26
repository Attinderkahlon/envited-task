import Homepage from './pages/homepage'
import { Routes, Route } from 'react-router-dom'
import Create from './pages/create'
import Event from './pages/event'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/create' element={<Create />} />
      <Route path='/event' element={<Event />} />
    </Routes>
  )
}

export default App
