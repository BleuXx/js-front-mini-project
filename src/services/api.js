import axios from "axios";

const apiUrl = 'http://localhost:3001/alcoholic_drinks';

export const getAlcohol = async (id) => {
    const res = await axios.get(`${apiUrl}/${id}`);
    return res.data
}

export const addAlcohol = async (name,type,description,price,alcohol) => {
    const res = await axios.post(`${apiUrl}/create`, {
        name,
        type,
        description,
        price,
        alcohol
    })
    return res.data
}

export const updateAlcohol = async (alcohol) =>
    await axios.put(`${apiUrl}/edit/${alcohol.id}`, {
        state: !alcohol.state
    });

export const deleteAlcohol = async (alcohol) =>
    await axios.delete(`${apiUrl}/tasks/${alcohol.id}`);
