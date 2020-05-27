import request from './network.js';
import config from "../config/config.js";

export function getDetail(iid) {
  return request({
    url: config.baseUrl+'/detail',
    data: {
      iid
    }
  })
}

export function getRecommends() {
  return request({
    url: config.baseUrl+'/recommend'
  })
}

export class GoodsBaseInfo {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = services
    this.realPrice = itemInfo.lowNowPrice
  }
}

export class ShopInfo {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods
  }
}

export class ParamInfo {
  constructor(params) {
    // 注: images可能没有值(某些商品有值, 某些没有值)
    this.image = params.info.images ? params.info.images[0] : '';
    this.infos = params.info.set;
    this.sizes = params.rule.tables;
  }
}