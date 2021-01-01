import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
class PlusMinusButton extends Component{
    constructor(props) {
        super();};

        render(){
            return(<div class="input-group">
            <span class="input-group-btn">
              <button
                type="button"
                class="btn btn-default btn-number"
                disabled="disabled"
                data-type="minus"
                data-field="quant[1]"
              >
                <FontAwesomeIcon icon={faMinus} />
              </button>
            </span>
            <input
              type="text"
              name="quant[1]"
              class="form-control input-number"
              value={this.props.count}
              min="1"
              max="10"
            />
            <span class="input-group-btn">
              <button
                type="button"
                class="btn btn-default btn-number"
                data-type="plus"
                data-field="quant[1]"
              >
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </span>
          </div>
          )
        }
}
export default PlusMinusButton;
