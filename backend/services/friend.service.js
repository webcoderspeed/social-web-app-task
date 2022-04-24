import User from '../models/user.model.js';
import Friend from '../models/friend.model.js';
import mongoose from 'mongoose';

const { ObjectId } = mongoose.Types;

export const addFriend = async ({ body, response }) => {
  try {
    const { userId, friendId } = body;

    //  create a new friend for login user
    const friend = await Friend.create({
      userId,
      friendId,
    });

    //  add the friend to the user friends list
    await Friend.create({
      userId: friendId,
      friendId: userId,
    });

    return friend;
  } catch (error) {
    throw error;
  }
};

export const getMyFriends = async ({ userId, response }) => {
  try {
    const query = [
      {
        $match: {
          userId: ObjectId(userId),
        },
      },
      {
        $lookup: {
          from: 'users',
          localField: 'friendId',
          foreignField: '_id',
          as: 'friend',
        },
      },
      {
        $unwind: {
          path: '$friend',
        },
      },
      {
        $project: {
          _id: 1,
          friend: {
            _id: 1,
            name: 1,
            email: 1,
            createdAt: 1,
            updatedAt: 1,
          },
        },
      },
    ];

    const friends = await Friend.aggregate(query);

    return friends;
  } catch (error) {
    throw error;
  }
};

export const getFriendOfUser = async ({ userId, response }) => {
  try {
    const query = [
      {
        $match: {
          userId: ObjectId(userId),
        },
      },
      {
        $lookup: {
          from: 'users',
          localField: 'friendId',
          foreignField: '_id',
          as: 'friend',
        },
      },
      {
        $unwind: {
          path: '$friend',
        },
      },
      {
        $project: {
          _id: 1,
          friend: {
            _id: 1,
            name: 1,
            email: 1,
            createdAt: 1,
            updatedAt: 1,
          },
        },
      },
    ];

    const friends = await Friend.aggregate(query);

    return friends;
  } catch (error) {
    throw error;
  }
};

export const removeFriend = async ({ userId, response }) => {
  try {
    const friend = await Friend.findOne({
      userId,
    });

    if (!friend) {
      response.status(404);
      throw new Error('Friend not found');
    }

    await Friend.deleteMany({
      $or: [
        {
          userId: ObjectId(friend.userId),
          friendId: ObjectId(friend.friendId),
        },
        {
          userId: ObjectId(friend.friendId),
          friendId: ObjectId(friend.userId),
        },
      ],
    });
  } catch (error) {
    throw error;
  }
};
