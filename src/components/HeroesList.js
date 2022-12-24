const HeroesList = ({heroes, setSelectedHero}) => {
    return (
        <div className='heroes-list-container'>
            <ul>
            {heroes.map(hero => 
                <li key={hero.id} onClick={() => setSelectedHero(hero)}>
                    {hero.name}
                </li>)}
            </ul>
        </div>
    );
}

export default HeroesList;