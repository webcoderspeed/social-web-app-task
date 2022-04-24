import cors from 'cors';

export const allowCors = (app) => {
  // handling CORS ERROR
  app.use(
    cors({
      origin: '*',
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
    })
  );
};
