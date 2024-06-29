import CartContext from '../../context/CartContext'
import PaymentsPopup from '../PaymentsPopup'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const items = cartList.length
      let totalPrice = 0
      for (let i = 0; i < items; i += 1) {
        totalPrice += cartList[i].price * cartList[i].quantity
      }
      return (
        <>
          <h1 className="cart-summary-heading">
            Order Total: <span className="total-price">Rs {totalPrice}/-</span>
          </h1>
          <p className="cart-items">{items} Items in cart</p>
          <PaymentsPopup itemsCount={items} totalPrice={totalPrice} />
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
