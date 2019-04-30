import * as types from './../constants/ActionTypes';

export const requestGifs = (term) => ({
  type: types.REQUEST_GIFS,
  term
});

export const recieveGifs = ({title, image, url, id}) => ({
  type: types.RECIEVE_GIFS,
  title,
  image,
  url,  
  id
});