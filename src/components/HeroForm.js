import { useState } from 'react';
import AddBoxIcon from '@mui/icons-material/AddBox';
import FormModal from './FormModal';
import '../assets/HeroForm.css';

const HeroForm = ({heroes, setHeroes}) => {
    const [toggleForm, setToggleForm] = useState(false);

    const handleToggleClicks = () => {
        setToggleForm(!toggleForm);
    }

    return (
        <div className='hero-form'>
            {toggleForm &&
                <FormModal handleToggleClicks={handleToggleClicks} heroes={heroes} setHeroes={setHeroes} />
            }
            <AddBoxIcon onClick={handleToggleClicks} />
        </div>
    );
}

export default HeroForm;