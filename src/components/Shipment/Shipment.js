import React, { Component } from 'react'
import Package from './Package'
import PropTypes from 'prop-types';

export class Shipment extends Component {
    render() {
        return (
           this.props.packages.map((pack) =>(
               <Package key={pack.id} package={pack}/>
           ))
        )
    }
}

Shipment.protoTypes = {
    packages: PropTypes.array.isRequired
}

export default Shipment
