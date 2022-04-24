import asyncHandler from 'express-async-handler';
import * as userService from '../services/user.service.js';

/**
 * @description  Register a new user
 * @route POST /api/v1/users
 * @access Public
 */
export const signUp = asyncHandler(async (req, res, next) => {
  try {
    const data = {
      body: req.body,
      response: res,
    };

    const user = await userService.signUp(data);

    return res.status(201).json({
      status: true,
      data: user,
    });
  } catch (error) {
    next(error);
  }
});

/**
 * @description  Login a user
 * @route POST /api/v1/users/login
 * @access Public
 */

export const signIn = asyncHandler(async (req, res, next) => {
  try {
    const data = {
      body: req.body,
      response: res,
    };

    const user = await userService.signIn(data);

    return res.status(200).json({
      status: true,
      data: user,
    });
  } catch (error) {
    next(error);
  }
});

/**
 * @description  get my profile
 * @route GET /api/v1/users/profile
 * @access Private
 */

export const getMyProfile = asyncHandler(async (req, res, next) => {
  try {
    const { _id } = req.user ?? {};

    const data = {
      userId: _id,
      response: res,
    };

    const user = await userService.getMyProfile(data);

    return res.status(200).json({
      status: true,
      data: user,
    });
  } catch (error) {
    next(error);
  }
});

/**
 * @description  get all users
 * @route GET /api/v1/users
 * @access Private
 */

export const getAllUsers = asyncHandler(async (req, res, next) => {
  const { _id } = req.user ?? {};

  try {
    const data = {
      userId: _id,
      response: res,
    };

    const users = await userService.getAllUsers(data);

    return res.status(200).json({
      status: true,
      data: users,
    });
  } catch (error) {
    next(error);
  }
});
