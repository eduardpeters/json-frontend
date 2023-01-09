import { Link } from 'react-router-dom';
import '../assets/HeroesList.css';

const HeroesList = ({ heroes }) => {
    return (
        <div className='heroes-list'>
            {heroes.map(hero => 
                <Link to={`/hero/${hero.id}`} key={hero.id}>
                    <div 
                        className={`heroes-list__name ${hero.publisher === 'Marvel Comics' ? 'marvel-hero' : 'dc-hero'}`}
                    >
                        {hero.name}
                    </div>
                </Link>)}
        </div>
    );
}

export default HeroesList;