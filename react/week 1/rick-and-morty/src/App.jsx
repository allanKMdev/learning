import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CharacterList from './CharacterList.jsx';
import CharacterDetail from './CharacterDetail.jsx';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={CharacterList} />
        <Route path="/character/:id" component={CharacterDetail} />
      </Switch>
    </Router>
  );
}

export default App;
