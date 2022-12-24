const DisplayHero = ({selectedHero, setSelectedHero}) => {
    return (
        <>
            {selectedHero.id ? 
        <div>
            Current selection:
            {selectedHero.name}
            <button onClick={() => setSelectedHero({})}>Close</button>
        </div>
        :
        <div>
            Pick a hero from the list!
        </div>
            }
        </>
    );
}

export default DisplayHero;