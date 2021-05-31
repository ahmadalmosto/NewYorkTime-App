
import './Style/App.css';
import Nav from './Nav'
import Review from './Review'
import Header from './Header'
import Footer from './Footer'
import SearchResults from "./SearchResults"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Nav} />
          <Route path="/search" component={SearchResults} />
          <Route path="/:id" component={Review} />

        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
