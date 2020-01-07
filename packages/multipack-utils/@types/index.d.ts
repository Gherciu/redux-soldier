export type TToNumber = (value?: string | number) => number

export interface MultipackUtils {
  toNumber: TToNumber
}

export const toNumber: TToNumber
declare const multipackUtils: MultipackUtils

export default multipackUtils
