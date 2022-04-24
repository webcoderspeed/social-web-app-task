import joi from 'joi';

const visibilityTypes = ['public', 'private', 'friends'];

export const createPost = (req, res, next) => {
  const schema = joi.object({
    title: joi.string().required(),
    content: joi.string().required(),
    visibility: joi.string().valid(...visibilityTypes),
  });

  const { error } = schema.validate(req.body);

  if (error) next(error);

  next();
};
