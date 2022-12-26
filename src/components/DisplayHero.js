import { useState, useEffect } from 'react';
import heroesAPI from '../services/heroesAPI';
import '../assets/DisplayHero.css';

const DisplayHero = ({selectedHero, setSelectedHero}) => {
    const [heroInfo, setHeroInfo] = useState({});

    useEffect(() => {
        const getHeroInfo = async () => {
            const singleHero = await heroesAPI.getSingleHero(selectedHero);
            if (singleHero.id)
                setHeroInfo(singleHero);
        }
        if (selectedHero !== 0)
            getHeroInfo();
    },[selectedHero]);

    return (
        <div className='hero-display'>
            {heroInfo.id ? 
        <div>
            Current selection:
            {heroInfo.name}
            <button 
                onClick={() => {
                    setSelectedHero(0);
                    setHeroInfo({});
                }}
            >
                Close
            </button>
        </div>
        :
        <div>
            Pick a hero from the list!
        </div>
            }
        </div>
    );
}

export default DisplayHero;