import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// pages
import LandingPage from './pages/landingpage';
import NotFound from './pages/Notfound';
import Dashboard from './pages/dashboard';
import LoginForm from './pages/signin';
import SignupForm from './pages/signup';
import Details from './pages/details';
import Transactions from './pages/transaction';
import Layout from './components/layout';
import Account from './pages/account';
import Wallet from './pages/wallet';
import Developer from './pages/developer';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<LandingPage />} />
        <Route path='/signin' element={<LoginForm />} />
        <Route path='/signup' element={<SignupForm />} />
        
        <Route element={<Layout />}>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/details' element={<Details />} />
          <Route path='/developer' element={<Developer />} />
          <Route path='/account' element={<Account />} />
          <Route path='/wallet' element={<Wallet />} />
          <Route path='/transactions' element={<Transactions />} />
        </Route>
        
        <Route path="*" element={<NotFound />} />
      </>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;