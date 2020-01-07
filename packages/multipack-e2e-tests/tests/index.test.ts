import * as multipack from 'multipack-core'

describe('multipack e2e tests', () => {
  it('should have a method named sum', () => {
    expect(multipack).toHaveProperty('sum')
  })
})
