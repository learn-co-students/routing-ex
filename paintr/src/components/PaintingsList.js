import React from "react";
import PaintingListItem from "./PaintingListItem";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

const PaintingsList = props => (
  <div className="ui narrow container">
    <div className="ui relaxed celled list">
      {props.paintings.map(painting => {
        console.log('painting', painting)
        return (

        <Link to={`/paintings/${painting.id}` }> 
        <PaintingListItem
          selectPainting={props.selectPainting}
          painting={painting}
        />
        </Link> 
      )}
      )}
    </div>
  </div>
);

export default PaintingsList;
