import React from 'react';

const BreweryList = ({breweries}) => {
  console.log("BreweryList render");
  if (breweries.length === 0) {
    return (
      <div id="noBreweries">
        <p>No breweries found.</p>
      </div>
    );
  }
  return (
    <ul className="brewery-list">
      {breweries.map((brewery, idx) => {
        return (
          <li key={`${brewery.id}_${idx}`}>
            <h2>{brewery.name + " "}<span className="marker">{brewery.brewery_type}</span></h2>
            <p>
              <span>{brewery.street}</span>
              <br/>
              <span>{brewery.city + " "}</span>
              <span>{brewery.state}</span>
            </p>
            <p><a className="more-link" href={brewery.website_url}>Visit online...</a></p>
          </li>
        );
      })}
    </ul>
  )
};
export default BreweryList;
