import { formatTime } from "./timeFormatter";

export const calculateJourneyTime = (timeSource: string, timeDestination: string) => {
    const formattedSource = formatTime(timeSource);
    const formattedDestination = formatTime(timeDestination);

    const [sourceHours, sourceMinutes] = formattedSource.split(':').map(Number);
    const [destHours, destMinutes] = formattedDestination.split(':').map(Number);

    const sourceDate = new Date();
    sourceDate.setHours(sourceHours, sourceMinutes, 0);
    
    const destDate = new Date();
    destDate.setHours(destHours, destMinutes, 0);
    
    let diff = destDate.getTime() - sourceDate.getTime();

    if (diff < 0) {
      destDate.setDate(destDate.getDate() + 1);
      diff = destDate.getTime() - sourceDate.getTime();
    }

    const diffMinutes = Math.floor(diff / (1000 * 60));

    const hours = Math.floor(diffMinutes / 60);
    const minutes = diffMinutes % 60;

    return `${hours}h ${minutes}m`;
  };