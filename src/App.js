
import { Routes,  Route } from "react-router-dom";
import Splash from './Splash';
import Home from './Home';
import Sal from './projects/Sal';
import Sal2 from './projects/Sal2';
import Passion from './projects/Passion';
import Lantern from './projects/Lantern';
import Internet from './projects/Internet';
import Hang from './projects/Hang';
import Wrist from './projects/Wrist';
import Guy from './projects/Pastel';
import Simp from './projects/Simp';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/projects" element={<Home />} />
      <Route path="/sal-fedora" element={<Sal />} />
      <Route path="/sal-fedora-2" element={<Sal2 />} />
      <Route path="/passion-policy" element={<Passion />} />
      <Route path="/lantern" element={<Lantern />} />
      <Route path="/internet" element={<Internet />} />
      <Route path="/hang-sesh" element={<Hang />} />
      <Route path="/wrist-inflation" element={<Wrist />} />
      <Route path="/simp" element={<Simp />} />
    </Routes>
  );
}

export default App;