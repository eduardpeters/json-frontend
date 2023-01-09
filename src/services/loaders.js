import heroesAPI from './heroesAPI';

const heroListLoader = async () => {
    const heroes = await heroesAPI.getHeroes();
    if (!heroes.length)
        throw new Error('Not found', { status: 404 });
    return heroes;
}

const singleHeroLoader = async (heroId) => {
    const singleHero = await heroesAPI.getSingleHero(heroId);
    if (!singleHero.id)
        throw new Error('Not found', { status: 404 });
    return singleHero;
}

export { heroListLoader, singleHeroLoader };