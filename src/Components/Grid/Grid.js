import {useState} from 'react'
import {Pagination} from '../Pagination'
import {Pagination2} from '../Pagination2'
import {CharacterGrid} from '../Character-Grid/Character-Grid'
import {EpisodeGrid} from '../Episode-Grid/EpisodeGrid'

import './Grid.css'

export const Grid = ({ characters, episodes, filter }) => {
  

  const [currentPage, setCurrentPage] = useState(1);
  const [currentPage2, setCurrentPage2] = useState(1);
  const [elementsPerPage] = useState(10);


  const indexOfLastCharacter = currentPage * elementsPerPage;
  const indexOfFirstCharacter= indexOfLastCharacter - elementsPerPage;
  const currentCharacters = characters.slice(indexOfFirstCharacter, indexOfLastCharacter);


  const indexOfLastEpisode = currentPage2 * 4;
  const indexOfFirstEpisode= indexOfLastEpisode - 4;
  const currentEpisodes = episodes.slice(indexOfFirstEpisode, indexOfLastEpisode);
  

  const paginate = pageNumber => setCurrentPage(pageNumber);
  const paginate2 = pageNumber => setCurrentPage2(pageNumber);
  
  
    if(filter==='1')
              return ( 
                <div className='parent-container'>
                   <Pagination 
                          elementsPerPage={elementsPerPage}
                          totalElements={characters.length}
                          paginate={paginate}/>
                 <CharacterGrid dataset={currentCharacters} filter={filter}/>
                 
                 </div>
                      )
    else {    
        return (
              <div className='parent-container'>
                 <Pagination2 
                          elementsPerPage={elementsPerPage}
                          totalElements={episodes.length}
                          paginate={paginate2}
                          />
                <EpisodeGrid  dataset={currentEpisodes} filter={filter}/>
               
               </div>
        )
    }
}
