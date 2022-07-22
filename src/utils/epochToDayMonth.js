const epochToDayMonth = (epoch) => {
  const dateString = new Date(epoch).toDateString();
  const dateElements = dateString.split(" ");

  const date = dateElements[2];
  const month = dateElements[1];

  return `${date} ${month}`;
};

export default epochToDayMonth;
