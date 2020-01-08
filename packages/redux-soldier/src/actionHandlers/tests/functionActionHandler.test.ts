/* eslint-disable @typescript-eslint/ban-ts-ignore */
import functionActionHandler from '../functionActionHandler'
import { TStore } from '../../../@types'

describe('functionActionHandler', () => {
  const mockStore: TStore = {
    // @ts-ignore
    dispatch: () => {},
    getState: () => ({}),
  }

  it('should call action as a simple function', () => {
    const spyFn = jest.fn()

    functionActionHandler({
      store: mockStore,
      action: spyFn,
    })

    expect(spyFn).toHaveBeenCalled()
  })
})
