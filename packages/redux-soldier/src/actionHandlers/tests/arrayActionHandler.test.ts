/* eslint-disable @typescript-eslint/ban-ts-ignore */
/* eslint-disable @typescript-eslint/no-explicit-any */
import arrayActionHandler from '../arrayActionHandler'
import { TStore } from '../../../@types'

describe('arrayActionHandler', () => {
  const mockStore: TStore = {
    // @ts-ignore
    dispatch: () => {},
    getState: () => ({}),
  }

  it('should call all functions from actions array', () => {
    const spyFn1 = jest.fn()
    const spyFn2 = jest.fn()

    arrayActionHandler({
      store: mockStore,
      action: [spyFn1, spyFn2],
    })

    expect(spyFn1).toHaveBeenCalled()
    expect(spyFn2).toHaveBeenCalled()
  })

  it('should handle corect default/traditional object type actions', () => {
    const spyFn = jest.fn()
    const increment = (): object => ({ type: 'INCREMENT' })
    const thunkAction = () => (): Promise<any> => {
      return new Promise((resolve: any): any => resolve())
    }

    const result = arrayActionHandler({
      store: {
        ...mockStore,
        dispatch: spyFn,
      },
      action: [increment(), thunkAction()],
    })

    expect(spyFn).toHaveBeenCalled()
    expect(result).toEqual([thunkAction()()]) // should return only thunk action promise
  })
})
