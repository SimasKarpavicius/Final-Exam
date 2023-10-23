import axios from "axios"
import {API} from "./const"

export const postAnswer = async (answer) => {
    const topicId = answer.topicId;
    const response = await axios.post(`${API}/topics/${topicId}/answers`, answer);
    return response.data;
}