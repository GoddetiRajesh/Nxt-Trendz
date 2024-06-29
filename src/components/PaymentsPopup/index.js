import {Component} from 'react'
import Popup from 'reactjs-popup'

import './index.css'

class PaymentsPopup extends Component {
  state = {type: '', confirmOrder: false}

  updateTypeValue = event => {
    this.setState({type: event.target.id})
  }

  updateConfirm = () => this.setState({confirmOrder: true})

  render() {
    const {itemsCount, totalPrice} = this.props
    const {type, confirmOrder} = this.state
    return (
      <Popup
        trigger={
          <button type="button" className="cart-button">
            Checkout
          </button>
        }
        modal
      >
        {close => (
          <div className="modal">
            <button type="button" className="close" onClick={close}>
              &times;
            </button>
            <h1 className="header"> Payments Type </h1>
            <ul className="payment-content">
              <li className="payment-type">
                <input
                  type="radio"
                  name="payments"
                  id="cardType"
                  className="radio-input"
                  onChange={this.updateTypeValue}
                />
                <label htmlFor="cardType" className="type-text">
                  Card
                </label>
              </li>
              <li className="payment-type">
                <input
                  type="radio"
                  name="payments"
                  id="netBanking"
                  className="radio-input"
                  onChange={this.updateTypeValue}
                  disabled
                />
                <label htmlFor="netBanking" className="type-text">
                  Net Banking
                </label>
              </li>
              <li className="payment-type">
                <input
                  type="radio"
                  name="payments"
                  id="upi"
                  className="radio-input"
                  onChange={this.updateTypeValue}
                />
                <label htmlFor="upi" className="type-text">
                  UPI
                </label>
              </li>
              <li className="payment-type">
                <input
                  type="radio"
                  name="payments"
                  id="wallet"
                  className="radio-input"
                  onChange={this.updateTypeValue}
                />
                <label htmlFor="wallet" className="type-text">
                  Wallet
                </label>
              </li>
              <li className="payment-type">
                <input
                  type="radio"
                  name="payments"
                  id="cod"
                  className="radio-input"
                  onChange={this.updateTypeValue}
                />
                <label htmlFor="cod" className="type-text">
                  Cash on Delivery
                </label>
              </li>
            </ul>
            <div className="order-summary">
              <div className="order-container">
                <h1 className="cart-summary-heading">
                  Order Total:{' '}
                  <span className="total-price">Rs {totalPrice}/-</span>
                </h1>
                <p className="cart-items">{itemsCount} Items in cart</p>
                {type === 'cod' ? (
                  <button
                    onClick={this.updateConfirm}
                    className="confirm-button"
                    type="button"
                  >
                    Confirm Order
                  </button>
                ) : (
                  <button
                    disabled
                    onClick={this.updateConfirm}
                    className="confirm-button"
                    type="button"
                  >
                    Confirm Order
                  </button>
                )}
              </div>
            </div>
            {confirmOrder && (
              <p className="confirm-msg">
                Your order has been placed successfully
              </p>
            )}
            <div className="actions">
              <button
                className="button"
                type="button"
                onClick={() => {
                  close()
                }}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </Popup>
    )
  }
}

export default PaymentsPopup
