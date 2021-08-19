import React from 'react';
import GlobalStyle from './styles/global'
import { Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar/index';
import Footer from './components/Footer/index';
import Home from './pages/Home';
import GetStarted from './pages/GetStarted';
import PlanSummaryPage from './pages/PlanSummaryPage';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <NavBar />
    <div id='mainBody'>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/getstarted' component={GetStarted} />
        <Route path='/plan/:id/:monthly' component={PlanSummaryPage} />
        <Route path='/plan/:id' component={PlanSummaryPage} />
      </Switch>
    </div>
    <Footer />
  </>
);

export default App;
