import { useState, useEffect } from 'react';
import heroesAPI from '../services/heroesAPI';
import '../assets/DisplayHero.css';

const DisplayHero = ({selectedHero, setSelectedHero}) => {
    const [heroInfo, setHeroInfo] = useState({});
    const [toggleEdit, setToggleEdit] = useState(false);
    const [alterInput, setAlterInput] = useState('');
    const [firstApInput, setFirstApInput] = useState('');
    const [characterInput, setCharacterInput] = useState('');

    useEffect(() => {
        const getHeroInfo = async () => {
            const singleHero = await heroesAPI.getSingleHero(selectedHero);
            if (singleHero.id) {
                setHeroInfo(singleHero);
                setAlterInput(singleHero.alter_ego);
                setFirstApInput(singleHero.first_appearance);
                setCharacterInput(singleHero.characterInput);
            }
        }
        if (selectedHero !== 0)
            getHeroInfo();
    },[selectedHero]);

    const handleClose = () => {
        setSelectedHero(0);
        setHeroInfo({});
        setToggleEdit(false);
    }

    return (
        <div className='hero-display'>
            {heroInfo.id ? 
            <div className='hero-display_box'>
                <h4 className='hero-display_box-name'>{heroInfo.name}</h4>
                <img src={heroInfo.image} alt={`This is ${heroInfo.name}`}></img>
                <p className='hero-display_box-field'>Alter Ego:</p>
                <input className='hero-display_box-input'></input>
                <p className='hero-display_box-field'>First Appearance:</p>
                <input className='hero-display_box-input'></input>
                <p className='hero-display_box-field'>Characters:</p>
                <input className='hero-display_box-input'></input>
                <div className='hero-display_box-btns'>
                    {toggleEdit ?
                        <div>
                            <button className='hero-display_box-confirm'>Confirm</button>
                            <button className='hero-display_box-discard'>Discard</button>
                        </div>
                    :
                        <button className='hero-display_box-edit' onClick={() => setToggleEdit(!toggleEdit)}>Edit</button>
                    }
                    
                    <button className='hero-display_box-delete'>Delete</button>
                    <button className='hero-display_box-close' onClick={handleClose}>Close</button>
                </div>
            </div>
            :
            <div className='hero-display_none'>
                <h4>Pick a hero from the list!</h4>
            </div>
            }
        </div>
    );
}

export default DisplayHero;