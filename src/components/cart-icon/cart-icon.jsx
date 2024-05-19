import { ReactComponent as ShoppingIcon}  from '../../assets/shopping-cart-simple.svg'

export function CartIcon() {
  return (
    <div className="cart-icon-container">
      <ShoppingIcon className="shopping-icon" />
    </div>
  )
}