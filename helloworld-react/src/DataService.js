import axios from "axios";
import {JPA_API_URL,IMDB_API_URL} from "./constants/constants"
class DataService{
    
    verify(email,password)
    {
        return axios.post(`${JPA_API_URL}/login`,{"email":email,"password":password});
    }

    getMovieList(url)
    {
        return axios.get(url);
    }

    checkExist(email)
    {
        return axios.post(`${JPA_API_URL}/check`,{"email":email});
    }

    create(fname,lname,email,password)
     {
      return axios.post(`${JPA_API_URL}/addUser`,{"firstName":fname,"lastName":lname,"email":email,"password":password});
   }

   addMovie(data)
   {
    return axios.post(`${JPA_API_URL}/addMovie`,data);
   }
  
   getMovieListFromDb()
   {
       return axios.get(`${JPA_API_URL}/getMovieList?email=${sessionStorage.getItem('username')}`)
   }

   deleteMovie(email,id)
   {
       return axios.delete(`${JPA_API_URL}/deleteMovie?email=${email}&movieId=${id}`)
   }

   checkInWishlist(email,id)
   {
       return axios.get(`${JPA_API_URL}/checkInWishlist?email=${email}&movieId=${id}`)
   }

    
}
export default new DataService()