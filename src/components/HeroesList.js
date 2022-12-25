import '../assets/HeroesList.css';

const HeroesList = ({heroes, setSelectedHero}) => {
    return (
        <div className='heroes-list-container'>
            {heroes.map(hero => 
                <div className='heroes-list_name' key={hero.id} onClick={() => setSelectedHero(hero.id)}>
                    {hero.name}
                </div>)}
        </div>
    );
}

export default HeroesList;