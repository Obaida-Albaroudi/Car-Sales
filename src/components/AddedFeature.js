import React, {useState} from 'react';
import { connect } from 'react-redux';
import {removeFeature} from "../actions"

const AddedFeature = props => {

  console.log(props.store)

  let price = (ex) =>{
    props.store.map(item =>{if(item.name===ex){
      return item.price
      }})

  }

  let Remove = e =>{
    e.preventDefault();
    props.removeFeature( price(props.feature) ,props.feature);
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


