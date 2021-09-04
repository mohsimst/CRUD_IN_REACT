import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Home  from './component/Home';
import AllUser from './component/AllUser';
import AddUser from './component/AddUser';
import EditUser from './component/EditUser';
import NotFound from './component/NotFound';
import { Box } from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <>
     <Box style={{width:'80%', margin: 'auto'}}>
     <Router>
           <Navbar />
            <Switch>
                <Route exact path='/' component={ Home } />
                <Route exact path='/all' component={AllUser} />
                <Route exact path='/add' component={AddUser} />
                <Route exact path='/edit/:id' component={EditUser} />
                <Route component={NotFound}/>
            </Switch>
      </Router>
     </Box>
    </>
  );
}

export default App;
