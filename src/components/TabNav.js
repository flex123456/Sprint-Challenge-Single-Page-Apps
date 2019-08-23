import React from 'react';
import { Tab } from 'semantic-ui-react';
import CharacterList from './CharacterList';
import LocationsList from './LocationsList';
import EpisodesList from './EpisodeList';
import Home from './Home';
import {NavLink} from 'react-router-dom'

const panes = [
  { menuItem: 'Home', render: () => <NavLink to='/'><Tab.Pane><Home/></Tab.Pane></NavLink> },
  { menuItem: 'Characters', render: () => <Tab.Pane><CharacterList/></Tab.Pane> },
  { menuItem: 'Episodes', render: () => <Tab.Pane><EpisodesList/></Tab.Pane> },
  { menuItem: 'Locations', render: () => <Tab.Pane><LocationsList/></Tab.Pane> },
]

const TabNav = () => <Tab panes={panes} />

export default TabNav;
