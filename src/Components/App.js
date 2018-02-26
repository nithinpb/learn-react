import React, { Component, Fragment, Grid } from 'react';
import { Header, Footer } from './Layouts';
import Questionnaire from './Questionnaire';
import { categories, questions } from '../store.js';

export default class extends Component {
  state = {
    questions
  };

  getQuestionsByCategories() {
    return Object.entries(
      this.state.questions.reduce((questions, question) => {
        const { category } = question;
        questions[category] = questions[category]
          ? [...questions[category]]
          : [question];
        return questions;
      }, {})
    );
  }

  render() {
    const questions = this.getQuestionsByCategories();
    return (
      <Fragment>
        <Header />
        <Questionnaire questions={questions} />
        <Footer categories={categories} />
      </Fragment>
    );
  }
}
