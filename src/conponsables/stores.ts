import * as HomeStore from './store/HomeContextStore'
import * as ProStore from '../stores/counter'

export const $stores = {
    ...HomeStore,
    ...ProStore
}
