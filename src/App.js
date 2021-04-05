import Header from './Layout/Components/Header';
import Home from './Screens/Home/Home';
import Footer from './Layout/Components/Footer';

import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Gallery from './Screens/Gallery/Gallery';
import Navbar from './Layout/Components/Navbar';


function App() {
  return (
    <Router>
    <div>
<Header />
<Navbar />
<Switch>
<Route exact path="/">
                <Redirect to="/home" />
            </Route>
 <Route exact path='/home' component={Home} />
 <Route path="/gallery" component={Gallery} />

</Switch>
<Footer />
    </div>

    </Router>
  );
}



export default App;
