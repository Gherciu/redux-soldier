export type TSum = (a: number | string, b: number | string) => number

export interface ReduxSoldier {
  sum: TSum
}

export const sum: TSum
declare const reduxSoldier: ReduxSoldier

export default reduxSoldier
