import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import ReactGA from "react-ga";
import Survey from "./components/Survey";
import Start from "./components/Start";
import Result from './components/Result';
import {
  RecoilRoot,
} from 'recoil';


function App() {

  return (
    <div>
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Start />} />
            <Route path="/test" element={<Survey />} />
            <Route path="/result" element={<Result />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
      
        
    </div>
  );
}

export default App;
