import "../styles/Card.sass"
import PropTypes from 'prop-types';
import ellipsis from "../assets/icon-ellipsis.svg";

export const TimeCard = ({title, timeframes, state}) => {

  const [mode] = state;

  const getTotalTime = () => {

    switch (mode) {
      case 0: return timeframes.daily;
      case 1: return timeframes.weekly;
      case 2: return timeframes.monthly;
    }

    return -1;
  };

  const {current, previous} = getTotalTime();

  return (
    <div className="Card">
      <div className="TimeCard">
        <h3>{title}</h3>
        <img src={ellipsis} alt={'ellipsis'} />
        <h4>{`${current}hrs`}</h4>
        <p>{`Last week - ${previous}hrs`}</p>
      </div>
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

TimeCard.propTypes = {
  title: PropTypes.string.isRequired,
  timeframes: PropTypes.object.isRequired,
  state: PropTypes.object.isRequired
};

HeaderCard.propTypes = {
    img: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    state: PropTypes.object.isRequired
};
