export const formatTime = (time: string): string => {
  const timeString = time.toString();
  const hours = timeString.slice(0, -2);
  const minutes = timeString.slice(-2);
  return `${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}`;
};
