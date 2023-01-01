import axios from 'axios';

class heroesAPI {
    static async getHeroes() {
        const URL = `${process.env.REACT_APP_BASE_URL}heroes`;
        try {
            const response = await axios.get(URL);
            return response.data;
        }
        catch (error) {
            console.error(error.message);
            return ([]);
        }
    }

    static async getSingleHero(id) {
        const URL = `${process.env.REACT_APP_BASE_URL}heroes/${id}`;
        try {
            const response = await axios.get(URL);
            return response.data;
        }
        catch (error) {
            console.error(error.message);
            return ({});
        }
    }

    static async updateSingleHero(id, reqBody) {
        const URL = `${process.env.REACT_APP_BASE_URL}heroes/${id}`;
        try {
            const response = await axios.patch(URL, reqBody);
            return response.data;
        }
        catch (error) {
            console.error(error.message);
            return ({});
        }
    }

    static async postHero(reqBody) {
        const URL = `${process.env.REACT_APP_BASE_URL}heroes/`;
        try {
            const response = await axios.post(URL, reqBody);
            return response.data;
        }
        catch (error) {
            console.error(error.message);
            return ({});
        }
    }

    static async deleteHero(id) {
        const URL = `${process.env.REACT_APP_BASE_URL}heroes/${id}`;
        try {
            const response = await axios.delete(URL);
            return response.status;
        }
        catch (error) {
            console.error(error.message);
            return ({});
        }
    }
}

export default heroesAPI;