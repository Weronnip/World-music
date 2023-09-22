import { Routes, Route } from 'react-router-dom'

// pages
import { Home } from './View/Home';
import { Notfound } from './View/notfound';
import { Profile } from './View/Profile';
import { Library } from './View/Library';

// outline
import { Layout } from './components/Layout'

function App() {
  return (
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home />}/>
          <Route path='home' element={<Home />}/>
          <Route path='profile' element={<Profile />}/>
          <Route path='library' element={<Library />}/>
          <Route path='*' element={<Notfound />}/>
        </Route>
      </Routes>
  );
}

export default App