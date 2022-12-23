import { useState, useEffect } from 'react';
import heroesAPI from '../services/heroesAPI';

const HeroesList = () => {
    const [heroes, setHeroes] = useState([]);

    useEffect(() => {
        const getAllHeroes = async () => {
            const allHeroes = await heroesAPI.getHeroes();
            if (allHeroes.length)
                setHeroes(allHeroes);
        }
        getAllHeroes();
    }, []);

    return (
        <div>
            {heroes.map(hero => <p>{hero.name}</p>)}
        </div>
    );
}

export default HeroesList;