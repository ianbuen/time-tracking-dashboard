import "../styles/Card.sass"
import PropTypes from 'prop-types';

export const TimeCard = () => {
  return (
    <div className="TimeCard">

    </div>
  )
};

export const HeaderCard = ({img, name}) => {
  return (
    <div className="Menu">
      <div className="HeaderCard">
          <img src={img} alt={`photo of ${name}`} />
          <p>Report for</p>
          <h1>{name}</h1>   
      </div>

      <div className="Menu__Items">
        <h2>Daily</h2>
        <h2>Weekly</h2>
        <h2>Monthly</h2>
      </div>
    </div>
  )
}

HeaderCard.propTypes = {
    img: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired
}
