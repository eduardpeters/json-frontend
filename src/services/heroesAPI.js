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
}

export default heroesAPI;