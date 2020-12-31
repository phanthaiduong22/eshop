import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShippingFast} from '@fortawesome/free-solid-svg-icons'


export class Package extends Component {

    render() {
        const {id, agencyName, arriveDate} = this.props.package;
        return (
            <div>
                <div class="container ml-3 my-2 border">
                    <div class="row align-bottom">
                        <div class="col-md-1 border align-bottom">
                            <FontAwesomeIcon icon={faShippingFast} size="1.5x" color="green"/>
                        </div>
                        <div class="col-md-7 border align-bottom">
                            <h5>{agencyName}</h5>
                        </div>
                        <div class="col-md border align-bottom">
                            <a href="url"><small>Thay doi</small></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Package.protoTypes = {
    package: PropTypes.array.isRequired
}

export default Package
