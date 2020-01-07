import { TToNumber, ReduxSoldierUtils } from '../@types'

const toNumber: TToNumber = value => Number(value)

const reduxSoldierUtils: ReduxSoldierUtils = {
  toNumber,
}

export { toNumber }
export default reduxSoldierUtils
