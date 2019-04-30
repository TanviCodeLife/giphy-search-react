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

export function fetchGifs(term, dispatch){
    return function(dispatch){
      dispatch(requestGifs(term));
      console.log('formatted', term);
      return fetch(`http://api.giphy.com/v1/gifs/search?q=${term}&api_key=${}&limit=9&rating=g`)
      .then((response) => response.json(),
      error => console.log('An error occured', error))
      .then((json) => {
        console.log(json);
        json.data.forEach((gif, index) => {
          const title = gif.title;
          const image = gif.images.fixed_height_downsampled.url;
          const url = gif.bitly_url;
          const id = index;
          dispatch(recieveGifs({title, image, url, id}));
        });
      });
    };
  }