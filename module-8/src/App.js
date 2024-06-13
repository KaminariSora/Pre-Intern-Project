import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ComponentNav from './ComponentNav/ComponentNav';
import Component1 from './8-1Component/8-1Component';
import Component2 from './8-2Component/8-2Component';
import Component3_1 from './8-3Component/8-3-1Component';
import Component4 from './8-4Component/8-4Component';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Component1 />} />
          <Route path="/Component8_1" element={<Component1 />} />
          <Route path="/Component8_2" element={<Component2 />} />
          <Route path="/Component8_3_1" element={<Component3_1 />} />
          <Route path="/Component8_4" element={<Component4 />} />
        </Routes>
    </Router>
  );
}

export default App;
