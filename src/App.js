import './App.css';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
// pages
import LandingPage from './pages/landingpage';


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<LandingPage/>}/>
    )
  )
  return (
    <div className="App">
    <RouterProvider router={router} />
    </div>
  );
}

export default App;
