import axios from "axios";

class CatsApi {
    async getRandomCat() {
        const res = await axios.get(`https://api.thecatapi.com/v1/images/search`);
        console.log(res);
        if (res.status !== 200) {
            throw new Error('Что-то пошло не так');
        }
        return res;
    }
}

export const catsApi = new CatsApi();

