import request from "./network.js";
import config from "../config/config.js";

export function getCategory() {
  return request({
    url: config.baseUrl + '/category'
  })
}

export function getSubcategory(maitKey) {
  return request({
    url: config.baseUrl + '/subcategory',
    data: {
      maitKey
    }
  })
}

export function getCategoryDetail(miniWallkey, type) {
  return request({
    url: config.baseUrl + '/subcategory/detail',
    data: {
      miniWallkey,
      type
    }
  })
}