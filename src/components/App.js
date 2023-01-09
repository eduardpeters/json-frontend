import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import heroesAPI from '../services/heroesAPI';
import Header from './Header';
import HeroesList from './HeroesList';
import HeroForm from './HeroForm';
import Footer from './Footer';
import '../assets/App.css';

const App = () => {
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
        <div className='App'>
            <Header />
            <HeroesList heroes={heroes} />
            <Outlet context={[heroes, setHeroes]} />
            <HeroForm heroes={heroes} setHeroes={setHeroes} />
            <Footer />
        </div>
    );
}

export default App;
