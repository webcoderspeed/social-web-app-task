import userRoutes from './user.routes.js';
import postRoutes from './post.routes.js';

const BASE_URL = process.env.BASE_URL ?? '/api/v1';

const routes = (app) => {
  // setting up the routes
  app.get((req, res) => res.send('Server is running'));

  // user routes
  app.use(`${BASE_URL}/users`, userRoutes);

  // post routes
  app.use(`${BASE_URL}/posts`, postRoutes);
};

export default routes;
