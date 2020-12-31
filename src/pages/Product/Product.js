import React, { Component } from "react";
import  './Product.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faTruck, faDollarSign, faTimes, faMinus, faMedal, faPlus, faCartPlus, faHeart } from '@fortawesome/free-solid-svg-icons'
import { faCloudversify, faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
import im1 from './im1.jpg'
import im2 from './img2.jpg'
import im3 from './img3.jpg'
import home from './home.png'
import avatar from './avata.png'
import Carousel from 'react-bootstrap/Carousel' 


class Product extends Component {

    constructor(props){
        super(props);

        this.state = {
            index: 1,  //index which u want to display first
            direction: null, //direction of the carousel..u need to set it to either 'next' or 'prev' based on user click
            // nextIcon: <span className="glyphicon glyphicon-glass"></span>,
            // prevIcon: <span className="glyphicon glyphicon-glass"></span>
        }
    };

    handleSelect = (selectedIndex, e) => {
        this.setState({
            index: selectedIndex,
            direction: e.direction
        });
    }
  render() {
    let nextIcon = <span aria-hidden="true" className="carousel-control-next-icon bg-dark " />
    let prevIcon = <span aria-hidden="true" className="carousel-control-prev-icon bg-dark" />
    let thongtinchung = 
    <div className="card">
    <div className="card-body">
        <div className="row">
            <div className="col-md-6 d-flex align-items-center ">
                <Carousel className="w-100"  nextIcon ={nextIcon} prevIcon={prevIcon}  index={this.state.index} direction={this.state.direction} onSelect={this.handleSelect} interval={null}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={im1}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={im2}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={im3}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
               
            </div>

            <div className="col-md-6 info">
                <div className="card">
                    <div className="card-body">
                        <h3>Ổ cứng SSD King ton A400 120GB hàng chính hãng</h3>
                        <div >
                                <div className="float-left"><FontAwesomeIcon icon={faStar} className="ngoisao" /></div>
                                <div className="float-left  ml-1"> <FontAwesomeIcon icon={faStar} className="ngoisao"/> </div>
                                <div className="float-left  ml-1"> <FontAwesomeIcon icon={faStar} className="ngoisao"/> </div>
                                <div className="float-left  ml-1"> <FontAwesomeIcon icon={faStar} className="ngoisao"/> </div>
                                <div className="float-left  ml-1"><FontAwesomeIcon icon={faStar} /> </div>
                        </div>
                        <p className=" ml-1" style={{fontSize: '14px'}}>1,244 lượt đánh giá</p>
                        <div className="rank d-flex align-items-center">
                            <FontAwesomeIcon icon={faMedal} style={{color:'orange', fontSize:'30px'}} />
                            <small className="d-inline-block">Top 1 bán chạy nhất trong thế giới di động</small>
                        </div>
                        <br/>
                        <div className="card text-white bg-danger">
                            <div className="card-body">
                                <p className="h4">499.000đ</p>
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
                            <div className="btn btn-outline-secondary" type="button"> <FontAwesomeIcon icon={faMinus}  /></div>
                            <span className="h5" style={{padding:'5px'}}>3</span>
                            <div className="btn btn-outline-secondary" type="button"><FontAwesomeIcon icon={faPlus} /></div>
                            
                        </div>
                       
                        <div className="mt-2">
                            <div className="btn btn-outline-warning mr-2" type = "button"> Mua ngay</div>
                            <div className="btn btn-outline-warning mr-2" type = "button">Thêm vào giỏ hàng<FontAwesomeIcon icon={faCartPlus}/></div>
                            <div className="btn btn-outline-danger" type = "button">346<FontAwesomeIcon icon={faHeart}/></div>
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
                            <div className="btn btn-warning mr-2" type = "button">Thăm shop</div>
                            <div className="btn btn-danger mr-2" type = "button">Chat <FontAwesomeIcon icon={faFacebookMessenger}/></div>
                            <div className="btn btn-info" type = "button">Theo dõi<FontAwesomeIcon icon={faCloudversify}/></div>
                        </div>
                    </div>
                </div>

                <div className="card-deck col-md-6">
                    <div className="col-md-6 card text-white bg-danger">
                        <div className="card-body">
                            <div>Tỷ lệ : <span className="badge badge-success">95%</span></div>
                            <div>Đánh giá : <span className="badge badge-success">93%</span></div>
                        </div>
                    </div>
    
                    <div className="col-md-6 card text-white bg-danger">
                        <div className="card-body">
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
      <p style ={{ textAlign:"justify", }}>Có bao giờ bạn tự hỏi ổ SSD thương mại nhanh nhất trên thị trường là model nào chưa? Tốc độ đọc và ghi dữ liệu của nhà sản xuất đưa ra không phải là một tham số chính xác bởi vì chúng không phải là tốc đọc ghi mà chúng ta có thể sử dụng được trong thực tế hằng ngày. Cách duy nhất để đánh giá các ổ cứng là kiểm tra tốc độ hiệu quả trong vận hành thực tế. Vậy tốc độ hiệu quả là gì? Nó là thước đo tốc độ đọc ghi của ổ đĩa thể rắn theo từng khối lượng công việc tiêu biểu, và cách duy nhất để đo được điều này là thu thập càng nhiều dữ liệu sử dụng thực tế từ người dùng càng tốt, đây cũng là lý do tại sao trang web của UserBenchmark là trang web tốt nhất để kiểm tra tốc độ thực của SSD, HDD, USB, RAM, CPU và GPU.
          Có bao giờ bạn tự hỏi ổ SSD thương mại nhanh nhất trên thị trường là model nào chưa? Tốc độ đọc và ghi dữ liệu của nhà sản xuất đưa ra không phải là một tham số chính xác bởi vì chúng không phải là tốc đọc ghi mà chúng ta có thể sử dụng được trong thực tế hằng ngày. Cách duy nhất để đánh giá các ổ cứng là kiểm tra tốc độ hiệu quả trong vận hành thực tế. Vậy tốc độ hiệu quả là gì? Nó là thước đo tốc độ đọc ghi của ổ đĩa thể rắn theo từng khối lượng công việc tiêu biểu, và cách duy nhất để đo được điều này là thu thập càng nhiều dữ liệu sử dụng thực tế từ người dùng càng tốt, đây cũng là lý do tại sao trang web của UserBenchmark là trang web tốt nhất để kiểm tra tốc độ thực của SSD, HDD, USB, RAM, CPU và GPU.
          Có bao giờ bạn tự hỏi ổ SSD thương mại nhanh nhất trên thị trường là model nào chưa? Tốc độ đọc và ghi dữ liệu của nhà sản xuất đưa ra không phải là một tham số chính xác bởi vì chúng không phải là tốc đọc ghi mà chúng ta có thể sử dụng được trong thực tế hằng ngày. Cách duy nhất để đánh giá các ổ cứng là kiểm tra tốc độ hiệu quả trong vận hành thực tế. Vậy tốc độ hiệu quả là gì? Nó là thước đo tốc độ đọc ghi của ổ đĩa thể rắn theo từng khối lượng công việc tiêu biểu, và cách duy nhất để đo được điều này là thu thập càng nhiều dữ liệu sử dụng thực tế từ người dùng càng tốt, đây cũng là lý do tại sao trang web của UserBenchmark là trang web tốt nhất để kiểm tra tốc độ thực của SSD, HDD, USB, RAM, CPU và GPU.
      </p>
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
                <div style= {{fontWeight: 'bold', fontSize: '40px'}}>4.7</div>
                <div>235 Nhan xet</div>
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
}

export default Product;
