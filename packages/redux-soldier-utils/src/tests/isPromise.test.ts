import isPromise from '../isPromise'

describe('isPromise', () => {
  it('should return true or false if provided argument is a promise', () => {
    expect(isPromise(Promise.resolve())).toBeTruthy()
    expect(isPromise(() => 21)).toBeFalsy()
    expect(isPromise('twenty one')).toBeFalsy()
    expect(isPromise(null)).toBeFalsy()
  })
})
