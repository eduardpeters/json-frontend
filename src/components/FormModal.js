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

    const handleSubmit = async event => {
        event.preventDefault();
        const response = await heroesAPI.postHero(newHero);
        if (response.id) {
            setHeroes([...heroes, response]);
            handleToggleClicks();
        }
        else {
            alert('Unable to post the hero');
        }
    }

    return (
        <div className='form-modal' onClick={handleOutsideClicks}>
            <div className='form-modal-container'>
                <form className='form-modal-form' onSubmit={handleSubmit}>
                    <h3>Add a new hero</h3>
                    <label>Name: <input type='text' name='name' onChange={handleChange} placeholder='Enter a name' minLength={3} required></input></label>
                    <div>
                        <label>Marvel:<input type='radio' name='publisher' onChange={handleChange} value='Marvel Comics' required></input></label>
                        <label>DC Comics:<input type='radio' name='publisher' onChange={handleChange} value='DC Comics' required></input></label>
                    </div>
                    <label>Alter Ego: <input type='text' name='alter_ego' onChange={handleChange} placeholder='Enter the alter ego' minLength={3} required></input></label>
                    <label>First Appearance: <input type='text' name='first_appearance' onChange={handleChange} placeholder='Enter the first appearance' minLength={3} required></input></label>
                    <label>Image URL: <input type='url' name='image' onChange={handleChange} placeholder='https://www.example.com/img.jpg' minLength={3} required></input></label>
                    <label>Characters: <input type='text' name='characters' onChange={handleChange} placeholder='Enter characters' minLength={3} required></input></label>
                    <input type='submit'></input>
                    <button 
                    onClick={event => {
                        event.preventDefault();
                        handleToggleClicks();
                    }}>Close this</button>
                </form>
            </div>
        </div>
    );
}
export default FormModal;