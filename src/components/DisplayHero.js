import { useState, useEffect } from 'react';
import { useLoaderData,useOutletContext, useNavigate } from 'react-router-dom';
import heroesAPI from '../services/heroesAPI';
import PatchInput from './PatchInput';
import FormModal from './FormModal';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CloseIcon from '@mui/icons-material/Close';
import '../assets/DisplayHero.css';

const DisplayHero = () => {
    const loadedHero = useLoaderData();
    const [heroes, setHeroes] = useOutletContext();
    const [heroInfo, setHeroInfo] = useState({});
    const [toggleEdit, setToggleEdit] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setHeroInfo(loadedHero);
    }, [loadedHero]);

    const handleClose = () => {
        setHeroInfo({});
        setToggleEdit(false);
        navigate('/');
    }

    const handleDelete = async () => {
        const response = await heroesAPI.deleteHero(heroInfo.id);
        if (response === 204) {
            setHeroes(heroes.filter(hero => hero.id !== heroInfo.id));
            handleClose();
        }
        else {
            alert('Unable to delete hero');
        }
    }

    return (
        <div className='hero-display'>
            <div className='hero-display__box'>
                <div className='hero-display__name'>
                    <h4>{heroInfo.name}</h4>
                    <AccountCircleIcon className={`hero-icon ${heroInfo.publisher === 'Marvel Comics' ? 'hero-icon--marvel' : 'hero-icon--dc'}`} />
                </div>
                <img className='hero-display__image' src={heroInfo.image} alt={`This is ${heroInfo.name}`}></img>
                <div className='patch-input-container'>
                    <PatchInput key={`${heroInfo.id}-alter_ego`} fieldName='Alter Ego' propertyName='alter_ego' entry={heroInfo} setEntry={setHeroInfo} />
                    <PatchInput key={`${heroInfo.id}-first_appearance`} fieldName='First Appearance' propertyName='first_appearance' entry={heroInfo} setEntry={setHeroInfo} />
                    <PatchInput key={`${heroInfo.id}-characters`} fieldName='Characters' propertyName='characters' entry={heroInfo} setEntry={setHeroInfo} />
                </div>
                <div className='hero-display__btns'>
                    {toggleEdit &&
                        <FormModal handleToggleClicks={() => setToggleEdit(!toggleEdit)} heroes={heroes} setHeroes={setHeroes} currentHero={heroInfo} setCurrentHero={setHeroInfo} />
                    }
                    <EditIcon className='btns' onClick={() => setToggleEdit(!toggleEdit)} />
                    <CloseIcon className='btns' onClick={handleClose} />
                    <DeleteForeverIcon className='btns--delete' onClick={handleDelete} />
                </div>
            </div>
        </div>
    );
}

export default DisplayHero;