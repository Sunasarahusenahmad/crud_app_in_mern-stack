import axios from "axios";

const URL = "http://localhost:8000";

export const addUser = async (data) => {
  try {
    return await axios.post(`${URL}/add`, data);
  } catch (error) {
    console.log("Error while calling add User Api", error);
  }
};

export const getUsers = async () => {
  try {
    return await axios.get(`${URL}/all`);
  } catch (err) {
    console.log("Error while calling getUsers API", err);
  }
};

export const getUser = async (id) => {
  try {
    return await axios.get(`${URL}/${id}`);
  } catch (err) {
    console.log("Error while calling getUser API", err);
  }
};

export const editUser = async (user, id) => {
  try {
    return await axios.post(`${URL}/${id}`, user);
  } catch (err) {
    console.log("Error while calling editUser API", err);
  }
};

export const deleteUser = async (id) => {
  try {
    return await axios.delete(`${URL}/${id}`);
  } catch (err) {
    console.log("Error while calling deleteUser API", err);
  }
};

