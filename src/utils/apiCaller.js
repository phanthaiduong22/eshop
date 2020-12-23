import axios from "axios";
import * as Config from "../constants/Config";

export default function callAPI(endpoint, method = "GET", data, token = "") {

  return axios({
    method: method,
    url: `${Config.API_URL}${endpoint}`,
    data: data,
    headers: { "auth-token": `${token}` },
  });
}
