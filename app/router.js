import EmberRouter from '@ember/routing/router';
import config from 'grocery-store/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('about');
  this.route('contact', { path: '/getting-in-touch' });
  this.route('store', { path: '/posts/:post_id' });
  this.route('create', { path: '/posts/newpost' });
  // this.route('grocery');

  this.route('edit', { path: '/posts/:id/edit' });
});
