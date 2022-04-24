import joi from 'joi';

export const addFriend = (req, res, next) => {
  const schema = joi.object({
    friendId: joi.string().required(),
  });

  const { error } = schema.validate(req.body);

  if (error) next(error);

  next();
};
