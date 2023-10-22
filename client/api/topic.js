import axios from "axios"
import {API} from "./const"

export const newForumTopic = async (newTopic) => {
    const response = await axios.post(`${API}/topics`, newTopic);
    return response.data;
}