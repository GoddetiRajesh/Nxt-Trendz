import CartContext from '../../context/CartContext'

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
          <button type="button" className="cart-button">
            Checkout
          </button>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
