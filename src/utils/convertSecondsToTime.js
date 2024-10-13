
export const convertSecondsToTime = (seconds) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const hoursDisplay = hours > 0 ? `${hours}h ` : '';
  const minutesDisplay = minutes > 0 ? `${minutes}m` : '';

  return hoursDisplay + minutesDisplay;
};
