import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './routes/Home'
import Error from './routes/Error'
import Sidebar from './components/sidebar'
import DragZone from './components/dragZone'
import Settings from './routes/Settings'

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <DragZone />
        <Sidebar />
        <div className='app__main'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App