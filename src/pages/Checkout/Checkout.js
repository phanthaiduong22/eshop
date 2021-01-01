import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import "./Checkout.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShippingFast, faAddressCard, faMapMarkedAlt, faMobileAlt, faAt
, faMoneyBillAlt, faCreditCard, faWallet} from '@fortawesome/free-solid-svg-icons'


class Checkout extends Component {
  state = 
  {
    packages: 
    [
      {
        id: 1,
        agencyName: "Giao hang nhanh",
        arriveDate: "22/5/2020",
        price: 20000,
        productList: [
          {
            id: 1,
            name: "May tinh bang Air IPad",
            size: 1,
            price: 2000000
          },
          {
            id: 2,
            name: "May tinh bang Air IPad2",
            size: 1,
            price: 2000000
          }
        ]
      },
      {
        id: 2,
        agencyName: "Giao Hang tiet kiem",
        arriveDate: "22/5/2020",
        price: 200000,
        productList: [
          {
            id: 1,
            name: "May tinh bang Air IPad",
            size: 3,
            price: 2000000
          },
          {
            id: 2,
            name: "May tinh bang Air IPad2",
            size: 4,
            price: 2000000
          }
        ]
      }
    ],
    reciver:{
      name: "Nguyen Hoang Thai Duong",
      address: "24, Phan Uyen, Phuong 4, Quan 10, TP. HCM",
      phone: "0123456789",
      email: "rgwrgjrhw@gmail.com"
    }
  }



  render() {
    const {packages, reciver} = this.state
    let allProduct = []
    let sumShipPrice = 0
    let sumPrice = 0

    let packageComponet = packages.map((pack) => (
      sumShipPrice += pack.price,
      <div class="container ml-2 mr-1 my-2 border">
            <div class="d-flex flex-row">
                <div class="pt-1 pb-1 pl-2">
                    <FontAwesomeIcon icon={faShippingFast} size="lg" color="green"/>
                </div>
                <div class="pt-1 pb-1 pl-1">
                    <h5>{pack.agencyName}</h5>
                </div>
                <div class="pt-1 pb-1 pl-4">
                    <a href="url"><small>Thay doi</small></a>
                </div>
            </div>
            <div class="row ml-4" style={{ height: "20px"}}>
              <p class="font-weight-bold text-success">Nhan hang vao ngay {pack.arriveDate}</p>
            </div>
            <div class="row ml-4">
              <ul>
                  {pack.productList.map((product)=> (
                    allProduct.push(product),
                    <li>{product.size}x {product.name}</li>)
                  )}
              </ul>
            </div>

            <div class="row ml-4">
              <h6 className="mr-5">Phi:</h6>
              <h6>{pack.price}<small>d</small></h6>
            </div>
        </div>
    ))


    let reciverInfo = (
      <div class="container my-2"style={{backgroundColor:"white"}}>
        <div class="d-flex flex-row">
            <div class="p-2"><strong>Thong tin nguoi nhan</strong></div>
            <a href="url" class="ml-auto p-2"><small>Thay doi</small></a>
         </div>
        <div class="row ml-2 d-flex align-items-center">
          <FontAwesomeIcon icon={faAddressCard} size="1.5x" color="green"/>
          <h class="ml-2 align-middle">{reciver.name}</h>
        </div>
        <div class="row ml-2 d-flex align-items-center">
          <FontAwesomeIcon icon={faMapMarkedAlt} size="1.5x" color="green"/>
          <h class="ml-2 align-middle">{reciver.address}</h>
        </div>
        <div class="row ml-2 d-flex align-items-center pl-1">
          <FontAwesomeIcon icon={faMobileAlt} size="1.5x" color="green"/>
          <h class="ml-2 pl-1 align-middle">{reciver.phone}</h>
        </div>
        <div class="row ml-2 d-flex align-items-center">
          <FontAwesomeIcon icon={faAt} size="1.5x" color="green"/>
          <h class="ml-2 align-middle">{reciver.email}</h>
        </div>
      </div>
    )


    const checkForm = (
      <div class="row mt-3" style={{backgroundColor:"white"}}>
        <div class="col">
        <div class="form-check form-control-lg alight-middle">
          <input class="form-check-input" type="radio" name="paymentMethod" id="cash" value="cash"></input>
          <FontAwesomeIcon icon={faMoneyBillAlt} size="1.5x"/>
          <label class="form-check-label ml-2" for="cash">
            Thanh toan tien mat
          </label>
        </div>

        <div class="form-check form-control-lg">
          <input class="form-check-input" type="radio" name="paymentMethod" id="visa" value="visa"></input>
          <i class="fa fa-cc-visa" aria-hidden="true"></i>
          <label class="form-check-label pl-2" for="visa">
            Thanh toan bang the Visa, the tin dung quoc te
          </label>
        </div>   

          <div class="form-check form-control-lg">
          <input class="form-check-input" type="radio" name="paymentMethod" id="atm" value="atm"></input>
          <FontAwesomeIcon icon={faCreditCard} size="1.5x" />
          <label class="form-check-label pl-2" for="visa">
            Thanh toan the ATM the noi dia
          </label>
        </div>   

          <div class="form-check form-control-lg">
          <input class="form-check-input" type="radio" name="paymentMethod" id="momo" value="momo"></input>
          <FontAwesomeIcon icon={faWallet} size="1.5x" />
          <label class="form-check-label pl-2" for="visa">
            Thanh toan bang vi dien tu Momo
          </label>
        </div>                
        </div>
      </div>
    )

    const billCofirm = (
      <div class="col-md pb-2 mt-3" style={{backgroundColor:"white"}}>
        <div class="d-flex flex-row">
            <div class="p-2"><strong>Thong tin don hang</strong></div>
            <a href="url" class="ml-auto p-2"><small>Thay doi</small></a>
         </div>

         {allProduct.map((product)=> (
           sumPrice += product.price*product.size,
            <div class="d-flex bd-highlight mr-1">
              <div class="pl-4 flex-grow-1 bd-highlight"><small>{product.size}x {product.name}</small></div>
              <div class="bd-highlight"><small>{product.price*product.size} d</small></div>              
            </div>
              )
          )}

          <div class="d-flex bd-highlight ml-4 mt-3 mb-1 mr-2">
            <div class="flex-grow-1 bd-highlight">Phi san pham</div>
            <div class="bd-highlight"><strong>{sumPrice}</strong> d</div>
          </div>
          <div class="d-flex bd-highlight ml-4 mt-1 mr-2">
            <div class="flex-grow-1 bd-highlight">Phi van chuyen</div>
            <div class="bd-highlight"><strong>{sumShipPrice}</strong> d</div>
          </div>

          <div class="input-group mt-2 ml-4" style={{width:"90%"}}>
            <input type="text" class="form-control" placeholder="Ma giam gia" aria-label="Ma giam gia" aria-describedby="basic-addon2"></input>
            <div class="input-group-append">
              <button class="btn btn-success" type="button">Ap dung</button>
            </div>
          </div>

          <h4 class="mt-3">Thanh tien</h4>
          <h3 class="text-center" style={{color:"red", fontSize:"30px", fontWeight:"bold"}}>{sumShipPrice+sumPrice} d</h3>
          
          <div class="col text-center mt-2">
            <button type="button" class="btn btn-danger btn-lg" style={{width:"70%"}}>Thanh toan</button>
          </div>
          
      </div>
    )

    return (
      <div className="container-fluid"  style={{backgroundColor:"#d9d9d9"}}>
        <div class="row">
          <div class="col-md-7 m-3 ml-5">
            <div class="row pl-2 pt-2" style={{backgroundColor:"white"}}>
              <h4><strong>Chon hinh thuc giao hang</strong></h4>
              {packageComponet}
            </div>
            {checkForm}

          </div>

          <div class="col-md pt-2">
              {reciverInfo}
              {billCofirm}
          </div>
        </div>
      </div>
    )
  }
}

export default Checkout;
