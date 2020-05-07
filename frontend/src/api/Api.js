import axios from "axios";

const BASE_URL = "http://localhost:8080";

const Api = axios.create({
    baseURL: BASE_URL,
});

window.Api = Api;

export default Api;
