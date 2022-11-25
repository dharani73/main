import Route from '@ember/routing/route';
// import { inject as service } from '@ember/service';
export default class CreateRoute extends Route {
  // @service store;
  setupController(controller, model) {
    //   // super.setupController(controller, model);
    // super.setupController(controller, model);
    controller.set('title', '');
    controller.set('homedelivery', '');
    controller.set('location', '');
    controller.set('rating', '');
    controller.set('stock', '');
    controller.set('image', '');
  }
}
