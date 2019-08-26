import React from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class TabNav2 extends React.Component {
  state = {}
  handleItemClick = (e, { name }) =>
    this.setState({ activeItem: name })
  render() {
    const { activeItem } = this.state
    return (
      <Menu>
        <Menu.Item
          as={Link} to='/'
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>
        <Menu.Item
          as={Link} to='/Characters'
          name='Characters'
          active={activeItem === 'first-page'}
          onClick={this.handleItemClick}
        >
       
        </Menu.Item>
        <Menu.Item
          as={Link} to='/Episodes'
          name='Episodes'
          active={activeItem === 'first-page'}
          onClick={this.handleItemClick}
        >
            </Menu.Item>
         <Menu.Item
          as={Link} to='/Locations'
          name='Locations'
          active={activeItem === 'first-page'}
          onClick={this.handleItemClick}
        >
       
        </Menu.Item>
      </Menu>
    )
  }
}
export default TabNav2;