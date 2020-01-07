import { TToNumber, MultipackUtils } from '../@types'

const toNumber: TToNumber = value => Number(value)

const multipackUtils: MultipackUtils = {
  toNumber,
}

export { toNumber }
export default multipackUtils
