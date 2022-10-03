import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactGA from "react-ga";
import Survey from "./components/Survey";
import Start from "./components/Start";
import Result from './components/Result'
import RouteChangeTracker from "./components/RouteChangeTracker";

function App() {

  RouteChangeTracker();

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
