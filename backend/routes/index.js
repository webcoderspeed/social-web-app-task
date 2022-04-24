import userRoutes from './user.routes.js';
import postRoutes from './post.routes.js';
import friendRoutes from './friend.routes.js';

const BASE_URL = process.env.BASE_URL ?? '/api/v1';

const routes = (app) => {
  // setting up the routes
  app.use((req, res) => res.send('Server is running'));

  // user routes
  app.use(`${BASE_URL}/users`, userRoutes);

  // post routes
  app.use(`${BASE_URL}/posts`, postRoutes);

  // friend routes
  app.use(`${BASE_URL}/friends`, friendRoutes);
};

export default routes;
