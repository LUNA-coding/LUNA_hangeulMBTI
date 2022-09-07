import { BrowserRouter, Routes, Route } from "react-router-dom";
import Survey from "./components/Survey";
import Start from "./components/Start";
import Result from './components/Result'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Start />} />
          <Route path="/test" element={<Survey />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </BrowserRouter>
        
    </div>
  );
}

export default App;
