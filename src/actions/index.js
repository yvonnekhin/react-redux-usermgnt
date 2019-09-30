import axios from "axios";
import history from "../components/history";
import * as actionTypes from "./actionTypes";

const apiUrl = "https://reqres.in/api/users";

export function fetchUsers() {
  return dispatch => {
    return axios
      .get(`${apiUrl}`)
      .then(response => {
        dispatch({ type: actionTypes.RECEIVE_USERS, users: response.data });
      })
      .catch(error => {
        throw error;
      });
  };
}

export const getUser = id => {
  return dispatch => {
    return axios
      .get(`${apiUrl}/${id}`)
      .then(response => {
        dispatch({ type: actionTypes.RECEIVE_USER, user: response.data });
      })
      .catch(error => {
        throw error;
      });
  };
};

export function addUser({ email, first_name, last_name }) {
  return dispatch => {
    return axios
      .post(`${apiUrl}`, { email, first_name, last_name })
      .then(response => {
        let data = response.data;
        dispatch({
          type: actionTypes.ADD_USER,
          payload: {
            id: data.id,
            email: data.email,
            first_name: data.first_name,
            last_name: data.last_name
          }
        });
      })
      .then(() => {
        history.push("/users/new");
      })
      .catch(error => {
        throw error;
      });
  };
}

export const deleteUser = id => {
  return dispatch => {
    return axios
      .delete(`${apiUrl}/${id}`)
      .then(response => {
        dispatch({ type: actionTypes.DELETE_USER, payload: { id } });
      })
      .then(() => {
        history.push("/users");
      })
      .catch(error => {
        throw error;
      });
  };
};

export const updateUser = user => {
  const userId = user.id;
  return dispatch => {
    return axios
      .patch(`${apiUrl}/${user.id}.json`, {
        email: user.email,
        first_name: user.first_name,
        last_name: user.last_name
      })
      .then(response => {
        const data = response.data;
        dispatch({
          type: actionTypes.UPDATE_USER,
          payload: {
            id: data.id,
            email: data.email,
            first_name: data.first_name,
            last_name: data.last_name
          }
        });
        dispatch({
          type: actionTypes.REPLACE_USER,
          payload: {
            id: data.id,
            email: data.email,
            first_name: data.first_name,
            last_name: data.last_name
          }
        });
      })
      .then(() => {
        history.push(`/users/${userId}`);
      })
      .catch(error => {
        throw error;
      });
  };
};
