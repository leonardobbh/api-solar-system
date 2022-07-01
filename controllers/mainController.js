const data = require('../data/data.json');

const index = async (req, res, next) => {
    try {
        return res.status(200).json({
            "/planets": "Listando todos os planetas",
            "/planet/:id": "Buscando um planeta atráves do seu id",
            "/planet/find/:name": "É feito uma comparação em cada tag de cada item, testando se esta name consta no array de tags, retornando os objetos que obtiveram sucesso."
        }).end();
    } catch (err) {
        return res.status(400).json({ error: { exception: err } }).end();
    }
};

const planets = async (req, res, next) => {
    try {
        return res.status(200).json(data.planets).end();
    } catch (err) {
        return res.status(400).json({ error: { exception: err } }).end();
    }
};

const planetID = async (req, res, next) => {
    const { id } = req.params;

    try {
        const planetIndex = data.planets.findIndex((planet) => planet.id === id);
        const planet = data.planets[planetIndex];

        return res.status(200).json(planet).end();
    } catch (err) {
        return res.status(400).json({ error: { exception: err } }).end();
    }
};


const planetFind = async (req, res, next) => {
    const { name } = req.params;

    try {
        const nameFormatted = name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
        const planets = data.planets.filter((planet) => {
            const match = planet.searchTags.some((tag) => tag.includes(nameFormatted));
            if (match) return planet;
        });

        return res.status(200).json(planets).end();
    } catch (err) {
        return res.status(400).json({ error: { exception: err } }).end();
    }
};


module.exports = {
    index,
    planets,
    planetID,
    planetFind
};