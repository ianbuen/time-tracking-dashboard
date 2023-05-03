import "../styles/Card.sass"
import PropTypes from 'prop-types';
import ellipsis from "../assets/icon-ellipsis.svg";
import { useRef } from "react";

export const TimeCard = ({title, timeframes, state}) => {

  const [mode] = state;
  const refCard = useRef(null);

  const getTotalTime = () => {

    switch (mode) {
      case 0: return timeframes.daily;
      case 1: return timeframes.weekly;
      case 2: return timeframes.monthly;
    }

    return -1;
  };

  const {current, previous} = getTotalTime();

  const getPreviousTimeText = () => {

    let text = "";

    switch (mode) {
      case 0: text = `Yesterday - ${previous}`; break;
      case 1: text = `Last Week - ${previous}`; break;
      case 2: text = `Last Month - ${previous}`;
    }

    text += previous < 2 ? 'hr' : 'hrs';

    return text;
  }

  const handleMouseOver = () => {
    refCard.current.style.background = "hsl(235, 46%, 20%)";
  };

  const handleMouseOut = () => {
    refCard.current.style.background = "";
  }

  return (
    <div className="Card">
      <div ref={refCard} className="TimeCard TimeCard_Hover">
        <h3>{title}</h3>
        <div className="ImageWrapper" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
          <img src={ellipsis} alt={'ellipsis'} />
        </div>
        <h4>{`${current}${current < 2 ? 'hr' : 'hrs'}`}</h4>
        <p>{getPreviousTimeText()}</p>
      </div>
    </div>
  )
};

export const HeaderCard = ({img, name, state}) => {

  const menuItems = ['Daily', 'Weekly', 'Monthly'];

  const [mode, setMode] = state;

  const handleClick = (key) => {
    setMode(key);
  };

  return (
    <div className="Menu">
      <div className="HeaderCard">
          <img src={img} alt={`photo of ${name}`} />
          <p>Report for</p>
          <h1>{name}</h1>   
      </div>

      <div className="Menu__Items">
        {menuItems.map((item, key) =>
          <h2 key={key} className={mode === key ? "Menu__Items_Active" : ""} onClick={() => handleClick(key)}>{item}</h2>
        )}
      </div>
    </div>
  )
}

TimeCard.propTypes = {
  title: PropTypes.string.isRequired,
  timeframes: PropTypes.object.isRequired,
  state: PropTypes.array.isRequired
};

HeaderCard.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    state: PropTypes.array.isRequired
};
