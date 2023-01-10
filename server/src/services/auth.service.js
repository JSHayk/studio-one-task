import bcrypt from "bcrypt";
import tokenService from "./token.service.js";
import userDto from "../dtos/user.dto.js";
import query from "../db/query.js";
import userModel from "../db/models/user.model.js";
import invalidArguments from "../helpers/invalidArguments.js";

const authService = {
  async register(username, plainPassword) {
    invalidArguments([username, plainPassword]);
    try {
      const [user] = await query.get(userModel, { username });
      if (user)
        return {
          sc: 404,
          ms: "The username is already exist",
        };
      const hashedPassword = await bcrypt.hash(plainPassword, 10);
      const newUser = new userModel({
        username,
        password: hashedPassword,
      });
      await newUser.save();
      return {
        sc: 200,
        ms: "Success registered",
      };
    } catch (err) {
      throw new Error(err.message);
    }
  },
  async login(username, plainPassword) {
    invalidArguments([username, plainPassword]);
    try {
      const [user] = await query.get(userModel, { username });
      if (!user) return { sc: 404, ms: "There is no user with this username" };
      if (!(await bcrypt.compare(plainPassword, user.password)))
        return {
          sc: 404,
          ms: "Invalid password!",
        };
      const modifyedUser = userDto(user);
      const token = tokenService.generateToken(modifyedUser);
      return {
        sc: 200,
        data: {
          user: modifyedUser,
          token,
        },
      };
    } catch (err) {
      throw new Error(err.message);
    }
  },
};

export default authService;
