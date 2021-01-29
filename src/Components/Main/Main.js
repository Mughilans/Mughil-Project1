import React from "react";
import List from '../List/List.js'
import './Main.scss'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectDirectorySections } from '../../Redux/Directory/DirectorySelector'

const Main = ({ sections }) => (
    <div className="Main">
        {sections.map(({ id, ...otherSectionProps }) => (
            <List key={id} {...otherSectionProps} />
        ))}
    </div>
);

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStateToProps)(Main);