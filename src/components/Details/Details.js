import React from "react";
import "./Details.css";
import Carousel from "../Carousel/Carousel";

const Details = ({ selectedListing }) => {
  let { name, address, details, listing_id } = selectedListing;
  let { street, zip } = address;
  let { beds, baths, cost_per_night, features } = details;

  console.log(
    name,
    address,
    street,
    zip,
    beds,
    baths,
    cost_per_night,
    features
  );

  const uppercase = string => {
    let stringArray = string.split("");
    stringArray[0] = stringArray[0].toUpperCase();
    let newWord = stringArray.join("");
    return newWord;
  };

  return (
    <section className="details">
      <div className="title-btn-container">
        <div className="title-address-container">
          <h1 className="details-title">{name}</h1>
          <h2 className="details-address">
            {street} {zip}
          </h2>
        </div>
        <button className="details-fav-btn">
          <i class="far fa-heart"></i>Favorite
        </button>
      </div>

      <div className="details-body">
        <div className="other-details-container">
          <div className="bed-bath-container">
            <div className="bed-bath-display">
              <div className="num-beds">{beds}</div> <div>beds</div>
            </div>
            <div className="bed-bath-display">
              <div className="num-baths">{baths}</div> <div>baths</div>
            </div>
          </div>
          <div className="cost-per-night-container">
            <span className="cost-highlight">${cost_per_night}</span>/night
          </div>

          {!!features.length && (
            <div className="features-list">
              <h3 className="features-title">Features</h3>
              <ul>
                {features.map(feature => {
                  return <li>{uppercase(feature)}</li>;
                })}
              </ul>
            </div>
          )}
        </div>
        <Carousel listing_id={listing_id} />
      </div>
    </section>
  );
};

export default Details;
