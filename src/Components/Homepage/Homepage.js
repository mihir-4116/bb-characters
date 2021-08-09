
import { useState, useEffect } from 'react';
import { Grid } from '../Grid/Grid';
import './Homepage.css';
import reload from '../../assets/reload.svg';
import Search from '../Search/Search'
export const Homepage = () => {
  const [filterEpisode,funcEpisode]=useState([])  
  const [filterCharacter,funCharacter]=useState([])
  const [loading,setLoading]=useState(true)
    const [filter, funFilter] = useState('1')
    const [query,setQuery] = useState('')
  useEffect(()=>
   { 
     const load= async ()=>{ 
    await fetch(`https://www.breakingbadapi.com/api/episodes/`).then(response=>response.json()).then(data=>funcEpisode(data))
    await fetch(`https://www.breakingbadapi.com/api/characters?name=${query}`).then(response=>response.json()).then(data=>{funCharacter(data)
    setLoading(false)
     })}

    load()

  },[query]   
    )
    
   return ( !loading ?
    <div className="container">
      <div className='filterBoxes'>
        <h1 className='headerText'>Breaking Bad API</h1>
                  <Search getQuery={(q)=>setQuery(q) }/> 
        <div className='controls'>   
            <select onChange={(e)=>funFilter(e.target.value)} value={filter}><option value='1'>Characters</option><option value='2'>Episodes</option></select>
        </div>
      </div>
      <Grid  characters={filterCharacter}   episodes={filterEpisode}   filter={filter}  />

    </div> : <div className='loader'>Loading <img src={reload} alt='loader'></img></div>
  ); 
}