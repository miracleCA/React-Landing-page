import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home"
import Support from "./Pages/Support"
import Terms from "./Pages/Terms"
import Privacy from "./Pages/Privacy"
import Error_404 from "./Pages/Error-404";
import './Assets/App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={ <Home/> } />
        <Route exact path="/support" element={ <Support/> } />
        <Route exact path="/terms" element={ <Terms/> } />
        <Route exact path="/privacy" element={ <Privacy/> } />
        <Route path="*" element={<Error_404/>}/>
      </Routes>
    </div>
  );
}

export default App;