import React, { Component, Fragment, Grid } from 'react';
import { Header, Footer } from './Layouts';
import Questionnaire from './Questionnaire';

export default class extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Questionnaire />
        <Footer />
      </Fragment>
    );
  }
}
