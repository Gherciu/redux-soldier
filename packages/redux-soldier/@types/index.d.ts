/* eslint-disable @typescript-eslint/no-explicit-any */
export type TDispatch = (action: TAction) => any

export type TGetState = () => any

export type TThunkAction = (dispatch: TDispatch, getState: TGetState) => any

export type TNext = (action: TAction) => any

export type TAction =
  | TThunkAction
  | TThunkAction[]
  | string[]
  | Function[]
  | string
  | object

export interface Store {
  dispatch: TDispatch
  getState: TGetState
}

export interface ActionHandlerParam {
  store: Store
  action: TAction
}

export interface ThunkActionHandlerParam extends ActionHandlerParam {
  action: TThunkAction
}

export type TFunctionActionHandler = (arg: ThunkActionHandlerParam) => any

export type TArrayActionHandler = (arg: ActionHandlerParam) => any

export type TReduxSoldierMiddleware = ({
  dispatch,
  getState,
}: Store) => (next: TNext) => (action: TAction) => any

export interface ReduxSoldier {
  reduxSoldierMiddleware: TReduxSoldierMiddleware
}

export const reduxSoldierMiddleware: TReduxSoldierMiddleware
declare const reduxSoldier: ReduxSoldier

export default reduxSoldier
