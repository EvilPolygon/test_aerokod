const HOUR_IN_TIMESTAMP = 1000 * 60 * 60;
const MINUTE_IN_TIMESTAMP = 1000 * 60;

export function parseTOTimestamp (hours: number = 0, minutes: number = 0) {
  return hours * HOUR_IN_TIMESTAMP + minutes * MINUTE_IN_TIMESTAMP;
}

export function parseFROMTimestamp (timeLeft: number) {
  const hours = Math.trunc(timeLeft / HOUR_IN_TIMESTAMP);
  const minutes = Math.trunc((timeLeft - hours * HOUR_IN_TIMESTAMP) / MINUTE_IN_TIMESTAMP);

  return <span>{`${hours} ч, ${minutes} м`}</span>;
}