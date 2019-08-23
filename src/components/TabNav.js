import React from 'react';
import { Tab } from 'semantic-ui-react';
import CharacterList from './CharacterList';
import LocationsList from './LocationsList';
const panes = [
  { menuItem: 'Characters', render: () => <Tab.Pane><CharacterList/></Tab.Pane> },
  { menuItem: 'Episodes', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
  { menuItem: 'Locations', render: () => <Tab.Pane><LocationsList/></Tab.Pane> },
]

const TabNav = () => <Tab panes={panes} />

export default TabNav;
