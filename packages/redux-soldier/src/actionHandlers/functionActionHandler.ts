import { TFunctionActionHandler } from '../../@types'

const functionActionHandler: TFunctionActionHandler = ({ store, action }) => {
  action(store.dispatch, store.getState)
}

export default functionActionHandler
