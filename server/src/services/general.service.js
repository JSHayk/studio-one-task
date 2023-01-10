import fs from "fs";

const generalService = {
  checkExist(checkValue, key, failedMs, successMs) {
    if (!checkValue)
      return {
        sc: 404,
        ms: failedMs,
        isExist: false,
      };

    return {
      sc: 200,
      ms: successMs,
      data: {
        [key]: checkValue,
      },
      isExist: true,
    };
  },
  checkExistFile(path) {
    try {
      return fs.existsSync(path);
    } catch (err) {
      throw new Error(err.message);
    }
  },
};

export default generalService;
