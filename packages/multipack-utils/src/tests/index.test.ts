import multipackUtils from '../index'

describe('multipackUtils', () => {
  it('should transform a string number in number', () => {
    expect(multipackUtils.toNumber('1')).toEqual(1)
  })
})
