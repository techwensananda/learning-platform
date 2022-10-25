import { Route, Routes } from 'react-router-dom';
import './App.css';
import CourseDetails from './pages/course/CourseDetails';
import Courses from './pages/course/Courses';
import Home from './pages/course/Home';
import Login from './pages/course/Login';
import Order from './pages/course/Order';
import Register from './pages/course/Register';
import PrivateRoute from './routes/PrivateRoute';

function App() {
  return (
    <>
      <Routes >
        <Route path='/' element={<Home/>} />
        <Route path='/courses' element={<Courses/>} />
        <Route path='/courses/:coursename' element={<CourseDetails/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/order/:id' element={

          <PrivateRoute>
            <Order/>
          </PrivateRoute>
        } />

     
    </Routes>
    </>
  );
}

export default App;
