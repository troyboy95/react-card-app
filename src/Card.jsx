const Card = ({ beer }) => {
    return (
      <div className="bottle-card">
        <h2 style={{ border: '1px soild #fff' }}>{beer.name}</h2>
        <p>{beer.tagline}</p>
        <p>ABV: {beer.abv}%</p>
        <p>Description: {beer.description}</p>
      </div>
    );
  };

  export default Card