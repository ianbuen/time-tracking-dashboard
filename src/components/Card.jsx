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
    <div className="HeaderCard">
        <img src={img} alt={`photo of ${name}`} />
        <p>Report for</p>
        <h1>{name}</h1>   
    </div>
  )
}

HeaderCard.propTypes = {
    img: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired
}
