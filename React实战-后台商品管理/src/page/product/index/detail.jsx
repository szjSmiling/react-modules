/*
 * @Author: Jelly
 * @Date: 2020-11-15 21:31:52
 * @LastEditors: Jelly
 * @LastEditTime: 2020-12-01 23:37:54
 * @Github: https://github.com/szjSmiling/react-admin-shop
 */
import React from 'react';
import MUtil from 'util/mm.jsx'
import Product from 'service/product-service.jsx'
import PageTitle from 'component/page-title/index.jsx';
import CategorySelector from './category-selector.jsx';

import './save.scss';

const _mm = new MUtil();
const _product = new Product();

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.pid,
      name: '',
      subtitle: '',
      categoryId: 0,
      parentCategoryId: 0,
      subImages: [],
      price: '',
      stock: '',
      detail: '',
      status: 1 //商品状态1: 在售
    }
  }
  componentDidMount() {
    this.loadProdcut();
  }
  // 加载商品详情
  loadProdcut() {
    // 有id的时候, 需要表单回填
    if(this.state.id) {
      _product.getProduct(this.state.id).then(res => {
        let images = res.subImages.split(',');
        res.subImages = images.map((imgUri) => {
          let newUrl = (imgUri.indexOf('http://') > -1 || imgUri.indexOf('https://') > -1)
            ? imgUri : `${res.imageHost}${imgUri}`
          return {
            uri: imgUri,
            url: newUrl
          }
        })
        this.setState(res)
      }, errMsg => {
        _mm.errorTips(errMsg);
      })
    }
  }
  
  render () {
    return (
      <div id="page-wrapper">
        <PageTitle title="添加商品" />
        <div className="form-horizontal">
          <div className="form-group">
            <label className="col-sm-2 control-label">商品名称</label>
            <div className="col-sm-5">
              <p className="form-control-static">{this.state.name}</p>
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">商品描述</label>
            <div className="col-sm-5">
              <p className="form-control-static">{this.state.subtitle}</p>
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">所属分类</label>
            <CategorySelector
              readOnly
              categoryId={this.state.categoryId}
              parentCategoryId={this.state.parentCategoryId} />
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">商品价格</label>
            <div className="col-sm-3">
              <div className="input-group">
                <input type="number"
                className="form-control"
                readOnly
                value={this.state.price} />
                <span className="input-group-addon" id="basic-addon2">元</span>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">商品库存</label>
            <div className="col-sm-3">
              <div className="input-group">
                <input type="number"
                className="form-control"
                readOnly
                value={this.state.stock} />
                <span className="input-group-addon" id="basic-addon2">件</span>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">商品图片</label>
            <div className="col-sm-10">
              {
                this.state.subImages.length ? this.state.subImages.map(
                  (image, index) => (
                    <div className="img-con" key={index} >
                      <img className="img" src={image.url} />
                    </div>
                )) : (<div>暂无图片</div>)
              }
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">商品详情</label>
            <div className="col-sm-10"
              dangerouslySetInnerHTML={{__html: this.state.detail}}>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetail;