import React, { Component } from "react";
import  './Product.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faTruck, faDollarSign, faTimes, faMinus, faMedal, faPlus, faCartPlus, faHeart } from '@fortawesome/free-solid-svg-icons'
import { faCloudversify, faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
import home from './home.png'
import avatar from './avata.png'
import Carousel from 'react-bootstrap/Carousel' 
import queryString from 'query-string'
import callAPI from "../../utils/apiCaller";

class Product extends Component {

    constructor(props){
        super(props);

        this.state = {
            index: 1,  //index which u want to display first
            direction: null, //direction of the carousel..u need to set it to either 'next' or 'prev' based on user click
            nextIcon: <span className="glyphicon glyphicon-glass"></span>,
            prevIcon: <span className="glyphicon glyphicon-glass"></span>,
            product : [{cat_id: 0,
                date_created: "",
                description: "",
                image_no: 0,
                image_url: "",
                origin: "",
                price: 0,
                product_id: 0,
                product_name: "",
                stock: 0,
                store_id: 0}],
            star : 0,
            totalEVaStar: 0,
            totalComment: 0,
            totalOrder : 0,
            comments : [{product_id:0,no:0,user_id:0,comment:"hieu map beo nhu heo",timestamp:"2014-01-14T10:33:34.000Z"}],
            
            // controll submit box
            context: "null",

            // for add cart
            username: "",
            password: "",
            soluong :1,

            // for following Shop

                
        
        }
    };
     async componentDidMount(){
        const parsed = queryString.parse(window.location.search);
        
        await callAPI("/product?action=getGeneralInfoProduct&id=" + parsed.id ,"GET", {
        })
          .then((response) => {
            this.setState({ 
                product : response.data,
            });
          })
          .catch((e) => {
            console.log(e.response);
        });

        await callAPI("/product?action=getStar&id=" + parsed.id ,"GET", {
        })
          .then((response) => {
            this.setState({ 
                star:response.data[0].avg ,
                totalEVaStar : response.data[0].sum,
            });
            console.log(response)
          })
          .catch((e) => {
            console.log(e.response);
          });

        

          await callAPI("/product?action=getTotalOrders&id=" + parsed.id ,"GET", {
        })
          .then((response) => {
            this.setState({ 
                // totalOrder : response.data[0],
            });
            console.log("response")

            console.log(response)
          })
          .catch((e) => {
            console.log(e.response);
        });

        await callAPI("/product?action=getComments&id=" + parsed.id ,"GET", {
            
        })
          .then((response) => {
            this.setState({ 
                comments: response.data,
            });
          })
          .catch((e) => {
            console.log(e.response);
          });

       
    }

    handleSelect = (selectedIndex, e) => {
        this.setState({
            index: selectedIndex,
            direction: e.direction
        });
    }

    autoCarouselItem(){
        let result = [];
        for (let i = 0; i< this.state.product.length; i++){
            
            result.push(
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={this.state.product[i].image_url}
                    alt="First slide"
                    style={{ borderRadius: '5px', width: '100%'}}
                />
            </Carousel.Item> 
            );
        }
        return result;
    }

    async upsoluong(){
        await this.setState(prevState => {
            return {soluong: prevState.soluong + 1}
         })
    }
    async downsoluong(){
        await this.setState(prevState => {
            return {soluong: prevState.soluong - 1}
         })
    }

    render() {  
        let nextIcon = <span aria-hidden="true" className="carousel-control-next-icon bg-dark " />
        let prevIcon = <span aria-hidden="true" className="carousel-control-prev-icon bg-dark" />
        let thongtinchung = 
        <div className="card" >
        <div className="card-body">
            <div className="row">
                <div className="col-md-6 d-flex align-items-center " style={{height: '80vh', overflow: 'hidden',}}>
                    <Carousel className="w-100"  nextIcon ={nextIcon} prevIcon={prevIcon}  index={this.state.index} direction={this.state.direction} onSelect={this.handleSelect} interval={null}>
                        {this.autoCarouselItem()}
                    </Carousel>
                
                </div>

                <div className="col-md-6 info">
                    <div className="card" >
                        <div className="card-body">
                            <h3>{this.state.product[0].product_name}</h3>
                            <div className="d-inline-block">
                                   
                                    <FontAwesomeIcon icon={faStar} className="ngoisao mr-1" />
                                    <FontAwesomeIcon icon={faStar} className="ngoisao mr-1" />
                                    <FontAwesomeIcon icon={faStar} className="ngoisao mr-1" />
                                    <FontAwesomeIcon icon={faStar} className="ngoisao mr-1" />
                                    <FontAwesomeIcon icon={faStar} className="ngoisao" />
                            </div>
                            <span className=" ml-1" style={{fontSize: '14px'}}>{this.state.totalEVaStar + " Lượt đánh giá"}</span>
                            <div className="rank d-flex align-items-center mt-1">
                                <FontAwesomeIcon icon={faMedal} style={{color:'orange', fontSize:'30px'}} />
                                <small className="d-inline-block">Top 1 bán chạy nhất trong thế giới di động</small>
                            </div>
                            <br/>
                            <div className="card text-white bg-danger">
                                <div className="card-body">
                                    <p className="h4">{this.state.product[0].price}</p>
                                    <span className="h6 mr-2"> <del>699.000đ</del></span>
                                    <span className="badge badge-info ">-90%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="card">
                        <div className="card-body">
                            <h6>Vận chuyển</h6>
                            <div className="ml-3 vanchuyen">
                                <div className="d-flex align-items-center"><FontAwesomeIcon icon={faTruck} className="ngoisao ngoisaomayman"  />Địa chỉ: Phạm Uyên, Phường 3, Quận 5, TP Hồ Chí Minh</div>
                                <div className="d-flex align-items-center"><FontAwesomeIcon icon={faDollarSign} className="ngoisao ngoisaomayman"  />Phí Vận chuyển: 20000</div>
                                <div className="d-flex align-items-center"><FontAwesomeIcon icon={faTimes} className="ngoisao ngoisaomayman" />Thời gian dự kiến: 20 ngày</div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h6>Số lượng</h6>
                            <div>
                                <div onClick={() => {this.downsoluong()}} className="btn btn-outline-secondary" type="button"> <FontAwesomeIcon icon={faMinus}  /></div>
                                <span className="h5" style={{padding:'5px'}}>{this.state.soluong}</span>
                                <div onClick={() => {this.upsoluong()}} className="btn btn-outline-secondary" type="button"><FontAwesomeIcon icon={faPlus} /></div>
                                
                            </div>
                        
                            <div className="mt-2">
                                <div onClick={() => { this.onMuaNgay()} } className="btn btn-outline-warning mr-2" type = "button"> Mua ngay</div>
                                <div onClick={() => {this.onClickaddCart(this.state.product[0].id, this.state.product[0].price,this.state.soluong )}} className="btn btn-outline-warning mr-2" type = "button">Thêm vào giỏ hàng<FontAwesomeIcon icon={faCartPlus}/></div>
                                <div className="btn btn-outline-danger" type = "button">{this.state.totalOrder}<FontAwesomeIcon icon={faHeart}/></div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        </div>

        let cuahang =
        <div>
        <div className="card">
                <div className="card-body">
                <div className="row shop">
                    <div className="col-md-6 d-flex align-items-end">
                        <img src={home} alt="" className="d-inline-block" style={{width: "100px", height: "100px"}}></img>
                        <div className="d-inline-block ml-2">
                            <h5>Hazala Store</h5>
                            <div className="shopaction">
                                <div className="btn btn-warning mr-2" type = "button">Xem shop</div>
                                <div className="btn btn-primary mr-2" type = "button">Chat <FontAwesomeIcon icon={faFacebookMessenger}/></div>
                                <div onClick={() => {this.onClickfollowShop()}} className="btn btn-danger" type = "button" style={{backgroundColor:'orangered'}}>Theo dõi<FontAwesomeIcon icon={faCloudversify}/></div>
                            </div>
                        </div>
                    </div>

                    <div className="card-deck col-md-6" >
                        <div className="col-md-6 card text-white bg-warning" >
                            <div className="card-body" style={{color: 'black'}}>
                                <div >Tỷ lệ : <span className="badge badge-success">95%</span></div>
                                <div>Đánh giá : <span className="badge badge-success">93%</span></div>
                            </div>
                        </div>
        
                        <div className="col-md-6 card text-white bg-warning">
                            <div className="card-body" style={{color: 'black'}}>
                                <div>Thời gian : <span className="badge badge-success">2h</span></div>
                                <div>Lượt theo dõi: <span className="badge badge-success">146</span></div>
                            </div>
                        </div> 
                    </div>

                
                </div>
            </div>
            
            </div>
        </div>;

        let chitietsanpham =
        <div className="card">
                <div className="card-body">
                    <h3 className="col-md-12">Chi tiết sản phẩm</h3>
                    <br/>
                    <div className="col-md-12  d-flex justify-content-center">
                        <table>
                            <tr>
                            <td>Thương hiệu</td>
                            <td>Smith</td>
                            </tr>
                            <tr>
                            <td>Kích thước</td>
                            <td>40 x 30 x 50</td>
                            </tr>
                            <tr>
                                <td>Dung lượng</td>
                                <td>120GB</td>
                            </tr>
                            <tr>
                                <td>Xuất xứ</td>
                                <td>Trung Quốc</td>
                            </tr>
                            <tr>
                                <td>Tốc độ đọc</td>
                                <td>200MB.s</td>
                            </tr>
                        </table>
                    </div>
                </div>
                
            </div>

        let motasanpham =
        <div className="card">
        <div className="card-body">
            <h3>Mô tả sản phẩm</h3>
        <p style ={{ textAlign:"justify", }}>{this.state.product.description}</p>
        </div>
        </div>

        let nhanxet =
        <div className="card">
        <div class = "card-body">
            <h3 className="">Nhận xét</h3>
            <div className="sao row justify-content-around align-items-center">
                
                <div className="nhanxettrai">
                    <div className="danhgia">
                        <div className="float-left"><FontAwesomeIcon icon={faStar}className="ngoisao"/> </div>
                        <div className="float-left  ml-1"> <FontAwesomeIcon icon={faStar}className="ngoisao"/></div>
                        <div className="float-left  ml-1"><FontAwesomeIcon icon={faStar}className="ngoisao"/> </div>
                        <div className="float-left  ml-1"> <FontAwesomeIcon icon={faStar}className="ngoisao"/></div>
                        <div className="float-left  ml-1"> <FontAwesomeIcon icon={faStar}className="ngoisao"/> </div>
                    </div>
                    <div style= {{fontWeight: 'bold', fontSize: '40px'}}>{parseInt(this.state.star)}</div>
                    <div>{this.state.comments.length} Nhan xet</div>
                </div>

                <div className="nhanxetphai" style={{width: '60%'}}>
                    <div className="progress mb-2">
                        <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div className="progress mb-2">
                        <div className="progress-bar" role="progressbar" style={{width: '20%', backgroundColor:'orangered'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div className="progress mb-2">
                        <div className="progress-bar" role="progressbar" style={{width: '40%', backgroundColor:'orangered'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div className="progress mb-2">
                        <div className="progress-bar" role="progressbar" style={{width: '70%', backgroundColor:'orangered'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div className="progress mb-2 ">
                        <div className="progress-bar" role="progressbar" style={{width: '34%', backgroundColor:'orangered'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div> 
            </div>
            
            <h6>Tất cả hình ảnh</h6>
            <div className="anh col-md-12" style={{height: '100px', backgroundColor: 'antiquewhite'}}>

            </div>
            <hr></hr>

            <div className="nhanxetnguoimua">
                <div className="d-flex align-items-center">
                    <img src={avatar} alt="" className="d-inline-block" style={{width: '8%'}}></img>
                    <div className="ml-2 d-inline-block">
                        <strong>Lê Phạm Huy</strong>
                        <p>Nhận xét vào ngày 07/04/2019</p>
                    </div>
                </div>
                <div className="danhgia">
                    <div className="float-left"><FontAwesomeIcon icon={faStar}className="ngoisao"/> </div>
                    <div className="float-left  ml-1"><FontAwesomeIcon icon={faStar}className="ngoisao"/> </div>
                    <div className="float-left  ml-1"><FontAwesomeIcon icon={faStar}className="ngoisao"/> </div>
                    <div className="float-left  ml-1"> <FontAwesomeIcon icon={faStar}className="ngoisao"/></div>
                    <div className="float-left  ml-1"><FontAwesomeIcon icon={faStar}className="ngoisao"/></div>
                </div>
                <br></br>
                <h5>Sản phẩm quá ổn với mức giá này</h5>
                <p>Có bao giờ bạn tự hỏi ổ SSD thương mại nhanh nhất trên thị trường là model nào chưa? Tốc độ đọc và ghi dữ liệu của nhà sản xuất đưa ra không phải là một tham số chính xác bởi vì chúng không phải là tốc đọc ghi mà chúng ta có thể sử dụng được trong thực tế hằng ngày. Cách duy nhất để đánh giá các ổ cứng là kiểm tra tốc độ hiệu quả trong vận hành thực tế. Vậy tốc độ hiệu quả là gì? Nó là thước đo tốc độ đọc ghi của ổ đĩa thể rắn theo từng khối lượng công việc tiêu biểu, và cách duy nhất để đo được điều này là thu thập càng nhiều dữ liệu sử dụng thực tế từ người dùng càng tốt, đây cũng là lý do tại sao trang web của UserBenchmark là trang web tốt nhất để kiểm tra tốc độ thực của SSD, HDD, USB, RAM, CPU và GPU.</p>
            </div>

            <div className="huuich">
                <div className="btn btn-info mr-2" type = "button">Bình luận</div>
                <div className="btn btn-info" type = "button">Báo cáo lạm dụng</div>
            </div>

            <div className="thanhchuyentrang float-right">
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                        <span className="sr-only">Previous</span>
                        </a>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                        <span className="sr-only">Next</span>
                        </a>
                    </li>
                    </ul>
                </nav>
            </div>
            

        </div>
    </div>

        return <div class = "container">
        <div className={`${this.state.hienthimodelBox ? "momoaoao hienra" : "momoaoao"}`} onClick={() => {this.toggleModalBox()}}></div>
        <div className={`${this.state.hienthimodelBox ? "modal_box modal_ef modal_show" : "modal_box modal_ef"}`}>
            
            
        <div className="modal_content card">
            <form className="card-body" onSubmit={this.onSubmitSignIn}>
              <div className="h4">Xin lỗi bạn phải đăng nhập để thực hiện thao tác này</div>
              <div className="form-group">
                <label for="exampleInputEmail1">Username</label>
                <input
                  onChange={this.onUsernameChange}
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter username"
                ></input>
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  onChange={this.onPasswordChange}
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                ></input>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>



        </div>

        {thongtinchung}
        <br/>
        {cuahang}
        <br/>
        {chitietsanpham}
        <br/>
        {motasanpham}
        <br/>
        {nhanxet}
        </div>
        
    }

    doFollowShop(){
        let token = localStorage.getItem("token");
        // gui request 
        let idStore = this.state.product[0].store_id;
        let action = "follow"
        callAPI("/shop", "POST", {
            action, idStore
       },token )
         .then((response) => {
           console.log(response);
           alert("Theo doi shop thanh cong" + 
           response
           );
         })
         .catch((e) => {
           console.log(e.response);
           this.toggleModalBox();
         });
    }

    // theo doi shop 
    onClickfollowShop(){

        this.setState({
            context: "followshop"
        })
        // check xem co toekn khong
        let token = localStorage.getItem("token");
        if(token==null){
            // show model box va bat dang nhap 
            this.toggleModalBox();
        }else{
            this.doFollowShop();
        }
    }

    // Mua Ngay 
    async onMuaNgay(){
    await this.setState({
        context: "muangay"
    })
     await this.onClickaddCart(this.state.product[0].id, this.state.product[0].price,this.state.soluong);
     await window.open("checkout" ,"_self");
    }

    // xu li cho cac su kien 
    addCartItem(){
        let idProduct = this.state.product[0].id;
        let price = this.state.product[0].price;
        let numPr = this.state.soluong;
        //todo: gia su  acesss vo han :v , cai nay su lys sau
        console.log(idProduct, price)
        let token = localStorage.getItem("token");
         callAPI("/cart?action=add", "POST", {
            idProduct, price, numPr
        },token )
          .then((response) => {
            console.log(response);
            alert("Thêm vào giỏ hàng thành công\n\nGiỏ hàng của bạn đang chứa " +
            response.data[0].tongsohang +
            " sản phầm\r\nTổng giá trị " +
            response.data[0].tonggiatri
            );
          })
          .catch((e) => {
            console.log(e.response);
            this.toggleModalBox();
          });
    }

    // hien thi modelBox
  toggleModalBox(){
    this.setState(prevState => ({ hienthimodelBox: !prevState.hienthimodelBox }));
  }

  async onClickaddCart(idProduct, price, numProduct){
    this.setState({
        context: "addCart"
    })
     // check xem co toekn khong
     let token = localStorage.getItem("token");
     if(token==null){
         
       // show model box va bat dang nhap 
       this.toggleModalBox();
             
     } else{
       // show cai model box them vao gio hang thanh cong
       this.addCartItem()
     }     
   }

   onSubmitSignIn = (event) => {
    event.preventDefault();
    //todo: hien thivong xoay o day
    let { username, password } = this.state;
    console.log(username, password)
    callAPI("/login", "POST", {
      username,
      password,
    })
      .then((response) => {
        // this.setState({ redirect: true });
        let token = response.data;
        localStorage.setItem("token", token);
        console.log("login thanh cong")
        // neu thanh cong thi tat nut xoay , tat model box
        this.toggleModalBox();

        if(this.state.context == "followshop"){
            this.doFollowShop();
        }else if(this.state.context == "addCart"){
            this.addCartItem();
        }
        
      })
      .catch((e) => {
        this.setState({ error: e.response.data });
      console.log(e.response);
      });
  };

  onUsernameChange = (event) => {
    this.setState({ username: event.target.value });
  };

  onPasswordChange = (event) => {
    this.setState({ password: event.target.value });

  };


}

export default Product;