export type TSum = (a: number | string, b: number | string) => number

export interface Multipack {
  sum: TSum
}

export const sum: TSum
declare const multipack: Multipack

export default multipack
