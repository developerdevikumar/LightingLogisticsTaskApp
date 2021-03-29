import Header from './Layout/Components/Header';
import Home from './Components/Home/Home';
import Footer from './Layout/Components/Footer';

import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Gallery from './Components/Gallery/Gallery';


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
 <Route path="/gallery" component={Gallery} />

</Switch>
<Footer />
    </div>

    </Router>
  );
}

export default App;
