import constants from './../constants';
const { types, initialState } = constants;

const requestGifsReducer = ( state = initialState.userSearch, action) => {
  let newState;
  switch (action.type) {
    case types.REQUEST_GIFS:
      newState = Object.assign({}, state, {
        term: action.term
      });
      return newState;
    default:
      return state;
  }
};

export default requestGifsReducer;