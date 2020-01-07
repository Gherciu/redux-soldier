export type TToNumber = (value?: string | number) => number

export interface ReduxSoldierUtils {
  toNumber: TToNumber
}

export const toNumber: TToNumber
declare const reduxSoldierUtils: ReduxSoldierUtils

export default reduxSoldierUtils
