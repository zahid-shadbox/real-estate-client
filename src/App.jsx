import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Website from "./pages/Website";
import "./App.css";
import { Suspense } from "react";
import Layout from "./components/Layout/Layout";
import Properties from "./pages/Properties/Properties";

const App = () => {
  return (
    <Router>
    <Suspense fallback={<div>Loading...</div>}>
    <Routes>
    <Route element={<Layout/>}>
    <Route path="/" element={<Website/>}/>
    <Route path="/properties" element={<Properties/>}/>
    </Route>
    </Routes>
    </Suspense>
    </Router>
  );
};

export default App;
