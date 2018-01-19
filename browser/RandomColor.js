const randColor = () => {
  const color = ["blue", "yellow", "green", "red"];
  const rand = Math.floor(Math.random() * color.length);
  return color[rand];
};

export default randColor;