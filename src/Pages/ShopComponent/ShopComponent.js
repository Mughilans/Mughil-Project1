import React from 'react';
import './ShopComponent.scss'
import CollectionOverview from '../../Components/CollectionOverview/CollectionOverview'
import CollectionPage from '../Collection/Collection'
import { Route } from 'react-router-dom'

const ShopPage = ({ match }) => (
    <div className='shoppage'>
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route exact path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
)


export default ShopPage;