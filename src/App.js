import { lazy, Suspense } from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import { helloWorld } from "./Components/index"
import './App.css';

const HelloWorld = lazy(()=>
  import("./Components/index")
);

function App() {
  return (
    <div className="App">
         <Router forceRefresh={true}>
          <Suspense fallback={<p>Loading...</p>}>
          <Routes>
          <Route 
          exact
          path = "/login"
          element={<HelloWorld/>}
          />
          </Routes>
          </Suspense>
         </Router>
    </div>
  );
}

export default App;
