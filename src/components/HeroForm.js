import { useState } from 'react';
import FormModal from './FormModal';
import '../assets/HeroForm.css';

const HeroForm = ({heroes, setHeroes}) => {
    const [toggleForm, setToggleForm] = useState(false);

    const handleToggleClicks = () => {
        setToggleForm(!toggleForm);
    }

    return (
        <div className='hero-form'>
            {toggleForm ?
            <FormModal handleToggleClicks={handleToggleClicks} heroes={heroes} setHeroes={setHeroes} />
            :
            <button onClick={handleToggleClicks}>Add a hero</button>
            }
        </div>
    );
}

export default HeroForm;