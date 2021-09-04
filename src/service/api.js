import axios from 'axios';

const url = "http://localhost:3003/users";

export const getUsers = async(id) => {
  id = id || '';
    return await axios.get(`${url}/${id}`);
}

export const SubmitUser = async(inputValue) => {
    return await axios.post(url, inputValue);
  }

export const EditsUser = async(id,inputValue) => {
return await axios.put(`${url}/${id}`, inputValue);
}

export const deleteUserData = async(id) => {
    return await axios.delete(`${url}/${id}`);
  }