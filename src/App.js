import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import ReactGA from "react-ga";
import Survey from "./components/Survey";
import Start from "./components/Start";
import Result from './components/Result';


function App() {

  useEffect(() => {
    ReactGA.initialize("UA-237880535-1");
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

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
