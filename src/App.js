import Header from './Layout/Components/Header';
import Home from './Components/Home/Home';
import Footer from './Layout/Components/Footer';

import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";


function App() {
  return (
    <Router>
    <div>
<Header />

<Switch>
<Route exact path="/">
                <Redirect to="/home" />
            </Route>
 <Route exact path='/home' component={Home} />
<Home />
</Switch>
<Footer />
    </div>

    </Router>
  );
}

export default App;
