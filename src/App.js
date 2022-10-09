import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";
import Survey from "./components/Survey";
import Start from "./components/Start";
import Result from "./components/Result";
import { RecoilRoot } from "recoil";
import ReactGA from "react-ga";

function App() {
  useEffect(() => {
    ReactGA.initialize("UA-237880535-1");
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Start />} />
          <Route path='/test' element={<Survey />} />
          <Route path='/result' element={<Result />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
