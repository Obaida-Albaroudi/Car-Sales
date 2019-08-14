import React, {useState} from 'react';
import { connect } from 'react-redux';
import {removeFeature} from "../actions"

const AddedFeature = props => {

  console.log("REEEEEMOve", props.store)



  let Remove = e =>{
    e.preventDefault();
    console.log("Test",props.feature.name);
    props.removeFeature( props.store.map(item =>{if(item.name===props.feature)
      console.log("priccce", item.price)}),props.feature);
  }

  
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={Remove}>X</button>
      {props.feature}
    </li>
  );
};

const mapStateToProps = state =>{
  return {
    store: state.store

  }
}

export default connect(
  mapStateToProps, 
  {removeFeature}
  )(AddedFeature);


