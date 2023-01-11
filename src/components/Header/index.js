import {Component} from 'react'

import {Link, withRouter} from 'react-router-dom'

import './index.css'

class Header extends Component {
  state = {showMobileMenu: false}

  onClickHamburgerBtn = () => {
    this.setState(prevState => ({showMobileMenu: !prevState.showMobileMenu}))
  }

  onClickCloseIcon = () => {
    this.setState({showMobileMenu: false})
  }

  render() {
    const {showMobileMenu} = this.state
    const {location} = this.props
    const {pathname} = location
    const homeClassName = pathname === '/' ? 'highlight-nav-link' : ''
    const aboutClassName = pathname === '/about' ? 'highlight-nav-link' : ''
    const vaccinationClassName =
      pathname === '/vaccination' ? 'highlight-nav-link' : ''
    return (
      <>
        <nav className="navbar-container">
          <Link to="/" className="link">
            <p className="logo-name">
              COVID19
              <span className="highlight-logo">INDIA</span>
            </p>
          </Link>
          <ul className="desktop-nav-links-container">
            <Link to="/" className="link">
              <li className={`nav-link-item desktop-nav-link ${homeClassName}`}>
                Home
              </li>
            </Link>
            <Link to="/vaccination" className="link">
              <li
                className={`nav-link-item desktop-nav-link ${vaccinationClassName}`}
              >
                Vaccination
              </li>
            </Link>
            <Link to="/about" className="link">
              <li
                className={`nav-link-item desktop-nav-link ${aboutClassName}`}
              >
                About
              </li>
            </Link>
          </ul>
          <button
            type="button"
            onClick={this.onClickHamburgerBtn}
            className="mobile-nav-button"
          >
            <img
              src="https://res.cloudinary.com/dkxj0xjra/image/upload/v1672040731/Covid%20Dashboard/nav-icon_n1fkqy.png"
              alt="mobile menu"
              className="mobile-menu-image"
            />
          </button>
        </nav>
        {showMobileMenu && (
          <ul className="mobile-menu-list">
            <Link to="/" className="link">
              <li className={`nav-link-item mobile-nav-link ${homeClassName}`}>
                Home
              </li>
            </Link>
            <Link to="/vaccination" className="link">
              <li
                className={`nav-link-item mobile-nav-link ${vaccinationClassName}`}
              >
                Vaccination
              </li>
            </Link>
            <Link to="/about" className="link">
              <li className={`nav-link-item mobile-nav-link ${aboutClassName}`}>
                About
              </li>
            </Link>
            <li className="mobile-close-btn-container">
              <button
                type="button"
                onClick={this.onClickCloseIcon}
                className="close-icon-container"
              >
                <img
                  src="https://res.cloudinary.com/dkxj0xjra/image/upload/v1672044667/Covid%20Dashboard/close_afraqj.png"
                  className="mobile-close-icon"
                  alt="close icon"
                />
              </button>
            </li>
          </ul>
        )}
      </>
    )
  }
}

export default withRouter(Header)
