import React from 'react'
import './App.css';
import Homepage from "./Pages/Homepage.js"
import { Switch, Route, Redirect } from 'react-router-dom'
import ShopPage from './Pages/ShopComponent/ShopComponent'
import Header from './Components/Header/Header'
import SignInUp from './Pages/Sign-in&Sign-up/SignInUp'
import { auth, createUserProfileDocument, addCollectionAndDocuments } from './Firebase/Firebase.utils'
import { connect } from 'react-redux'
import { setCurrentUser } from './Redux/User/UserAction'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from './Redux/User/UserSelectors';
import { selectCollectionForPreview } from './Redux/Shop/ShopSelector'
import CheckoutPage from './Pages/Checkout/CheckOut'


class App extends React.Component {


  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser, collectionArray } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
      setCurrentUser(userAuth);
      addCollectionAndDocuments('collections', collectionArray)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {


    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/checkout' component={CheckoutPage} />
          <Route exact path='/signin' render={() =>
            this.props.currentUser ?
              (<Redirect to='/' />
              ) : (
                <SignInUp />
              )}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionArray: selectCollectionForPreview
})


const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
