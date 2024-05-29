import { Outlet } from 'react-router-dom'
import { CartIcon } from '../../components/cart-icon/cart-icon'
import './navigation.scss'
import { NavLink } from 'react-router-dom'

export function Navigation() {
  return (
    <>
      <div className="navigation">
        <div className='logo-container'>
          <NavLink to="/">
            <h1>Coder E-commerce</h1>
          </NavLink>
        </div>
        <div className="nav-links-container">
          <NavLink className="nav-link" to="/shop">
            SHOP
          </NavLink>
          <NavLink className="nav-link" to="/auth">
            LOGIN
          </NavLink>
          <CartIcon />
        </div>
      </div>
      <Outlet />
    </>
  )
}
