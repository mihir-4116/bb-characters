import './CharacterGrid.css'
import { Character } from '../Character/Character';

export const CharacterGrid = ({dataset}) => {
    return <div className='cards'>
        {
            (dataset.map(character=>(
              <Character key={character.char_id} character={character} />
            )))
        }
    </div>
}