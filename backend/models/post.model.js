import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const { ObjectId } = Schema.Types;

const visibilityTypes = ['public', 'private', 'friends'];

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    userId: {
      type: ObjectId,
      ref: 'User',
      required: true,
    },
    visibility: {
      type: String,
      enum: visibilityTypes,
      default: 'public',
    },
  },
  {
    timestamps: true,
  }
);

const Post = model('Post', postSchema);

export default Post;
