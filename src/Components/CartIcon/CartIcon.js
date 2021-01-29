import React from 'react'
import { ReactComponent as ShoppingIcon } from '../../Assets/shopping-bag.svg'
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../Redux/Cart/CartAction'
import { selectCartItemsCount } from '../../Redux/Cart/CartSelectors'

import './CartIcon.scss'
import { createStructuredSelector } from 'reselect'


const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className='cart-icon'>
        <ShoppingIcon className='shopping-icon' onClick={toggleCartHidden} />
        <span className='item-count'>{itemCount}</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);