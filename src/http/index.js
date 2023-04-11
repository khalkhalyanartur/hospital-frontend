import axios from "axios";
import { url } from "src/constants";

const $api = axios.create({
  baseURL: url,
  withEmotionCache: true
})

export default $api; 
