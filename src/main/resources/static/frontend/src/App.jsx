import { Routes, Route } from 'react-router-dom'

// pages
import { Home } from './View/Home';
import { Notfound } from './View/notfound';

// outline
import { Layout } from './components/Layout'

function App() {
  return (
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home />}/>
          <Route path='home' element={<Home />}/>
          <Route path='*' element={<Notfound />}/>
        </Route>
      </Routes>
  );
}

export default App