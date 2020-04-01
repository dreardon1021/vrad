import React, { Component } from "react";
import PropTypes from "prop-types";
import "./ListingsContainer.css";
import Listing from "../Listing/Listing";
import MapContainer from "../MapContainer/MapContainer";
import { render } from "react-dom";

class ListingsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { listingsToMap: [] };
  }

  componentDidMount() {
    this.getLatLong(this.props.listingsData);
  }

  getLatLong = listingsToMap => {
    let listings = listingsToMap.map(listing => {
      console.log(listing.address.street);
      return fetch(
        `https://nominatim.openstreetmap.org/?addressdetails=1&q=${listing.address.street
          .split(" ")
          .join("+")}+${listing.address.zip}&format=json&limit=1`
      )
        .then(response => response.json())
        .then(data => {
          console.log(data[0].lat);
          return {
            listing_id: listing.listing_id,
            area_id: listing.area_id,
            name: listing.name,
            lat: data[0].lat,
            lng: data[0].lon,
            address: listing.address,
            details: listing.details
          };
        })
        .catch(error => console.log(error));
    });
    Promise.all(listings).then(response =>
      this.setState({ listingsToMap: response })
    );
  };

  render() {
    return (
      <section
        data-testid="listing-container"
        className="listings-card-container"
      >
        {" "}
        <h2 className="listings-header">
          {this.props.pathname.includes("/favorites")
            ? "Favorites"
            : "Listings"}
        </h2>
        {this.props.favorites.length === 0 &&
        this.props.pathname === "/favorites" ? (
          <div class="no-favorites">
            <h3>You have no favorites!</h3>
          </div>
        ) : (
          ""
        )}
        <div className="listings-container-inner">
          <MapContainer listings={this.state.listingsToMap} />
          {/* {props.listingsData.map(listing => {
          return (
            <Listing
              name={listing.name}
              listing_id={listing.listing_id}
              area_id={props.area_id}
              key={listing.listing_id}
              favorite={props.favorites.includes(listing.listing_id)}
              addDeleteFavorite={props.addDeleteFavorite}
            />
          );
        })} */}
        </div>
      </section>
    );
  }
}

export default ListingsContainer;

ListingsContainer.propTypes = {
  addDeleteFavorite: PropTypes.func,
  area_id: PropTypes.number,
  favorites: PropTypes.array,
  pathname: PropTypes.string,
  listingsData: PropTypes.array
};
