import {
  faCcJcb,
  faCcMastercard,
  faCcVisa,
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faMoneyCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
class Footer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <footer class="bg-light text-lg-start" style={{ marginTop: "7em" }}>
        <div class="container p-4">
          <div class="row">
            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h6 class="text-uppercase">CHĂM SÓC KHÁCH HÀNG</h6>
              <small>
                <ul class="list-unstyled mb-0">
                  <li>
                    <a href="#!" class="text-dark">
                      Câu hỏi thường gặp
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-dark">
                      Gửi yêu cầu hỗ trợ
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-dark">
                      Hướng dẫn mua hàng
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-dark">
                      Hướng dẫn bán hàng
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-dark">
                      Thanh toán
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-dark">
                      Vận chuyển
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-dark">
                      Trả hàng và hoàn tiền
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-dark">
                      Chính sách bảo hành
                    </a>
                  </li>
                </ul>
              </small>
            </div>
            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h6 class="text-uppercase">Về EShop</h6>
<small>
              <ul class="list-unstyled mb-0">
                <li>
                  <a href="#!" class="text-dark">
                    Giới thiệu
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-dark">
                    Tuyển dụng
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-dark">
                    Điều khoản Eshop
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-dark">
                    Chính sách bảo mật
                  </a>
                </li>
              </ul></small>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h6 className="text-uppercase mb-0">Thanh toán</h6>
              <div className="row">
                <div className="col-2">
                  <FontAwesomeIcon icon={faCcVisa} size="2x" />
                </div>
                <div className="col-2">
                  <FontAwesomeIcon icon={faCcMastercard} size="2x" />
                </div>
                <div className="col-2">
                  <FontAwesomeIcon icon={faCcJcb} size="2x" />
                </div>
                <div className="col-2">
                  <FontAwesomeIcon icon={faMoneyCheck} size="2x" />
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h6 class="text-uppercase mb-0">Theo dõi chúng tôi trên</h6>

              <ul class="list-unstyled">
                <li>
                  <a href="#!" class="text-dark">
                    <FontAwesomeIcon icon={faFacebook} size="lg" color="blue" />{" "}
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-dark">
                    <FontAwesomeIcon
                      icon={faInstagram}
                      size="lg"
                      color="purple"
                    />{" "}
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-dark">
                    <FontAwesomeIcon icon={faYoutube} size="lg" color="red" />{" "}
                    Youtube
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div 
          className="p-3"
          style={{ "background-color": " rgba(0, 0, 0, 0.2)" }}
        >
            <div className="container">© 2021 Eshop - Bản quyền của Công ty Eshop.</div>
          
        </div>
      </footer>
    );
  }
}
export default Footer;
