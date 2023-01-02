import { useState } from 'react';
import heroesAPI from '../services/heroesAPI';
import '../assets/FormModal.css';

const FormModal = ({ handleToggleClicks, heroes, setHeroes, currentHero }) => {
    const [newHero, setNewHero] = useState(currentHero ||
        {
            name: '',
            publisher: 'Marvel',
            alter_ego: '',
            first_appearance: '',
            image: '',
            characters: ''
        }
    );

    const handleOutsideClicks = event => {
        if (event.target === event.currentTarget)
            handleToggleClicks();
    }

    const handleChange = event => {
        const newObject = {...newHero, [event.target.name]: event.target.value }
        setNewHero(newObject);
    }

    const handlePost = async () => {
        const response = await heroesAPI.postHero(newHero);
        if (response.id) {
            setHeroes([...heroes, response]);
            handleToggleClicks();
        }
        else {
            alert('Unable to post the hero');
        }
    }

    const handleReplace = async () => {
        const response = await heroesAPI.replaceHero(currentHero.id, newHero);
        const heroIndex = heroes.findIndex(hero => hero.id === currentHero.id);
        if (heroIndex !== -1) {
            const newHeroesArray = [...heroes];
            newHeroesArray[heroIndex] = response;
            setHeroes(newHeroesArray);
            handleToggleClicks();
        }
        else {
            alert('Unable to replace the hero');
        }
    }

    const handleSubmit = async event => {
        event.preventDefault();
        if (currentHero) {
            handleReplace();
        }
        else {
            handlePost();
        }
    }

    return (
        <div className='form-modal' onClick={handleOutsideClicks}>
            <div className='form-modal-container'>
                <form className='form-modal-form' onSubmit={handleSubmit}>
                    <h3>{`${currentHero ? 'Update' : 'Create'} a hero`}</h3>
                    <label for='name'>Name</label>
                    <input type='text' id='name' name='name' value={newHero.name} onChange={handleChange} placeholder='Hero name?' minLength={3} required></input>
                    <div className='form-modal-radio_input'>
                        <label>Marvel:<input type='radio' name='publisher' onChange={handleChange} value='Marvel Comics' required></input></label>
                        <label>DC Comics:<input type='radio' name='publisher' onChange={handleChange} value='DC Comics' required></input></label>
                    </div>
                    <label for='alter_ego'>Alter Ego</label>
                    <input type='text' id='alter_ego' name='alter_ego' value={newHero.alter_ego} onChange={handleChange} placeholder='Real identity?' minLength={3} required></input>
                    <label for='first_appearance'>First Appearance</label>
                    <input type='text' id='first_appearance' name='first_appearance' value={newHero.first_appearance} onChange={handleChange} placeholder='First issue?' minLength={3} required></input>
                    <label for='image'>Image URL</label>
                    <input type='url' id='image' name='image' value={newHero.image} onChange={handleChange} placeholder='Link to image...' minLength={3} required></input>
                    <label for='characters'>Characters:</label>
                    <input type='text' id='characters' name='characters' value={newHero.characters} onChange={handleChange} placeholder='Characters?' minLength={3} required></input>
                    <div className='form-modal-btns'>
                        <button className='form-input-ok' type='submit'>Submit</button>
                        <button 
                        onClick={event => {
                            event.preventDefault();
                            handleToggleClicks();
                        }}>Discard</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default FormModal;