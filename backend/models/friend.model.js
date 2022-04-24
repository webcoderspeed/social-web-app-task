import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const { ObjectId } = Schema.Types;

const friendSchema = new Schema(
  {
    userId: {
      type: ObjectId,
      ref: 'User',
      required: true,
    },
    friendId: {
      type: ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Friend = model('Friend', friendSchema);

export default Friend;
