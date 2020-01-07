import { toNumber } from 'redux-soldier-utils'
import { ReduxSoldier, TSum } from '../@types'

const sum: TSum = (a, b) => toNumber(a) + toNumber(b)

const reduxSoldier: ReduxSoldier = {
  sum,
}

export { sum }
export default reduxSoldier
