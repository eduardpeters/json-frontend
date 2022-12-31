import { useState, useEffect } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import heroesAPI from '../services/heroesAPI';
import '../assets/PatchInput.css';

const PatchInput = ({ fieldName, propertyName, entry, setEntry }) => {
    const [newValue, setNewValue] = useState('');
    const [toggleEdit, setToggleEdit] = useState(false);
    let originalValue = entry[propertyName];

    useEffect(() => {
        setNewValue(entry[propertyName]);
    }, [entry]);

    const handleOkClick = async () => {
        if (newValue.length < 3) {
            alert('New value must be a string of at least 3 characters');
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
            <label className='patch-input-label'>{`${fieldName}:`}</label>
            <input className={`patch-input-input ${toggleEdit && 'patch-input-input_enabled'}`}
                value={newValue}
                onChange={e => setNewValue(e.target.value)}
                disabled={toggleEdit ? false : true}
            >
            </input>
            <div className='patch-input-btns'>
            {toggleEdit ?
                <>
                    <button className='patch-input-ok' onClick={handleOkClick}>OK</button>
                    <button className='patch-input-cancel' onClick={handleCancelClick}>Cancel</button>
                </>
                :
                    <EditIcon fontSize='small' onClick={() => setToggleEdit(!toggleEdit)} />
                }
            </div>
        </div>
    );
}

export default PatchInput;