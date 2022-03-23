import axios from "axios";

const apiUrl = 'http://localhost:3001';

export const getAlcohol = async () => {
    const res = await axios.get(`${apiUrl}/tasks`);
    return res.data
}

export const addAlcohol = async (name) => {
    const res = await axios.post(`${apiUrl}/tasks`, {
        name
    })
    return res.data
}

export const updateAlcohol = async (task) =>
    await axios.put(`${apiUrl}/tasks/${task.id}`, {
        state: !task.state
    });

export const deleteAlcohol = async (task) =>
    await axios.delete(`${apiUrl}/tasks/${task.id}`);
