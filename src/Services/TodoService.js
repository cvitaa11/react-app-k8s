import { todoUrl } from "../Config/Url";
import axios from "axios";

export const todoService = {
  getTodos,
  deleteTodo,
};

async function getTodos() {
  return axios
    .get(todoUrl)
    .then((res) => res)
    .catch((err) => err.response);
}

async function deleteTodo(id) {
  return axios
    .delete(`${todoUrl}/${id}`)
    .then((res) => res)
    .catch((err) => err.response);
}
