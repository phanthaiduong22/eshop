import React, { Component } from "react";
import Shipment from "../../components/Shipment/Shipment";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShippingFast, faAddressCard, faMapMarkedAlt, faMobileAlt, faAt} from '@fortawesome/free-solid-svg-icons'


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
            size: 1
          },
          {
            id: 2,
            name: "May tinh bang Air IPad2",
            size: 1
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
            size: 3
          },
          {
            id: 2,
            name: "May tinh bang Air IPad2",
            size: 4
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

    let packageComponet = packages.map((pack) => (
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
                    <li>{product.size}x {product.name}</li>                  )
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

    return (
      <div className="container-fluid"  style={{backgroundColor:"#d9d9d9"}}>
        <div class="row">
          <div class="col-md-7 m-3 ml-5 border" style={{backgroundColor:"white"}}>
            <div class="row pl-2 pt-2">
              <h4><strong>Chon hinh thuc giao hang</strong></h4>
            </div>
            {packageComponet}
          </div>
          <div class="col-md pt-2">
              {reciverInfo}
          </div>
        </div>
      </div>
    )
  }
}

export default Checkout;
