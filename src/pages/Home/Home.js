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

class Home extends Component {
  constructor(props) {
    super();
    this.state = {
      categories: [
        {
          imgSrc:
            "https://cf.shopee.vn/file/687f3967b7c2fe6a134a2c11894eea4b_tn",
          categoryName: "Thời Trang Nam",
          link: "/thoitrangnam",
        },
        {
          imgSrc:
            "https://cf.shopee.vn/file/687f3967b7c2fe6a134a2c11894eea4b_tn",
          categoryName: "Thời Trang Nam",
          link: "/thoitrangnam",
        },
        {
          imgSrc:
            "https://cf.shopee.vn/file/687f3967b7c2fe6a134a2c11894eea4b_tn",
          categoryName: "Thời Trang Nam",
          link: "/thoitrangnam",
        },
        {
          imgSrc:
            "https://cf.shopee.vn/file/687f3967b7c2fe6a134a2c11894eea4b_tn",
          categoryName: "Thời Trang Nam",
          link: "/thoitrangnam",
        },
      ],
      hotDealProduct: [
        {
          imgSrc:
            "https://cf.shopee.vn/file/a826691bf49f3ab0509886b4e1ca34ae_tn",
          productName:
            "Áo giữ nhiệt - Áo thun nam dài tay body - Áo bóng đá co giãn",
          link: "product/1",
          cost: "30000",
          sold: "131",
        },
        {
          imgSrc:
            "https://cf.shopee.vn/file/a826691bf49f3ab0509886b4e1ca34ae_tn",
          productName:
            "Áo giữ nhiệt - Áo thun nam dài tay body - Áo bóng đá co giãn",
          link: "product/1",
          cost: "30000",
          sold: "15000",
        },
      ],
    };
  }
  render() {

    let danhmuc = 
    <div className="card danhmuc cha">
      <div className="card-body">
        <h5 class="card-title">CATEGORY</h5>
        <hr></hr>
        <ul className="list-unstyled">
          <li>
            <a href="" title="" className="align-items-center d-flex justify-content-between">Điện tử điện lạnh<FontAwesomeIcon icon={faArrowRight} className="icondanhmuc"/></a>            
          </li>
          <li><a href="" title="" className="align-items-center d-flex justify-content-between">Phụ kiện thiết bị số<FontAwesomeIcon icon={faArrowRight} className="icondanhmuc"/></a></li>
          <li><a href="" title="" className="align-items-center d-flex justify-content-between">Laptop - Thiết bị IT<FontAwesomeIcon icon={faArrowRight} className="icondanhmuc"/></a></li>
          <li><a href="" title="" className="align-items-center d-flex justify-content-between">Điện Gia Dụng<FontAwesomeIcon icon={faArrowRight} className="icondanhmuc"/></a></li>
          <li><a href="" title="" className="align-items-center d-flex justify-content-between">Máy Ảnh, Quay Phim<FontAwesomeIcon icon={faArrowRight} className="icondanhmuc"/></a></li>
          <li><a href="" title="" className="align-items-center d-flex justify-content-between">Nhà Cửa Đời Sống<FontAwesomeIcon icon={faArrowRight} className="icondanhmuc"/></a></li>
          <li><a href="" title="" className="align-items-center d-flex justify-content-between">Hàng Tiêu Dùng<FontAwesomeIcon icon={faArrowRight} className="icondanhmuc"/></a></li>
          <li><a href="" title="" className="align-items-center d-flex justify-content-between">Đồ Chơi Mẹ và Bé<FontAwesomeIcon icon={faArrowRight} className="icondanhmuc"/></a></li>
        </ul>
      </div>

      <div className="danhmuc con card">
        <div className="card-body">
        <h5 class="card-title">Business</h5>
        <hr></hr>
        <ul className="list-unstyled">
          <li>
            <a href="" title="" className="align-items-center d-flex justify-content-between">Điện tử điện lạnh<FontAwesomeIcon icon={faArrowRight} className="icondanhmuc"/></a>            
          </li>
          <li><a href="" title="" className="align-items-center d-flex justify-content-between">Phụ kiện thiết bị số<FontAwesomeIcon icon={faArrowRight} className="icondanhmuc"/></a></li>
          <li><a href="" title="" className="align-items-center d-flex justify-content-between">Laptop - Thiết bị IT<FontAwesomeIcon icon={faArrowRight} className="icondanhmuc"/></a></li>
          <li><a href="" title="" className="align-items-center d-flex justify-content-between">Điện Gia Dụng<FontAwesomeIcon icon={faArrowRight} className="icondanhmuc"/></a></li>
          <li><a href="" title="" className="align-items-center d-flex justify-content-between">Máy Ảnh, Quay Phim<FontAwesomeIcon icon={faArrowRight} className="icondanhmuc"/></a></li>
          <li><a href="" title="" className="align-items-center d-flex justify-content-between">Nhà Cửa Đời Sống<FontAwesomeIcon icon={faArrowRight} className="icondanhmuc"/></a></li>
          <li><a href="" title="" className="align-items-center d-flex justify-content-between">Hàng Tiêu Dùng<FontAwesomeIcon icon={faArrowRight} className="icondanhmuc"/></a></li>
          <li><a href="" title="" className="align-items-center d-flex justify-content-between">Đồ Chơi Mẹ và Bé<FontAwesomeIcon icon={faArrowRight} className="icondanhmuc"/></a></li>
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


    let flashdeal = 
    <div className="card">

      <div className="card-body">
        <div className="card-title d-flex align-items-center">    
        <FontAwesomeIcon icon={faBolt} className="icondanhmuc mr-2" style={{fontSize:'20px', color: 'orangered'}}/>
        <strong>Flash Deal</strong>
        <span className="ml-2 badge badge-danger">15:16</span>
        </div>

        <div className="row">
          <div className="col-md-3">
            
            <div className="motsanpham">
              <div className="layer">

              </div>
              <div className="layerbox">
      
              </div>
              <div className="controls">
                <button><FontAwesomeIcon icon={faHeart} className="iconcontrol"/></button>
                <button><FontAwesomeIcon icon={faInfo} className="iconcontrol"/></button>
                <button><FontAwesomeIcon icon={faCartPlus} className="iconcontrol"/></button>
              </div>
              <img className="banner" src={sale2}></img>
              <img className="anhsp" src={sp} style={{width:'100%'}}></img>
              <div className="tieude">Giày vải nam nữ</div>
              <strong className="gia">200.000đ</strong>

              <div className="thanhbar">
                <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{width: '20%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    <small class="justify-content-center d-flex position-absolute w-100">Đã bán 100</small>
                </div>
              </div>
              
            </div>
          
          </div>
          <div className="col-md-3">
             
            <div className="motsanpham">
              <div className="layer">

              </div>
              <div className="layerbox">
      
              </div>
              <div className="controls">
                <button><FontAwesomeIcon icon={faHeart} className="iconcontrol"/></button>
                <button><FontAwesomeIcon icon={faInfo} className="iconcontrol"/></button>
                <button><FontAwesomeIcon icon={faCartPlus} className="iconcontrol"/></button>
              </div>
            <img className="banner" src={sale}></img>
              <img className="anhsp" src={sp} style={{width:'100%'}}></img>
              <div className="tieude">Giày vải nam nữ</div>
              <strong className="gia">200.000đ</strong>

              <div className="thanhbar">
                <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{width: '20%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    <small class="justify-content-center d-flex position-absolute w-100">Đã bán 100</small>
                </div>
              </div>
              
            </div>
          
          </div>
          <div className="col-md-3">
          
            <div className="motsanpham">
              <div className="layer">

              </div>
              <div className="layerbox">
      
              </div>
              <div className="controls">
                <button><FontAwesomeIcon icon={faHeart} className="iconcontrol"/></button>
                <button><FontAwesomeIcon icon={faInfo} className="iconcontrol"/></button>
                <button><FontAwesomeIcon icon={faCartPlus} className="iconcontrol"/></button>
              </div>
            <img className="banner" src={sale2}></img>
              <img className="anhsp" src={sp} style={{width:'100%'}}></img>
              <div className="tieude">Giày vải nam nữ</div>
              <strong className="gia">200.000đ</strong>

              <div className="thanhbar">
                <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{width: '20%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    <small class="justify-content-center d-flex position-absolute w-100">Đã bán 100</small>
                </div>
              </div>
              
            </div>
          
          </div>
          <div className="col-md-3 ">
          
            <div className="motsanpham">
              <div className="layer">

              </div>
              <div className="layerbox">
      
              </div>
              <div className="controls">
                <button><FontAwesomeIcon icon={faHeart} className="iconcontrol"/></button>
                <button><FontAwesomeIcon icon={faInfo} className="iconcontrol"/></button>
                <button><FontAwesomeIcon icon={faCartPlus} className="iconcontrol"/></button>
              </div>
            <img className="banner" src={sale}></img>
              <img className="anhsp" src={sp} style={{width:'100%'}}></img>
              <div className="tieude">Giày vải nam nữ</div>
              <strong className="gia">200.000đ</strong>

              <div className="thanhbar">
                <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{width: '20%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    <small class="justify-content-center d-flex position-absolute w-100">Đã bán 100</small>
                </div>
              </div>
              
            </div>
          
          </div>
        </div>

        
        <div className="row">
          <div className="col-md-3">
            
            <div className="motsanpham">
              <div className="layer">

              </div>
              <div className="layerbox">
      
              </div>
              <div className="controls">
                <button><FontAwesomeIcon icon={faHeart} className="iconcontrol"/></button>
                <button><FontAwesomeIcon icon={faInfo} className="iconcontrol"/></button>
                <button><FontAwesomeIcon icon={faCartPlus} className="iconcontrol"/></button>
              </div>
              <img className="banner" src={sale2}></img>
              <img className="anhsp" src={sp} style={{width:'100%'}}></img>
              <div className="tieude">Giày vải nam nữ</div>
              <strong className="gia">200.000đ</strong>

              <div className="thanhbar">
                <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{width: '20%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    <small class="justify-content-center d-flex position-absolute w-100">Đã bán 100</small>
                </div>
              </div>
              
            </div>
          
          </div>
          <div className="col-md-3">
             
            <div className="motsanpham" >
              <div className="layer">

              </div>
              <div className="layerbox">
      
              </div>
              <div className="controls">
                <button><FontAwesomeIcon icon={faHeart} className="iconcontrol"/></button>
                <button><FontAwesomeIcon icon={faInfo} className="iconcontrol"/></button>
                <button><FontAwesomeIcon icon={faCartPlus} className="iconcontrol"/></button>
              </div>
              <img className="banner" src={sale}></img>
              <img className="anhsp" src={sp} style={{width:'100%'}}></img>
              <div className="tieude">Giày vải nam nữ</div>
              <strong className="gia">200.000đ</strong>

              <div className="thanhbar">
                <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{width: '20%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    <small class="justify-content-center d-flex position-absolute w-100">Đã bán 100</small>
                </div>
              </div>
              
            </div>
          
          </div>
          <div className="col-md-3">
          
            <div className="motsanpham">
              <div className="layer">

              </div>
              <div className="layerbox">
      
              </div>
              <div className="controls">
                <button><FontAwesomeIcon icon={faHeart} className="iconcontrol"/></button>
                <button><FontAwesomeIcon icon={faInfo} className="iconcontrol"/></button>
                <button><FontAwesomeIcon icon={faCartPlus} className="iconcontrol"/></button>
              </div>
            <img className="banner" src={sale2}></img>
              <img className="anhsp" src={sp} style={{width:'100%'}}></img>
              <div className="tieude">Giày vải nam nữ</div>
              <strong className="gia">200.000đ</strong>

              <div className="thanhbar">
                <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{width: '20%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    <small class="justify-content-center d-flex position-absolute w-100">Đã bán 100</small>
                </div>
              </div>
              
            </div>
          
          </div>
          <div className="col-md-3 ">
          
            <div className="motsanpham">
              <div className="layer">

              </div>
              <div className="layerbox">
      
              </div>
              <div className="controls">
                <button><FontAwesomeIcon icon={faHeart} className="iconcontrol"/></button>
                <button><FontAwesomeIcon icon={faInfo} className="iconcontrol"/></button>
                <button><FontAwesomeIcon icon={faCartPlus} className="iconcontrol"/></button>
              </div>
            <img className="banner" src={sale}></img>
              <img className="anhsp" src={sp} style={{width:'100%'}}></img>
              <div className="tieude">Giày vải nam nữ</div>
              <strong className="gia">200.000đ</strong>

              <div className="thanhbar">
                <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{width: '20%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    <small class="justify-content-center d-flex position-absolute w-100">Đã bán 100</small>
                </div>
              </div>
              
            </div>
          
          </div>
        </div>
      

      </div>
      

    </div>
    ;

    let sanphamphobien =
    <div className="card">
      <div className="card-body">
      <div className="card-title d-flex align-items-center">    
        <FontAwesomeIcon icon={faFire} className="icondanhmuc mr-2" style={{fontSize:'20px', color: 'orangered'}}/>
        <strong>Sản phẩm phổ biến</strong>
        <span className="ml-2 badge badge-danger">15:16</span>
        </div>

        <div className="row">
          <div className="col-md-3">
            
            <div className="motsanpham">
              <div className="layer">

              </div>
              <div className="layerbox">
      
              </div>
              <div className="controls">
                <button><FontAwesomeIcon icon={faHeart} className="iconcontrol"/></button>
                <button><FontAwesomeIcon icon={faInfo} className="iconcontrol"/></button>
                <button><FontAwesomeIcon icon={faCartPlus} className="iconcontrol"/></button>
              </div>
              <img className="banner" src={sale2}></img>
              <img className="anhsp" src={sp} style={{width:'100%'}}></img>
              <div className="tieude">Giày vải nam nữ</div>
              
              <div className="danhmucphanduoi">
                <span><strong className="gia2">200.000đ</strong></span>
                <br></br>
                <del className="text-muted">243.000đ</del>
                <span className="badge badge-success ml-2">-35%</span>
                <div >
                    <div className="float-left"><FontAwesomeIcon icon={faStar}className="ngoisao"/> </div>
                    <div className="float-left  ml-1"> <FontAwesomeIcon icon={faStar}className="ngoisao"/></div>
                    <div className="float-left  ml-1"><FontAwesomeIcon icon={faStar}className="ngoisao"/> </div>
                    <div className="float-left  ml-1"> <FontAwesomeIcon icon={faStar}className="ngoisao"/></div>
                    <div className="float-left  ml-1"> <FontAwesomeIcon icon={faStar}className="ngoisao"/> </div>
                    <small className="text-secondary ml-2">112332</small>

                </div>
              </div>
              <small className="diadiem" >Hà Nội</small>
              
            </div>
          
          </div>

          <div className="col-md-3">
            
            <div className="motsanpham">
              <div className="layer">

              </div>
              <div className="layerbox">
      
              </div>
              <div className="controls">
                <button><FontAwesomeIcon icon={faHeart} className="iconcontrol"/></button>
                <button><FontAwesomeIcon icon={faInfo} className="iconcontrol"/></button>
                <button><FontAwesomeIcon icon={faCartPlus} className="iconcontrol"/></button>
              </div>
              <img className="banner" src={sale2}></img>
              <img className="anhsp" src={sp} style={{width:'100%'}}></img>
              <div className="tieude">Giày vải nam nữ</div>
              
              <div className="danhmucphanduoi">
                <span><strong className="gia2">200.000đ</strong></span>
                <br></br>
                <del className="text-muted">243.000đ</del>
                <span className="badge badge-success ml-2">-35%</span>
                <div >
                    <div className="float-left"><FontAwesomeIcon icon={faStar}className="ngoisao"/> </div>
                    <div className="float-left  ml-1"> <FontAwesomeIcon icon={faStar}className="ngoisao"/></div>
                    <div className="float-left  ml-1"><FontAwesomeIcon icon={faStar}className="ngoisao"/> </div>
                    <div className="float-left  ml-1"> <FontAwesomeIcon icon={faStar}className="ngoisao"/></div>
                    <div className="float-left  ml-1"> <FontAwesomeIcon icon={faStar}className="ngoisao"/> </div>
                    <small className="text-secondary ml-2">112332</small>

                </div>
              </div>
              <small className="diadiem" >Hà Nội</small>
              
            </div>
          
          </div>

          <div className="col-md-3">
            
            <div className="motsanpham">
              <div className="layer">

              </div>
              <div className="layerbox">
      
              </div>
              <div className="controls">
                <button><FontAwesomeIcon icon={faHeart} className="iconcontrol"/></button>
                <button><FontAwesomeIcon icon={faInfo} className="iconcontrol"/></button>
                <button><FontAwesomeIcon icon={faCartPlus} className="iconcontrol"/></button>
              </div>
              <img className="banner" src={sale2}></img>
              <img className="anhsp" src={sp} style={{width:'100%'}}></img>
              <div className="tieude">Giày vải nam nữ</div>
              
              <div className="danhmucphanduoi">
                <span><strong className="gia2">200.000đ</strong></span>
                <br></br>
                <del className="text-muted">243.000đ</del>
                <span className="badge badge-success ml-2">-35%</span>
                <div >
                    <div className="float-left"><FontAwesomeIcon icon={faStar}className="ngoisao"/> </div>
                    <div className="float-left  ml-1"> <FontAwesomeIcon icon={faStar}className="ngoisao"/></div>
                    <div className="float-left  ml-1"><FontAwesomeIcon icon={faStar}className="ngoisao"/> </div>
                    <div className="float-left  ml-1"> <FontAwesomeIcon icon={faStar}className="ngoisao"/></div>
                    <div className="float-left  ml-1"> <FontAwesomeIcon icon={faStar}className="ngoisao"/> </div>
                    <small className="text-secondary ml-2">112332</small>

                </div>
              </div>
              <small className="diadiem" >Hà Nội</small>
              
            </div>
          
          </div>

          <div className="col-md-3">
            
            <div className="motsanpham">
              <div className="layer">

              </div>
              <div className="layerbox">
      
              </div>
              <div className="controls">
                <button><FontAwesomeIcon icon={faHeart} className="iconcontrol"/></button>
                <button><FontAwesomeIcon icon={faInfo} className="iconcontrol"/></button>
                <button><FontAwesomeIcon icon={faCartPlus} className="iconcontrol"/></button>
              </div>
              <img className="banner" src={sale2}></img>
              <img className="anhsp" src={sp} style={{width:'100%'}}></img>
              <div className="tieude">Giày vải nam nữ</div>
              
              <div className="danhmucphanduoi">
                <span><strong className="gia2">200.000đ</strong></span>
                <br></br>
                <del className="text-muted">243.000đ</del>
                <span className="badge badge-success ml-2">-35%</span>
                <div >
                    <div className="float-left"><FontAwesomeIcon icon={faStar}className="ngoisao"/> </div>
                    <div className="float-left  ml-1"> <FontAwesomeIcon icon={faStar}className="ngoisao"/></div>
                    <div className="float-left  ml-1"><FontAwesomeIcon icon={faStar}className="ngoisao"/> </div>
                    <div className="float-left  ml-1"> <FontAwesomeIcon icon={faStar}className="ngoisao"/></div>
                    <div className="float-left  ml-1"> <FontAwesomeIcon icon={faStar}className="ngoisao"/> </div>
                    <small className="text-secondary ml-2">112332</small>

                </div>
              </div>
              <small className="diadiem" >Hà Nội</small>
              
            </div>
          
          </div>

        </div>
        <br></br>
        <div className="row">
          <div className="col-md-3">
            
            <div className="motsanpham">
              <div className="layer">

              </div>
              <div className="layerbox">
      
              </div>
              <div className="controls">
                <button><FontAwesomeIcon icon={faHeart} className="iconcontrol"/></button>
                <button><FontAwesomeIcon icon={faInfo} className="iconcontrol"/></button>
                <button><FontAwesomeIcon icon={faCartPlus} className="iconcontrol"/></button>
              </div>
              <img className="banner" src={sale2}></img>
              <img className="anhsp" src={sp} style={{width:'100%'}}></img>
              <div className="tieude">Giày vải nam nữ</div>
              
              <div className="danhmucphanduoi">
                <span><strong className="gia2">200.000đ</strong></span>
                <br></br>
                <del className="text-muted">243.000đ</del>
                <span className="badge badge-success ml-2">-35%</span>
                <div >
                    <div className="float-left"><FontAwesomeIcon icon={faStar}className="ngoisao"/> </div>
                    <div className="float-left  ml-1"> <FontAwesomeIcon icon={faStar}className="ngoisao"/></div>
                    <div className="float-left  ml-1"><FontAwesomeIcon icon={faStar}className="ngoisao"/> </div>
                    <div className="float-left  ml-1"> <FontAwesomeIcon icon={faStar}className="ngoisao"/></div>
                    <div className="float-left  ml-1"> <FontAwesomeIcon icon={faStar}className="ngoisao"/> </div>
                    <small className="text-secondary ml-2">112332</small>

                </div>
              </div>
              <small className="diadiem" >Hà Nội</small>
              
            </div>
          
          </div>

          <div className="col-md-3">
            
            <div className="motsanpham">
              <div className="layer">

              </div>
              <div className="layerbox">
      
              </div>
              <div className="controls">
                <button><FontAwesomeIcon icon={faHeart} className="iconcontrol"/></button>
                <button><FontAwesomeIcon icon={faInfo} className="iconcontrol"/></button>
                <button><FontAwesomeIcon icon={faCartPlus} className="iconcontrol"/></button>
              </div>
              <img className="banner" src={sale2}></img>
              <img className="anhsp" src={sp} style={{width:'100%'}}></img>
              <div className="tieude">Giày vải nam nữ</div>
              
              <div className="danhmucphanduoi">
                <span><strong className="gia2">200.000đ</strong></span>
                <br></br>
                <del className="text-muted">243.000đ</del>
                <span className="badge badge-success ml-2">-35%</span>
                <div >
                    <div className="float-left"><FontAwesomeIcon icon={faStar}className="ngoisao"/> </div>
                    <div className="float-left  ml-1"> <FontAwesomeIcon icon={faStar}className="ngoisao"/></div>
                    <div className="float-left  ml-1"><FontAwesomeIcon icon={faStar}className="ngoisao"/> </div>
                    <div className="float-left  ml-1"> <FontAwesomeIcon icon={faStar}className="ngoisao"/></div>
                    <div className="float-left  ml-1"> <FontAwesomeIcon icon={faStar}className="ngoisao"/> </div>
                    <small className="text-secondary ml-2">112332</small>

                </div>
              </div>
              <small className="diadiem" >Hà Nội</small>
              
            </div>
          
          </div>

          <div className="col-md-3">
            
            <div className="motsanpham">
              <div className="layer">

              </div>
              <div className="layerbox">
      
              </div>
              <div className="controls">
                <button><FontAwesomeIcon icon={faHeart} className="iconcontrol"/></button>
                <button><FontAwesomeIcon icon={faInfo} className="iconcontrol"/></button>
                <button><FontAwesomeIcon icon={faCartPlus} className="iconcontrol"/></button>
              </div>
              <img className="banner" src={sale2}></img>
              <img className="anhsp" src={sp} style={{width:'100%'}}></img>
              <div className="tieude">Giày vải nam nữ</div>
              
              <div className="danhmucphanduoi">
                <span><strong className="gia2">200.000đ</strong></span>
                <br></br>
                <del className="text-muted">243.000đ</del>
                <span className="badge badge-success ml-2">-35%</span>
                <div >
                    <div className="float-left"><FontAwesomeIcon icon={faStar}className="ngoisao"/> </div>
                    <div className="float-left  ml-1"> <FontAwesomeIcon icon={faStar}className="ngoisao"/></div>
                    <div className="float-left  ml-1"><FontAwesomeIcon icon={faStar}className="ngoisao"/> </div>
                    <div className="float-left  ml-1"> <FontAwesomeIcon icon={faStar}className="ngoisao"/></div>
                    <div className="float-left  ml-1"> <FontAwesomeIcon icon={faStar}className="ngoisao"/> </div>
                    <small className="text-secondary ml-2">112332</small>

                </div>
              </div>
              <small className="diadiem" >Hà Nội</small>
              
            </div>
          
          </div>

          <div className="col-md-3">
            
            <div className="motsanpham">
              <div className="layer">

              </div>
              <div className="layerbox">
      
              </div>
              <div className="controls">
                <button><FontAwesomeIcon icon={faHeart} className="iconcontrol"/></button>
                <button><FontAwesomeIcon icon={faInfo} className="iconcontrol"/></button>
                <button><FontAwesomeIcon icon={faCartPlus} className="iconcontrol"/></button>
              </div>
              <img className="banner" src={sale2}></img>
              <img className="anhsp" src={sp} style={{width:'100%'}}></img>
              <div className="tieude">Giày vải nam nữ</div>
              
              <div className="danhmucphanduoi">
                <span><strong className="gia2">200.000đ</strong></span>
                <br></br>
                <del className="text-muted">243.000đ</del>
                <span className="badge badge-success ml-2">-35%</span>
                <div >
                    <div className="float-left"><FontAwesomeIcon icon={faStar}className="ngoisao"/> </div>
                    <div className="float-left  ml-1"> <FontAwesomeIcon icon={faStar}className="ngoisao"/></div>
                    <div className="float-left  ml-1"><FontAwesomeIcon icon={faStar}className="ngoisao"/> </div>
                    <div className="float-left  ml-1"> <FontAwesomeIcon icon={faStar}className="ngoisao"/></div>
                    <div className="float-left  ml-1"> <FontAwesomeIcon icon={faStar}className="ngoisao"/> </div>
                    <small className="text-secondary ml-2">112332</small>

                </div>
              </div>
              <small className="diadiem" >Hà Nội</small>
              
            </div>
          
          </div>

        </div>

        
      </div>
    </div>
    ;

    return <div class="container">
      <div class = "row">
      <div class = "col-md-4" >
        {danhmuc}
      </div>
      <div class = "col-md-8" >
        {bentraidanhmuc}
      </div>
      </div>
      <br/>
      {flashdeal}
      <br/>
      {sanphamphobien}
    </div>
  }
}

export default Home;
