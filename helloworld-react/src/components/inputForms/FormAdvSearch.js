import React,{ useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import './FormAdvSearch.css';
import DataService from '../../DataService';
import {IMDB_API_URL} from "../../constants/constants"
import Movies from '../movies/Movies';
import Spinner from 'react-bootstrap/Spinner';
import Nav2 from '../navs/Nav2';

function FormAdvSearch() {
    const [language, setLanguage] = useState("Select language");
    const [genre, setGenre] = useState("Select Genre");
    const [top, setTop] = useState("Select Top Movies");
    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(false);

    function handleSearch(){
        setLoading(true);
        DataService.getMovieList(IMDB_API_URL+"genres="+genre+"&languages="+language+"&count="+top).then(
            (response)=>{
                setData(response.data.results);
                setLoading(false);
            }
        ).catch(
            (error)=>{
                console.log(error);
            }
        )
    }

    return (
        <>
        <Nav2/>
        <br/>
        <br/>
        <h1><center>Search For Movies</center></h1><br/>
        <div className="elements"><div id="div1">
            <h3>Select Language - </h3><p> &nbsp;</p>
<Dropdown>
<Dropdown.Toggle variant="success" id="dropdown-basic">
{language}
</Dropdown.Toggle>
<Dropdown.Menu>
<Dropdown.Item onClick={(e)=>setLanguage("en")}>English</Dropdown.Item>
<Dropdown.Item onClick={(e)=>setLanguage("hi")}>Hindi</Dropdown.Item>
<Dropdown.Item onClick={(e)=>setLanguage("ta")}>Tamil</Dropdown.Item>
<Dropdown.Item onClick={(e)=>setLanguage("te")}>Telugu</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
</div>
<div id="div1">
<h3>Select Genre - </h3><p> &nbsp;</p>
<Dropdown>
<Dropdown.Toggle variant="success" id="dropdown-basic">
{genre}
</Dropdown.Toggle>
<Dropdown.Menu>
<Dropdown.Item onClick={(e)=>setGenre("comedy")}>Comedy</Dropdown.Item>
<Dropdown.Item onClick={(e)=>setGenre("horror")}>Horror</Dropdown.Item>
<Dropdown.Item onClick={(e)=>setGenre("crime")}>Crime</Dropdown.Item>
<Dropdown.Item onClick={(e)=>setGenre("family")}>Family</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
</div>
<div id="div1">
<h3>Select Top Movies - </h3><p> &nbsp;</p>
<Dropdown>
<Dropdown.Toggle variant="success" id="dropdown-basic">
{top}
</Dropdown.Toggle>
<Dropdown.Menu>
<Dropdown.Item onClick={(e)=>setTop("10")}>10</Dropdown.Item>
<Dropdown.Item onClick={(e)=>setTop("15")}>15</Dropdown.Item>
<Dropdown.Item onClick={(e)=>setTop("20")}>20</Dropdown.Item>
<Dropdown.Item onClick={(e)=>setTop("25")}>25</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
</div>

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
  </Button>:<Button variant="primary" onClick={handleSearch}>Search</Button>
}

</div>
{
    data.length!=0?<Movies data={data}/>:""
}
    </>
    )
}

export default FormAdvSearch
