import React, {useState} from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import { connect } from 'react-redux';
import {buyItem, removeFeature} from "./actions"

const App = () => {




  return (
    <div className="boxes">
      <div className="box">
        <Header/>
        <AddedFeatures />
      </div>
      <div className="box">
        <AdditionalFeatures />
        <Total />
      </div>
    </div>
  );
};



export default (App);
