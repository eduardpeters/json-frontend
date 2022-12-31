import { useState, useEffect } from 'react';
import heroesAPI from '../services/heroesAPI';
import PatchInput from './PatchInput';
import '../assets/DisplayHero.css';

const DisplayHero = ({selectedHero, setSelectedHero}) => {
    const [heroInfo, setHeroInfo] = useState({});
    const [toggleEdit, setToggleEdit] = useState(false);

    useEffect(() => {
        const getHeroInfo = async () => {
            const singleHero = await heroesAPI.getSingleHero(selectedHero);
            if (singleHero.id)
                setHeroInfo(singleHero);
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
                <div className='patch-input-container'>
                    <PatchInput fieldName='Alter Ego' propertyName='alter_ego' entry={heroInfo} setEntry={setHeroInfo} />
                    <PatchInput fieldName='First Appearance' propertyName='first_appearance' entry={heroInfo} setEntry={setHeroInfo} />
                    <PatchInput fieldName='Characters' propertyName='characters' entry={heroInfo} setEntry={setHeroInfo} />
                </div>
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