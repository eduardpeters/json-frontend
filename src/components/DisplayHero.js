import { useState, useEffect } from 'react';
import heroesAPI from '../services/heroesAPI';
import PatchInput from './PatchInput';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CloseIcon from '@mui/icons-material/Close';
import '../assets/DisplayHero.css';
import FormModal from './FormModal';

const DisplayHero = ({ selectedHero, setSelectedHero, heroes, setHeroes }) => {
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

    const handleDelete = async () => {
        const response = await heroesAPI.deleteHero(selectedHero);
        if (response === 204) {
            setHeroes(heroes.filter(hero => hero.id !== selectedHero));
            handleClose();
        }
        else {
            alert('Unable to delete hero');
        }
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
                    {toggleEdit &&
                        <FormModal handleToggleClicks={() => setToggleEdit(!toggleEdit)} />
                    }
                    <EditIcon onClick={() => setToggleEdit(!toggleEdit)} />
                    <CloseIcon onClick={handleClose} />
                    <DeleteForeverIcon onClick={handleDelete} />
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