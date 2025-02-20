import { Link, withRouter } from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Header = (props) => {
  const remove = () => {
    const { history } = props
    Cookies.remove('jwt_token') // Make sure 'jwt_token' is the correct cookie name
    history.replace('/ebank/login')
  }

  return (
    <nav className="nav-el">
      <Link to="/" className="nav-el">
        <img
          src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
          className="kt"
          alt="website logo"
        />
      </Link>
      <button type="button" className="logout-button" onClick={remove}>
        Logout
      </button>
    </nav>
  )
}

export default withRouter(Header)
