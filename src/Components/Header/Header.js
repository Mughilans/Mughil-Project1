import React from 'react'
import { ReactComponent as Logo } from '../../../src/Assets/Crown.svg'
import { auth } from '../../Firebase/Firebase.utils'
import { connect } from 'react-redux'
import CartIcon from '../CartIcon/CartIcon'
import CartDropdown from '../CartDropdown/CartDropdown'
import { createStructuredSelector } from 'reselect'
import { selectCartHidden } from '../../Redux/Cart/CartSelectors'
import { selectCurrentUser } from '../../Redux/User/UserSelectors'
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink, OptionDiv } from './Header.Styles'

const Header = ({ currentUser, hidden }) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo' />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>
                SHOP
            </OptionLink>
            <OptionLink to='/shop'>
                CONTACT
            </OptionLink>
            {currentUser ? (
                <OptionLink as='div' onClick={() => auth.signOut()}>
                    SIGN OUT
                </OptionLink>
            ) : (
                    <OptionLink to='/signin'>
                        SIGN IN
                    </OptionLink>
                )}
            <CartIcon />
        </OptionsContainer>
        {hidden ? null :
            <CartDropdown />}
    </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);