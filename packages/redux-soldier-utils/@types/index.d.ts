/* eslint-disable @typescript-eslint/no-explicit-any */

export type TIsFunction = (arg: any) => boolean

export type TIsArray = (arg: any) => boolean

export type TIsPromise = (arg: any) => boolean

export interface ReduxSoldierUtils {
  isFunction: TIsFunction
  isArray: TIsArray
  isPromise: TIsPromise
}

export const isFunction: TIsFunction
export const isArray: TIsArray
export const isPromise: TIsPromise

declare const reduxSoldierUtils: ReduxSoldierUtils

export default reduxSoldierUtils
