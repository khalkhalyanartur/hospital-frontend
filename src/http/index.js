import axios from "axios";
import { url } from "../constants";
import { withEmotionCache } from "@emotion/react";

const $api = axios.create({
  baseURL: url,
  withEmotionCache: true
})

export default $api; 
