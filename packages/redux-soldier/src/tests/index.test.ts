import multipack from '../index'

describe('multipack', () => {
  it('should return corect sum indiferent if provided values has number type or string', () => {
    expect(multipack.sum(1, '1')).toEqual(2)
  })
})
