import React, { Component } from "react";
import "./Home.css";
import CategoryItem from "../../components/CatergoryItem/CategoryItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faArrowRight ,  faStar, faTruck, faDollarSign, faTimes, faMinus, faMedal, faPlus, faCartPlus, faHeart, faBolt, faInfo, faFire } from '@fortawesome/free-solid-svg-icons';
import to1 from './banner.jpg'
import to2 from './banner3.png'
import to3 from './banner4.png'
import nho1 from './banner1.png'
import nho2 from './banner2.png'
import Carousel from 'react-bootstrap/Carousel' 
import sp from './sp.jpg'
import sale from './sale.png'
import sale2 from './sale2.png'
import callAPI from "../../utils/apiCaller";

class Home extends Component {
   constructor(props) {
    super();
    this.state = {
      link: "localhost:3000/",
      flashdeals: [],
      categories: [],
      common: [],
    };
  }

  async getHomeProducts(){
    await callAPI("", "GET", {
    })
      .then((response) => {
        console.log(response);
        this.setState({ 
          flashdeals: response.data,
          common: response.data,  });

        return response.data;
      })
      .catch((e) => {
        console.log(e.response);
      });
  };

  async getCategory(){
    await callAPI("/category", "GET", {
    })
      .then((response) => {
        console.log("category");
        console.log(response);
        this.setState({ 
          categories:response.data,
         });

        return response.data;
      })
      .catch((e) => {
        console.log(e.response);
      });
  }

  async componentDidMount() {
    await this.getHomeProducts();
    this.getCategory();
  }

  auto1RowFlashProduct(start, end){
    console.log("1row")
    let result =[];
    for (let i = start; i < end; i++){
      result.push(
        <div className="col-md-3">
            
            <div className="motsanpham">
              <div className="layer">

              </div>
              <div className="layerbox">
      
              </div>
              {
                this.state.flashdeals.length > 0 
                ? <div className="controls">
              
                <button onClick={() => {this.onClickLove(this.state.flashdeals[i].id)}}><FontAwesomeIcon icon={faHeart} className="iconcontrol"/></button>
                <button onClick={() => {this.onClickInfo(this.state.flashdeals[i].id)}}><FontAwesomeIcon icon={faInfo} className="iconcontrol"/></button>
                <button onClick={() => {this.onClickaddCart(this.state.flashdeals[i].id)}}><FontAwesomeIcon icon={faCartPlus} className="iconcontrol"/></button>
              </div>
                : <div className="controls">
              
                <button onClick={() => {this.onClickLove(null)}}><FontAwesomeIcon icon={faHeart} className="iconcontrol"/></button>
                <button onClick={() => {this.onClickInfo(null)}}><FontAwesomeIcon icon={faInfo} className="iconcontrol"/></button>
                <button onClick={() => {this.onClickaddCart(null)}}><FontAwesomeIcon icon={faCartPlus} className="iconcontrol"/></button>
              </div>
              }
              
              <img className="banner" src={sale2}></img>

              {
                this.state.flashdeals.length > 0 
                ? <img className="anhsp" src={this.state.flashdeals[i].image_url} style={{width:'100%'}}></img>
                : <img className="anhsp" src="" style={{width:'100%'}}></img>
              }

              
              {
                this.state.flashdeals.length > 0 
                ? <div className="tieude">{this.state.flashdeals[i].product_name}</div>
                : <div className="tieude"></div>
              }
              
              {this.state.flashdeals.length > 0 
              ? <strong className="gia">{this.state.flashdeals[i].price} đ</strong> 
              : <strong className="gia"></strong> }

              <div className="thanhbar">
                <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{width: '20%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>

                    {
                      this.state.flashdeals.length > 0 
                      ? <small class="justify-content-center d-flex position-absolute w-100">Đã bán {this.state.flashdeals[i].stock}</small>
                      :<small class="justify-content-center d-flex position-absolute w-100"></small>
                    }

                    
                </div>
              </div>
              
            </div>
          
          </div>
      );
    }
    return result;
  }

  autoFlashProduct(numrow, numProduct1row){
    let rows = [];
    for(let i = 0; i < numrow; i++){
      rows.push(
        <div className="row">
        {this.auto1RowFlashProduct(i*numProduct1row, (i+1)*numProduct1row)}
        </div>
      );
    }
    
    return <div className="card">
    <div className="card-body">
      <div className="card-title d-flex align-items-center">    
      <FontAwesomeIcon icon={faBolt} className="icondanhmuc mr-2" style={{fontSize:'20px', color: 'orangered'}}/>
      <strong>Flash Deal</strong>
      <span className="ml-2 badge badge-danger">15:16</span>
      </div>

      {rows}

    </div>

  </div>

  };

  auto1RowCommonProduct(start, end){
    let result =[];
    for (let i = start; i < end; i++){
      result.push(
        <div className="col-md-3">
            
        <div className="motsanpham">
          <div className="layer">

          </div>
          <div className="layerbox">
  
          </div>
          {
                this.state.flashdeals.length > 0 
                ? <div className="controls">
              
                <button onClick={() => {this.onClickLove(this.state.common[i].id)}}><FontAwesomeIcon icon={faHeart} className="iconcontrol"/></button>
                <button onClick={() => {this.onClickInfo(this.state.common[i].id)}}><FontAwesomeIcon icon={faInfo} className="iconcontrol"/></button>
                <button onClick={() => {this.onClickaddCart(this.state.common[i].id)}}><FontAwesomeIcon icon={faCartPlus} className="iconcontrol"/></button>
              </div>
                : <div className="controls">
              
                <button onClick={() => {this.onClickLove(null)}}><FontAwesomeIcon icon={faHeart} className="iconcontrol"/></button>
                <button onClick={() => {this.onClickInfo(null)}}><FontAwesomeIcon icon={faInfo} className="iconcontrol"/></button>
                <button onClick={() => {this.onClickaddCart(null)}}><FontAwesomeIcon icon={faCartPlus} className="iconcontrol"/></button>
              </div>
              }
          <img className="banner" src={sale2}></img>
          {
                this.state.common.length > 0 
                ? <img className="anhsp" src={this.state.common[i].image_url} style={{width:'100%'}}></img>
                : <img className="anhsp" src={sp} style={{width:'100%'}}></img>
          }

          
          {
                this.state.common.length > 0 
                ? <div className="tieude">{this.state.common[i].product_name}</div>
                : <div className="tieude"></div>
              }
          
          <div className="danhmucphanduoi"> 

            {this.state.common.length > 0 
              ? <span><strong className="gia2">{this.state.common[i].price} đ</strong></span>
              : <span><strong className="gia2"></strong></span>
            }
            

            <br></br>
            <del className="text-muted">243.000đ</del>
            <span className="badge badge-success ml-2">-35%</span>
            <div >
                <div className="float-left"><FontAwesomeIcon icon={faStar}className="ngoisao"/> </div>
                <div className="float-left  ml-1"> <FontAwesomeIcon icon={faStar}className="ngoisao"/></div>
                <div className="float-left  ml-1"><FontAwesomeIcon icon={faStar}className="ngoisao"/> </div>
                <div className="float-left  ml-1"> <FontAwesomeIcon icon={faStar}className="ngoisao"/></div>
                <div className="float-left  ml-1"> <FontAwesomeIcon icon={faStar}className="ngoisao"/> </div>
                <small className="text-secondary ml-2">11</small>

            </div>
          </div>
          {this.state.common.length > 0 
              ? <small className="diadiem" >{this.state.common[i].origin}</small>
              : <small className="diadiem" ></small>
            }
          
          
        </div>
      
      </div>

      );
    }
    return result;
  }

  autoCommonProduct(numrow,numProduct1row){
    let rows = [];
    for(let i = 0; i < numrow; i++){
      rows.push(
        <div className="row">
        {this.auto1RowCommonProduct(i*numProduct1row, (i+1)*numProduct1row)}
        </div>
      );
      rows.push(<br></br>)
    }
    return <div className="card">
    <div className="card-body">
    <div className="card-title d-flex align-items-center">    
      <FontAwesomeIcon icon={faFire} className="icondanhmuc mr-2" style={{fontSize:'20px', color: 'orangered'}}/>
      <strong>Sản phẩm phổ biến</strong>
      <span className="ml-2 badge badge-danger">15:16</span>
      </div>
      {rows}
    </div>
  </div>
  }


  
  render() {

    let autodanhmuc = [];
    for(let i = 0; i < this.state.categories.length; i++){
      autodanhmuc.push(

        <li><a href="" title="" className="align-items-center d-flex justify-content-between">{this.state.categories[i].name}<img src={this.state.categories[i].image_url} className="icondanhmuc"/></a></li>
      )
    }
    let danhmucReactDom = 
    <div className="card danhmuc cha">
      <div className="card-body">
        <h5 class="card-title">CATEGORY</h5>
        <hr></hr>
        <ul className="list-unstyled">
          {autodanhmuc}
        </ul>
      </div>

      <div className="danhmuc con card">
        <div className="card-body">
        <h5 class="card-title">Business</h5>
        <hr></hr>
        <ul className="list-unstyled">
          {autodanhmuc}
        </ul>
        </div>
      </div>

    </div>

    let bentraidanhmuc =
    <div className="bentraidanhmuc h-100">
      <ul className="d-block d-flex justify-content-between h-10" style={{backgroundColor:'#302E41', padding: '10px', borderRadius: '4px'}}>
        <li><a href="">Deal Hot</a></li>
        <li><a href="">Lịch sử xem hàng</a></li>
        <li><a href="">Coupon</a></li>
        <li><a href="">Xu</a></li>
        <li><a href="">Đăng ký bán hàng</a></li>
      </ul>
      <div className="row ">
        <div className="col-md-8">
          <Carousel className="w-100 " >
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={to1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={to2}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={to3}
                    alt="Third slide"
                />
            </Carousel.Item>
            </Carousel>
        </div>
        <div className="col-md-4">
          <img src={nho1}></img>
          <img src={nho2}></img>
        </div>
      </div>
    </div>
    ;

    return <div class="container">
      <div class = "row">
      <div class = "col-md-4" >
        {danhmucReactDom}
      </div>
      <div class = "col-md-8" >
        {bentraidanhmuc}
      </div>
      </div>
      <br/>
      {this.autoFlashProduct(2,4)}
      <br/>
      {this.autoCommonProduct(3,4)}
    </div>
  }

  // su kien
  onClickInfo(idProduct){
    console.log(idProduct);
    window.open("product?id=" + idProduct,"_self");
  }

  onClickaddCart(idProduct){
    callAPI("", "POST", {
      
    })
      .then((response) => {
        console.log(response);
        this.setState({ 
          flashdeals: response.data,
          common: response.data,  });

        return response.data;
      })
      .catch((e) => {
        console.log(e.response);
      });
  }

  onClickLove(){

  }

}

export default Home;
