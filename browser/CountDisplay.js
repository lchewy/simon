const countDisplay = props => {
  if (props.on) {
    if (props.start) {
      if (props.pattern.length < 10) {
        return "0" + props.pattern.length;
      } else {
        return props.pattern.length;
      }
    } else {
      return "\xa0-\xa0-";
    }
  } else {
    return "";
  }
};

export default countDisplay;