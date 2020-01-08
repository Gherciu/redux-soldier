import { TIsPromise } from '../@types'

const isPromise: TIsPromise = arg => arg && typeof arg.then === 'function'

export default isPromise
