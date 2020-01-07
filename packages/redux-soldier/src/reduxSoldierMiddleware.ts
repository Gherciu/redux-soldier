/* eslint-disable @typescript-eslint/no-explicit-any */
import { TReduxSoldierMiddleware } from '../@types'

const reduxSoldierMiddleware: TReduxSoldierMiddleware = () => {
  return (next: any) => (action: any): any => {
    return next(action)
  }
}

export default reduxSoldierMiddleware
