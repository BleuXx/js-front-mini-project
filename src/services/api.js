import axios from "axios";

const requestHandler = axios.create({
  baseURL: "http://localhost:3001/alcoholic_drinks",
  timeout: 1000,
});

export const getAlcohols = async () => {
  const response = await requestHandler.get("/");
  console.log(response);
  return response;
};

export const getAlcohol = async ({ id }) => {
  const response = await requestHandler.get(`/${id}`);
  console.log(response);
  return response;
};

export const addAlcohol = async ({
  name,
  type,
  description,
  estimatedPrice,
  alcoholLevel,
  image,
}) => {
  const response = await requestHandler.post("/", {
    name,
    type,
    description,
    estimatedPrice,
    alcoholLevel,
    image,
  });
  console.log(response);
  return response;
};

export const updateAlcohol = async ({
  id,
  name,
  type,
  description,
  estimatedPrice,
  alcoholLevel,
}) => {
  const response = await requestHandler.put(`/${id}`, {
    name,
    type,
    description,
    estimatedPrice,
    alcoholLevel,
  });
  console.log(response);
  return response;
};

export const deleteAlcohol = async ({ id }) => {
  const response = await requestHandler.delete(`/${id}`);
  console.log(response);
  return response;
};

export const getStats = async () => {
  const response = await requestHandler.get("/stats");
  console.log(response);
  return response;
};
