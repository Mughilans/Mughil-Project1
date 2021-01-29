import React from "react";
import "./List.scss"
import { withRouter } from 'react-router-dom';

const List = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <div
        className={`${size} List`}
        onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
        <div className="background-image"
            style={{
                backgroundImage: `url(${imageUrl})`
            }} />
        <div className="Content">
            <h1 className="Title">{title.toUpperCase()}</h1>
            <span className="Subtitle">Shop Now</span>
        </div>
    </div >
)

export default withRouter(List);
