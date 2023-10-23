import axios from "axios"
import {API} from "./const"

export const newForumTopic = async (newTopic) => {
    const response = await axios.post(`${API}/topics`, newTopic);
    return response.data;
}

export const getTopics = async () => {
    const response = await axios.get(`${API}/topics`);
    return response.data;
}