import React from 'react'
import './style.scss'

// eslint-disable-next-line import/first
import { OutboundLink } from 'gatsby-plugin-google-analytics'

class PortFolioMenu extends React.Component {
  render() {
    return (
      <OutboundLink
        href="https://esaportfolio.netlify.com/"
        className="menu__list-item-link"
        activeClassName="menu__list-item-link menu__list-item-link--active"
      >
        My Works
      </OutboundLink>
    )
  }
}

export default PortFolioMenu
