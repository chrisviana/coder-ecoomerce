import './cart-item.scss'

export function CartItem() {
  return (
    <div className="cart-item-container">
      <div>
        <img src="https://i.ibb.co/qBcrsJg/white-vest.png"/>
        <div className="item-datails">
          <span className="name">PRODUTO 1</span>
          <span className="price">3 X $50</span>
        </div>
      </div>

      <span>3</span>
    </div>
  )
}