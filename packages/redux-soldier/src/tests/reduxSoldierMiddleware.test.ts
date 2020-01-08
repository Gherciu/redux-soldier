/* eslint-disable @typescript-eslint/ban-ts-ignore */
import { createStore, applyMiddleware } from 'redux'
import reduxSoldierMiddleware from '../reduxSoldierMiddleware'

describe('reduxSoldierMiddleware', () => {
  it('should create a valid store after this middleware is applayed', () => {
    const enhancer = applyMiddleware(reduxSoldierMiddleware)
    const mockStore = createStore((state = { count: 1 }) => state, enhancer)
    expect(mockStore).toHaveProperty('dispatch')
    expect(mockStore).toHaveProperty('getState')
  })

  it('should apply corect action handlers', () => {
    const enhancer = applyMiddleware(reduxSoldierMiddleware)
    const mockStore = createStore((state = { count: 1 }) => state, enhancer)
    const thunk = () => (dispatch: Function): void => {
      dispatch({ type: 'INCREMENT' })
    }
    const arrayOfThunks = [thunk(), thunk()]

    const dispatchDiferentTypesOfActions = (): void => {
      // @ts-ignore
      mockStore.dispatch(thunk())
      // @ts-ignore
      mockStore.dispatch(arrayOfThunks)
    }

    expect(dispatchDiferentTypesOfActions).not.toThrow()
  })
})
