import { useState } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from './Header';
import HeroesList from './HeroesList';
import HeroForm from './HeroForm';
import Footer from './Footer';
import '../assets/App.css';

const App = () => {
    const loadedHeroes = useLoaderData();
    const [heroes, setHeroes] = useState(loadedHeroes);

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
