export const getCheckInDate = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  return `${year}-${month}-${day}`;
};

export const convertDistance = (distance) => {
  return distance / 10;
};
