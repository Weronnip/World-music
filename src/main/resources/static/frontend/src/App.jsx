import { Routes, Route } from 'react-router-dom'

// pages

// import { About } from './View/about';
import { Home } from './View/Home';
// import { Notfald } from './View/Notfault';
// import { Profile } from './View/Profile';

// outlet

import { Layout } from './components/Layout';

function App() {
  return (
  
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home />}/>
          <Route path='home' element={<Home />}/>
          {/* <Route path='profile' element={<Profile />}/>
          <Route path='about' element={<About />}/>
          <Route path='*' element={<Notfald />}/> */}
        </Route>
      </Routes>
  );
}

export default App