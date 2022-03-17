const API_KEY = process.env.REACT_APP_OMBD_KEY;


const requests = {
    searchMovies: `?&apikey=${API_KEY}&type=movie&s=`,

};
export default requests;