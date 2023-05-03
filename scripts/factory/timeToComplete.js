function getTaskCompletedDays(time) {
  const now = Date.now();
  const diffTime = now - time;
  const diffHours = diffTime / (1000 * 60 * 60);
  return Math.ceil(diffHours / 24);
}

export default getTaskCompletedDays