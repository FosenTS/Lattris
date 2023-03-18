import axios from 'axios'

export default class PostService {
    static async getAll(limit = 15, page = 1) {
        const responce = await axios.get("http://127.0.0.1:5000", {
            params:{
                _limits: limit,
                _page: page
            }
        })
        return responce.data
    }
}