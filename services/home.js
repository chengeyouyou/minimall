import config from "../config/config.js";
import request from "./network.js";

export function getMultiData(){
  return request({
    url: config.baseUrl + '/home/multidata'
  });
}

export function getProduct(type, page) {
  return request({
    url: config.baseUrl + '/home/data',
    data: {
      type,
      page
    }
  })
}

