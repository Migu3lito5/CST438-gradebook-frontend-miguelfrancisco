import './App.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Gradebook from './components/Gradebook';
import Assignment from './components/Assignment';
import {BrowserRouter, Switch,  Route} from 'react-router-dom';
import AddAssignment from './components/AddAssignment';
import { Button } from '@mui/material';

export default function App() {
  return (
    <div className="App">
      <AppBar position="static" color="default">
        <Toolbar>
           <Typography variant="h6" color="inherit">
            Gradebook
           </Typography>
        </Toolbar>
      </AppBar>    
      <BrowserRouter>
       <Switch>
        <Route exact path='/' component={Assignment} />
        <Route path='/gradebook' component={Gradebook} />
        <Route path='/add' component={AddAssignment}/>
       </Switch>
      </BrowserRouter>
    </div>
  );
}


// export default function App() {
//   return  (
//     <h1>Hello World</h1>
//   )
// }

