import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import HomePage from './components/HomePage'
import FeedPage from './components/FeedPage'

import AppState from './context/AppState'

function App() {

  return (
    <>
      <div className="App">
        <h1>React Context Api</h1>
        <BrowserRouter>
          <nav>
            <ul>
              <li>
                <Link to="/home" >Home</Link>
              </li>
              <li>
                <Link to="/feed" >feed</Link>
              </li>
            </ul>
          </nav>
          <AppState>
            <Routes>
              <Route path="/home" element={<HomePage />} />
              <Route path="/feed" element={<FeedPage />} />
            </Routes>
          </AppState>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
