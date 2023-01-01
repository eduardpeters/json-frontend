import { useState, useEffect } from 'react';
import heroesAPI from '../services/heroesAPI';
import Header from './Header';
import HeroesList from './HeroesList';
import DisplayHero from './DisplayHero';
import HeroForm from './HeroForm';
import Footer from './Footer';
import '../assets/App.css';

const App = () => {
    const [heroes, setHeroes] = useState([]);
    const [selectedHero, setSelectedHero] = useState(0);

    useEffect(() => {
        const getAllHeroes = async () => {
            const allHeroes = await heroesAPI.getHeroes();
            if (allHeroes.length)
                setHeroes(allHeroes);
        }
        getAllHeroes();
    }, []);

    return (
        <div className='App'>
            <Header />
            <HeroesList heroes={heroes} setSelectedHero={setSelectedHero} />
            <DisplayHero selectedHero={selectedHero} setSelectedHero={setSelectedHero} />
            <HeroForm heroes={heroes} setHeroes={setHeroes} />
            <Footer />
        </div>
    );
}

export default App;
