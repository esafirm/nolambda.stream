import React from 'react'
import { Link } from 'gatsby'
import './style.scss'

import PortFolioMenu from './PortfolioMenu'

class Menu extends React.Component {
  render() {
    const menu = this.props.data

    const menuBlock = (
      <ul className="menu__list">
        {menu.map(item => (
          <li className="menu__list-item" key={item.path}>
            <Link
              to={item.path}
              className="menu__list-item-link"
              activeClassName="menu__list-item-link menu__list-item-link--active"
            >
              {item.label}
            </Link>
          </li>
        ))}
        <PortFolioMenu />
      </ul>
    )

    return <nav className="menu">{menuBlock}</nav>
  }
}

export default Menu
