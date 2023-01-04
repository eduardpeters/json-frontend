import '../assets/HeroesList.css';

const HeroesList = ({heroes, setSelectedHero}) => {
    return (
        <div className='heroes-list'>
            {heroes.map(hero => 
                <div 
                    className={`heroes-list__name ${hero.publisher === 'Marvel Comics' ? 'marvel-hero' : 'dc-hero'}`}
                    key={hero.id} onClick={() => setSelectedHero(hero.id)}
                >
                    {hero.name}
                </div>)}
        </div>
    );
}

export default HeroesList;