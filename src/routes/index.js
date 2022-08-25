const newsRouter = require('./News');
const courseRouter = require('./courses');
const siteRouter = require('./site');
const meRouter = require('./me');

function routes(app) {
  app.use('/news', newsRouter);
  app.use('/courses', courseRouter)
  app.use('/me', meRouter)
  app.use('/', siteRouter);
}

module.exports = routes;
