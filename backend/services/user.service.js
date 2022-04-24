import User from '../models/user.model.js';
import generateToken from '../utils/generateToken.js';

export const signUp = async ({ body, response }) => {
  try {
    const userExists = await User.findOne({ email: body.email });

    if (userExists) {
      response.status(400);
      throw new Error('User already exists');
    }

    const user = await User.create(body);

    const token = generateToken(user._id);

    return {
      _id: user._id,
      name: user.name,
      email: user.email,
      token,
    };
  } catch (error) {
    throw error;
  }
};

export const signIn = async ({ body, response }) => {
  try {
    const user = await User.findOne({ email: body.email });

    if (!user) {
      response.status(404);
      throw new Error(`User with email ${body.email} not found`);
    }

    const isMatch = await user.comparePassword(body.password);

    if (!isMatch) {
      response.status(401);
      throw new Error('Invalid password');
    }

    const token = generateToken(user._id);

    return {
      _id: user._id,
      name: user.name,
      email: user.email,
      token,
    };
  } catch (error) {
    throw error;
  }
};

export const getMyProfile = async ({ userId, response }) => {
  try {
    const user = await User.findById(userId);

    if (!user) {
      response.status(404);
      throw new Error(`User not found`);
    }

    return {
      _id: user._id,
      name: user.name,
      email: user.email,
    };
  } catch (error) {
    throw error;
  }
};
