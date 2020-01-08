/* eslint-disable @typescript-eslint/ban-ts-ignore */
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

    const result = arrayActionHandler({
      store: {
        ...mockStore,
        dispatch: spyFn,
      },
      action: [increment()],
    })

    expect(spyFn).toHaveBeenCalled()
    expect(result).toEqual([increment()])
  })
})
