import { combineReducers } from 'redux';

import uploadReducer from './upload.reducer'

const rootReducer = combineReducers({
    upload: uploadReducer
})

export default rootReducer;