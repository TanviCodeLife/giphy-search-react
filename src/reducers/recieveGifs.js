import constants from './../constants';
const { types, initialState } = constants;

const recieveGifsReducer = (state = initialState.resultGifs, action) => {
  let newState;
  const {  title, image, url, id } = action;
  switch(action.type) {
    case types.RECIEVE_GIFS:
      newState = Object.assign({}, state, {
        [id]:{
          title: title,
          image: image,
          url: url
        }
      });
      return newState;
    default:
    return state;
  }

};

export default recieveGifsReducer;