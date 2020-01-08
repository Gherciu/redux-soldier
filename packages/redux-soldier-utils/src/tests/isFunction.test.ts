import isFunction from '../isFunction'

describe('isFunction', () => {
  it('should return true or false if provided argument is of type function', () => {
    expect(isFunction(() => 21)).toBeTruthy()
    expect(isFunction('twenty one')).toBeFalsy()
    expect(isFunction(null)).toBeFalsy()
  })
})
