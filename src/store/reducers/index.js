import { combineReducers } from 'redux';
import Settings from './Settings.ts';

const rootReducer = combineReducers({
    Configurations: Settings,
});
export default rootReducer;
