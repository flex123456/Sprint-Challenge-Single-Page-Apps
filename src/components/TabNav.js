import React from 'react';
import { Tab } from 'semantic-ui-react';
import CharacterList from './CharacterList';
import LocationsList from './LocationsList';
import EpisodesList from './EpisodeList';
import Home from './Home';
import {NavLink} from 'react-router-dom'

const panes = [
  { menuItem: 'Home', render: () => <Tab.Pane> <NavLink to="/"><Home/></NavLink></Tab.Pane> },
  { menuItem: 'Characters', render: () => <Tab.Pane><NavLink to='CharactersList'><CharacterList/></NavLink></Tab.Pane> },
  { menuItem: 'Episodes', render: () => <Tab.Pane><NavLink to='EpisodesList'><EpisodesList/></NavLink></Tab.Pane> },
  { menuItem: 'Locations', render: () => <Tab.Pane><NavLink to='LocationsList'><LocationsList/></NavLink></Tab.Pane> },
]

const TabNav = () => <Tab panes={panes} />

export default TabNav;
