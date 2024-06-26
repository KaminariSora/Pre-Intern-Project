import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Component1 from './8-1Component/8-1Component';
import Component2 from './8-2Component/8-2Component';
import Component3_1 from './8-3Component/8-3-1Component';
import Component3_2 from './8-3Component/8-3-2Component';
import Component3_3 from './8-3Component/8-3-3Component';
import Component4 from './8-4Component/8-4Component';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Component1 />} />
          <Route path="/Component8_1" element={<Component1 />} />
          <Route path="/Component8_2" element={<Component2 />} />
          <Route path="/Component8_3_1" element={<Component3_1 />} />
          <Route path="/Component8_3_2" element={<Component3_2 />} />
          <Route path="/Component8_3_3" element={<Component3_3 />} />
          <Route path="/Component8_4" element={<Component4 />} />
        </Routes>
    </Router>
  );
}

export default App;
