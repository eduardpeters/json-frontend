import { useState, useEffect } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import heroesAPI from '../services/heroesAPI';
import '../assets/PatchInput.css';

const PatchInput = ({ fieldName, propertyName, entry, setEntry }) => {
    let originalValue = entry[propertyName];
    const [newValue, setNewValue] = useState('');
    const [toggleEdit, setToggleEdit] = useState(false);
    
    useEffect(() => {
        if (entry[propertyName])
            setNewValue(entry[propertyName]);
    }, [entry]);

    const handleOkClick = async () => {
        if (newValue.length < 2) {
            alert('New value must be a string of at least 2 characters');
            return;
        }
        const patchedEntry = await heroesAPI.updateSingleHero(entry.id, { [propertyName]: newValue });
        if (patchedEntry.id) {
            setEntry(patchedEntry);
            originalValue = patchedEntry[propertyName];
            setToggleEdit(!toggleEdit);
        }
        else {
            alert('Unable to patch the hero');
        }
    }

    const handleCancelClick = () => {
        setNewValue(originalValue);
        setToggleEdit(!toggleEdit);
    }

    return (
        <div className='patch-input'>
            <label className='patch-input__label'>{`${fieldName}:`}</label>
            <input className={`patch-input__input ${toggleEdit && 'patch-input__input--enabled'}`}
                value={newValue}
                onChange={e => setNewValue(e.target.value)}
                disabled={toggleEdit ? false : true}
            >
            </input>
            <div className='patch-input__btns'>
            {toggleEdit ?
                <>
                    <button className='patch-input__btns--ok' onClick={handleOkClick}>OK</button>
                    <button className='patch-input__btns--cancel' onClick={handleCancelClick}>Cancel</button>
                </>
                :
                    <EditIcon fontSize='small' onClick={() => setToggleEdit(!toggleEdit)} />
                }
            </div>
        </div>
    );
}

export default PatchInput;