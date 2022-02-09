import { getPercentage, getValueFromPercentage } from './utils'

export const getHSLValue = (partial, total) => {
  const hslMax = 375
  const percentToGet = getPercentage(partial, total)
  return getValueFromPercentage(percentToGet, hslMax)
}
