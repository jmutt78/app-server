"use strict";

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const questionSchema = mongoose.Schema({
  question1: { type: String },
  question2: { type: String },
  question3: { type: String },
  question4: { type: String },
  question5: { type: String },
  question6: { type: String }
});

const ideaSchema = mongoose.Schema({
  idea: { type: String },
  userId: { type: String },
  description: { type: String },
  questions: [questionSchema]
});

ideaSchema.methods.serialize = function() {
  return {
    id: this._id,
    userId: this.userId,
    idea: this.idea,
    description: this.description,
    questions: this.questions
  };
};

const Idea = mongoose.model("Idea", ideaSchema);

module.exports = { Idea };
