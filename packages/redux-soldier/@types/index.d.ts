/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Store {
  dispatch: (action: any) => any
  getState: () => any
}

export type TReduxSoldierMiddleware = ({
  dispatch,
  getState,
}: Store) => (next: any) => (action: any) => any

export interface ReduxSoldier {
  reduxSoldierMiddleware: TReduxSoldierMiddleware
}

export const reduxSoldierMiddleware: TReduxSoldierMiddleware
declare const reduxSoldier: ReduxSoldier

export default reduxSoldier
