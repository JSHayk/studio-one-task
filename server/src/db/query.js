import invalidArguments from "../helpers/invalidArguments.js";

const query = {
  async get(model, data = {}) {
    invalidArguments([model]);
    try {
      return await model.find(data);
    } catch (err) {
      throw new Error(err.message);
    }
  },
  async add(model, data) {
    invalidArguments([model, data])
    try {
      const newModel = new model(data);
      await newModel.save();
    } catch (err) {
      throw new Error(err.message);
    }
  }
};

export default query;
