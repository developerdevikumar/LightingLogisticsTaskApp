import Header from './Layout/Components/Header';
import Home from './Screens/Home/Home';
import Footer from './Layout/Components/Footer';

import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Gallery from './Screens/Gallery/Gallery';
import SidebarLeft from './Screens/SidebarLeft/SidebarLeft';
import Grid from './Screens/Grid/Grid';
import Fonts from './Screens/FontsIcons/Components/Fonts';


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
 <Route path="/sidebar-left" component={SidebarLeft} />

 <Route path="/grid" component={Grid} />

 <Route path="/fonts" component={Fonts} />
</Switch>
<Footer />
    </div>

    </Router>
  );
}



export default App;
