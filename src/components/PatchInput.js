import { useState, useEffect } from 'react';
import heroesAPI from '../services/heroesAPI';
import '../assets/PatchInput.css';

const PatchInput = ({ fieldName, propertyName, entry, setEntry }) => {
    const [newValue, setNewValue] = useState('');
    let originalValue = entry[propertyName];

    useEffect(() => {
        setNewValue(entry[propertyName]);
    },[entry]);

    const handleOkClick = async () => {
        if (newValue.length < 3) {
            alert('New value must be a string of at least 3 characters');
            return ;
        }
        const patchedEntry = await heroesAPI.updateSingleHero(entry.id, {[propertyName]: newValue});
        if (patchedEntry.id) {
            setEntry(patchedEntry);
            originalValue = patchedEntry[propertyName];
        }
        else {
            alert('Unable to patch the hero');
        } 
    }

    const handleCancelClick = () => setNewValue(originalValue);

    return (
        <div className='patch-input-container'>
            <label className='patch-input-label'>
                {`${fieldName}:`}
                <input className='patch-input-input'
                    value={newValue}
                    onChange={e => setNewValue(e.target.value)}
                >
                </input>
            </label>
            <button onClick={handleOkClick}>OK</button>
            <button onClick={handleCancelClick}>Cancel</button>
        </div>
    );
}

export default PatchInput;