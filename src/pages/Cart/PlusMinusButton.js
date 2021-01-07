import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import "./PlusMinusButton.css";
class PlusMinusButton extends Component{
    constructor(props) {
        super();};

        render(){
            return(<div class="input-group" style={{maxWidth:'10em'}}>
            <span class="input-group-btn">
              <button
                type="button"
                class="btn btn-default btn-number"
                data-type="minus"
                onClick={this.props.onCountChange(this.props.item.product_id,this.props.item.counting-1)}
                disabled={this.props.item.counting==0?true:false}
              >
                <FontAwesomeIcon icon={faMinus} size="xs"/>
              </button>
            </span>
            <input
              type="number"
              class="form-control input-number"
              value={this.props.item.counting}
              onChange={this.props.onCountChange(this.props.item.product_id)}
            />
            <span class="input-group-btn">
              <button
                type="button"
                class="btn btn-default btn-number"
                data-type="plus"
                onClick={this.props.onCountChange(this.props.item.product_id,this.props.item.counting+1)}
              >
                <FontAwesomeIcon icon={faPlus} size="xs"/>
              </button>
            </span>
          </div>
          )
        }
}
export default PlusMinusButton;
