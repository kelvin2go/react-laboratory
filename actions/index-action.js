import fetch from 'isomorphic-fetch';



export const RECEIVEINDEX = Symbol();
export const receiveIndex = function(text){
  return {
    type:RECEIVEINDEX,
    text,
  }
}

export const GETINDEX = Symbol();
export const getIndex = function(){
  return function(dispatch){
    return dispatch(receiveIndex("async action loa22222d233"));
  }
}
