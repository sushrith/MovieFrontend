import React,{useEffect} from 'react'
import ReactCardFlip from 'react-card-flip';
import './Movies.css';
import Button from 'react-bootstrap/Button';
import DataService from '../../DataService';
import { Spinner } from 'react-bootstrap';
function MovieCard(props) {
  const CardStyle = {
    border: '1px',
    borderRadius:'10px',
    padding: '0px',
    margin: '20px',
    width: '250px',
    height: '340px',
    background : 'black',
    color:'white'
  };
  const CardStyle1 = {
    border: '1px',
    borderRadius:'10px',
    padding: '10px',
    margin: '20px',
    width: '250px',
    height: '340px',
    background : 'black',
    color:'white'
  };
  const [isFlipped, setIsFlipped] = React.useState(false);
  const [loading,setLoading]=React.useState(false);
  const [checkWishlist,setCheckWishlist]=React.useState(false);
  const [isDeleted,setIsDeleted]=React.useState(false);

  useEffect(() => {
    //console.log(props.data.movieId+" "+props.data.id);
    const m_id=props.data.movieId==undefined?props.data.id:props.data.movieId;
    DataService.checkInWishlist(sessionStorage.getItem('username'),m_id)
    .then((response)=>{
      //console.log(props.data)
      setCheckWishlist(response.data);
    })
  }, [])

  function handleClick(){
    setLoading(true);
    const data={"movieId":props.data.id,
    "title":props.data.title,
    "rating":props.data.imDbRating,
    "plot":props.data.plot,
    "runtime":props.data.runtimeStr,
    "movieUserEmail":sessionStorage.getItem('username'),
    "image":props.data.image
    }
    //console.log(data);
    DataService.addMovie(data).then(response=>{
      //console.log(data);
      setLoading(false);
    }).catch(error=>{
      console.log(error);
    })
  }
  function handleDeleteClick(){
    DataService.deleteMovie(sessionStorage.getItem('username'),props.data.movieId)
    .then((res)=>{
        setIsDeleted(true);
    }).catch((err)=>{

    });
  }

   
      return (
        <div id="card">{
          isDeleted?null:<ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
          <div
            style={CardStyle}
            onClick={() => setIsFlipped((prev) => !prev)}
            className="CardFront"
          >
            <div><img src={props.data.image}/></div>
          </div>
          <div
            style={CardStyle1}
            onClick={() => setIsFlipped((prev) => !prev)}
            className="CardBack"
          >plot :&nbsp;{props.data.plot}
          <p>Rating :&nbsp;{props.data.imDbRating==null?props.data.rating:props.data.imDbRating}</p>
          <p>Runtime :&nbsp;{props.data.runtimeStr==null?props.data.runtime:props.data.runtimeStr}</p>
          
          {
  loading?<Button variant="primary" disabled>
  <Spinner
    as="span"
    animation="grow"
    size="sm"
    role="status"
    aria-hidden="true"
  />
  Loading...
</Button>:checkWishlist?<Button variant="primary" onClick={handleClick} disabled>Add To Wishlist</Button>
            :<Button variant="primary" onClick={handleClick}>Add To Wishlist</Button>
          
}
{
checkWishlist?<Button variant="danger" onClick={handleDeleteClick} >Delete</Button>
            :<Button variant="danger" onClick={handleDeleteClick} disabled>Delete</Button>

}
          </div>
        </ReactCardFlip>
        }
          
          </div>
      );
}

export default MovieCard
