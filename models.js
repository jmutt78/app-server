"use strict";

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const ideaSchema = mongoose.Schema({
  idea: { type: String },
  description: { description: String },
  questions: {
    question1: { type: String },
    question2: { type: String },
    question3: { type: String },
    question4: { type: String },
    question5: { type: String },
    question6: { type: String }
  }
});

ideaSchema.methods.serialize = function() {
  return {
    id: this._id,
    idea: this.idea,
    description: this.description,
    questions: {
      question1: this.question1,
      question2: this.question2,
      question3: this.question3,
      question4: this.question4,
      question5: this.question5,
      question6: this.question6
    }
  };
};

const Idea = mongoose.model("Idea", ideaSchema);

module.exports = { Idea };
