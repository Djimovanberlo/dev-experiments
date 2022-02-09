export const getPercentage = (partial, total) => {
  return (100 * partial) / total
}

export const getValueFromPercentage = (percentToGet, maxValue) => {
  return (percentToGet / 100) * maxValue
}
