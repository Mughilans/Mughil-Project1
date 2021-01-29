import React from 'react'
import CustomButton from '../CustomButton/CustomButton'
import { connect } from 'react-redux'
import CartItem from '../CartItems/CartItems'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'


import './CartDropdown.scss'
import { selectCartItems } from '../../Redux/Cart/CartSelectors'

const CartDropdown = ({ cartItems, history }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.length ? (
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))
            ) : (
                    <span className='empty-message'>Your cart Is Empty</span>
                )
            }
        </div>
        <CustomButton onClick={() => history.push('/checkout')}>
            GO TO CHECKOUT
            </CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));