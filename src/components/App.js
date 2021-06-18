import Home from "./Home";
import Navbar from "./Navbar";
import Login from "./Login"

import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import { AuthProvider } from "../contexts/AuthContext";
import Signup from "./Signup"
function App() {
  return (
    <Router>
      <AuthProvider> 
        <Navbar /> 
        <Switch>
          <Route exact path= "/" component={Home}/>
        </Switch>
        <Switch>
        <Route path="/Login" component={Login}/>  
          <Route path="/Signup" component={Signup}/>  
        </Switch>
        
      </AuthProvider>
    </Router>
    
    
  );
}

export default App;
