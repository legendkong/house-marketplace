import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import Explore from './pages/Explore'
import Category from './pages/Category'
import Offers from './pages/Offers'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Profile from './pages/Profile'
import ForgotPassword from './pages/ForgotPassword'

function App() {
  return (
    <>

    <Router>
      <Routes>
        <Route path='/' element={<Explore />} />
        <Route path='/offers' element={<Offers />} />
        <Route path='/category/:categoryName' element={<Category />} />
        {/* Protected Routes in version 6 (Nested) */}
        <Route path='/profile' element ={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
        </Route>
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/sign-in' element={<SignIn />} />
        
        <Route path='/forgot-password' element={<ForgotPassword />} />
      </Routes>
      <Navbar />
    </Router>

    <ToastContainer />
    </>
  );
}

export default App;
