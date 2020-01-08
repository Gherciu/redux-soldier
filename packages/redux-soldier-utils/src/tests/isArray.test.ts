import isArray from '../isArray'

describe('isArray', () => {
  it('should return true or false if provided argument is of type array', () => {
    expect(isArray([21])).toBeTruthy()
    expect(isArray('twenty one')).toBeFalsy()
    expect(isArray(null)).toBeFalsy()
  })
})
