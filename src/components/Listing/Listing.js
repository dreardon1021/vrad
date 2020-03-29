import React from "react";
import "./Listing.css";

const Listing = props => {
  return (
    <div data-testid="listing-card" className="card">
      <div className="property-title">
        <h3>{props.name}</h3>
      </div>
      <div className="image-btn">
        <img src={"../images/" + props.listing_id + "_a.jpg"} alt={props.name} />
        <button className="listings-btn">View</button>
      </div>
    </div>
  );
};

export default Listing;
