/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/no-extraneous-dependencies */
import { Middleware, MiddlewareAPI, Dispatch } from 'redux'

export type TDispatch = Dispatch

export type TGetState = () => any

export type TThunkAction = (dispatch: TDispatch, getState: TGetState) => any

export type TNext = (action: TAction) => any

export type TAction =
  | TThunkAction
  | TThunkAction[]
  | string[]
  | Function[]
  | object[]
  | string
  | object

export type TStore = MiddlewareAPI

export interface ActionHandlerParam {
  store: TStore
  action: TAction
}

export interface ThunkActionHandlerParam extends ActionHandlerParam {
  action: TThunkAction
}

export interface ArrayActionHandlerParam extends ActionHandlerParam {
  action: any[]
}

export type TFunctionActionHandler = (arg: ThunkActionHandlerParam) => any

export type TArrayActionHandler = (arg: ArrayActionHandlerParam) => any

export type TReduxSoldierMiddleware = Middleware

export interface ReduxSoldier {
  reduxSoldierMiddleware: Middleware
}

export const reduxSoldierMiddleware: Middleware
declare const reduxSoldier: ReduxSoldier

export default reduxSoldier
