const query = {
  async get(model, data = {}) {
    try {
      return await model.find(data);
    } catch (err) {
      throw new Error(err.message);
    }
  },
};

export default query;
