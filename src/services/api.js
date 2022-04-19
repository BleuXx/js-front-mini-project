import axios from "axios";

const apiUrl = "http://localhost:3001/alcoholic_drinks";

const requestHandler = axios.create({
  baseURL: "https://some-domain.com/api/",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

export const getAlcohols = async () => {
  const res = await requestHandler.get("/");
  return res.data;
};

export const getAlcohol = async (id) => {
  const res = await axios.get(`/${id}`);
  console.log(res);
  return res.data;
};

export const addAlcohol = async (
  name,
  type,
  description,
  evaluatedPrice,
  alcoholLevel
) => {
  const res = await axios.post(`/`, {
    name,
    type,
    description,
    evaluatedPrice,
    alcoholLevel,
  });

  return res.data;
};

export const updateAlcohol = async ({
  id,
  name,
  type,
  description,
  evaluatedPrice,
  alcoholLevel,
}) => {
  const res = await axios.put(`/${id}`, {
    name,
    type,
    description,
    evaluatedPrice,
    alcoholLevel,
  });
  return res.data;
};

export const deleteAlcohol = async (alcohol) =>
  await axios.delete(`/${alcohol.id}`);
