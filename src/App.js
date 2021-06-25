import './App.css';
import Home from './Components/Home/Home/Home';
import Navbar from './Components/Home/Navbar/Navbar';
import Login from './Components/Login/Login'
import NotFound from './Components/NotFound/NotFound';
import AdmitCourse from './Components/AdmitCourse/AdmitCourse'
import MyCourses from './Components/Home/MyCourses/MyCourses'
import PrivateRoute from './Components/PrivateRoute/PrivateRoute'
import AllAdmisson from './Components/Admin/AllAdmisson/AllAdmisson';
import AddCourse from './Components/Admin/AddCourse/AddCourse';
import AddReviews from './Components/Admin/AddReviews/AddReviews';
import AddAdmin from './Components/Admin/AddAdmin/AddAdmin';



import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>


        <Route path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>

        <PrivateRoute path="/admitCourse/:id">

          <AdmitCourse />
        </PrivateRoute>
        <PrivateRoute path="/MyCourses">
          <MyCourses />
        </PrivateRoute>



        <PrivateRoute path="/allAdmission">
          <AllAdmisson />
        </PrivateRoute>
        <PrivateRoute path="/addCourse">

        <AddCourse></AddCourse>
        </PrivateRoute>
        <PrivateRoute path="/addReview">

          <AddReviews></AddReviews>
        </PrivateRoute>
        <PrivateRoute path="/addAdmin">

          <AddAdmin />
        </PrivateRoute>



        <Route path="*">
          <NotFound />
        </Route>

      </Switch>
      
    </Router>
  );
}

export default App;
