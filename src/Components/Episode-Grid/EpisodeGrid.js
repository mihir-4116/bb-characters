import './EpisodeGrid.css';
import {Episode} from '../Episode/Episode'


export const EpisodeGrid= ({dataset}) => 
    {
      return (<div className='episodes-grid' >
              {
               (dataset.map((episode)=>
                            (<Episode key={`${episode.episode_id}`} episode={episode} />)))}</div>)
    }
