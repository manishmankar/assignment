import axios from "axios";
const API = "http://173.82.100.177:3005/api/user";
const productMSTCruds = {
  getInfo: (data) => {
    return axios
      .post(
        `${API}/me`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${data.accessToken}`,
          },
        }
      )
      .then((res) =>
        res.data
          ? Promise.resolve(res.data)
          : Promise.reject({ message: res.data, status: res.status })
      )
      .catch((err) => Promise.reject({ message: err.message, status: err?.response?.status }));
  },

  login: (data) => {
    return axios
      .post(`${API}/login`, data)
      .then((res) =>
        res.data
          ? Promise.resolve(res.data)
          : Promise.reject({ message: res.data, status: res.status })
      )
      .catch((err) => Promise.reject({ message: err.message, status: err?.response?.status }));
  },
  signup: (data) => {
    return axios
      .post(`${API}/signup`, data)
      .then((res) =>
        res.data
          ? Promise.resolve(res.data)
          : Promise.reject({ message: res.data, status: res.status })
      )
      .catch((err) => Promise.reject({ message: err.message, status: err?.response?.status }));
  },
};

export default productMSTCruds;
