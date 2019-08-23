import React from "react";
import {Route} from 'react-router-dom';

import TabNav from './components/TabNav';
import Header from "./components/Header.js";
import EpisodesList from './components/EpisodeList';
import CharacterList from './components/CharacterList';
import LocationsList from './components/LocationsList';
import Home from './components/Home';


export default function App() {
  return (
    <main>
      <Header />
      <TabNav/>
      <Route exact path="/" component={Home} />
      <Route path="/Episodes" component={EpisodesList} />
      <Route path="/Characters" component={CharacterList} />
      <Route path="/Locations" component={LocationsList} />
    </main>
  );
}
