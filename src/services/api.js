import axios from "axios";

const apiUrl = 'http://localhost:3001/alcoholic_drinks';

export const getAlcohols = async () => {
    const res = await axios.get(`${apiUrl}/`);
    return res.data
}

export const getAlcohol = async (id) => {
    const res = await axios.get(`${apiUrl}/${id}`);
    return res.data
}

export const addAlcohol = async (name,type,description,evaluatedPrice,alcoholLevel) => {
    const res = await axios.post(`${apiUrl}/`, {
        name,
        type,
        description,
        evaluatedPrice,
        alcoholLevel
    })
    return res.data
}

export const updateAlcohol = async (id,name,type,description,evaluatedPrice,alcoholLevel) => {
    const res = await axios.put(`${apiUrl}/${id}`, {
        name,
        type,
        description,
        evaluatedPrice,
        alcoholLevel
    });
    return res.data
};

export const deleteAlcohol = async (alcohol) =>
    await axios.delete(`${apiUrl}/${alcohol.id}`);
