import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import './CollectionOverview.scss'
import CollectionPreview from '../CollectionsPreview/CollectionsPreview'
import { selectCollectionsForPreview } from '../../Redux/Shop/ShopSelector'

const CollectionOverview = ({ collections }) => (
    <div className='collections-overview'>
        {collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
        ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionOverview)