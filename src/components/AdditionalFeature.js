import React, {useState} from 'react';
import { connect } from 'react-redux';

import {buyItem} from "../actions"

const AdditionalFeature = props => {


  let addFeature = e =>{
    e.preventDefault();
    console.log("Test",props.feature.price, props.feature.name);
    props.buyItem(props.feature.price, props.feature.name);
  }

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={addFeature}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state =>{
  return {
    data: state.car.feature

  }
}

export default connect(
  mapStateToProps, 
  {buyItem}
  )(AdditionalFeature);
