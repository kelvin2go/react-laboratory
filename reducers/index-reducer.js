import {RECEIVEINDEX} from '../actions/index-action.js';



export default function Index(state={}, action) {
  switch(action.type){
    case RECEIVEINDEX:
      return Object.assign({}, state, {
        text: action.text
      });
      break;
    default:
      return state;
  }
}
