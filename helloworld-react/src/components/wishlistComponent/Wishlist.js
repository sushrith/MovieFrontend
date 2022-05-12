import React,{useState,useEffect} from 'react'
import { Spinner } from 'react-bootstrap';
import DataService from '../../DataService';
import Nav2 from '../navs/Nav2'
import Movies from '../movies/Movies'
function Wishlist() {

    const [loading,setLoading]=useState(false);
    const [data,setData]=useState([]);

    useEffect(() => {
        setLoading(true);
        DataService.getMovieListFromDb().
        then((response)=>{
            setLoading(false);
            setData(response.data);
            console.log(response.data);
        }).
        catch((error)=>{
            console.log(error);
        })
    }, [])    



    return (
        <div>
            <Nav2/>
            <br/>
            <br/>
            <center><h1>Your Wishlist</h1></center>

{loading?<Spinner animation="border" role="status">
<span className="visually-hidden">Loading...</span>
</Spinner>:<Movies data={data}/>
}


        </div>
    )
}

export default Wishlist
