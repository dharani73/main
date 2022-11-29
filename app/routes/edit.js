import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
export default class EditRoute extends Route {
  @service store;
  @service application;
  async model(params) {
    console.log(params.id);
    let post = await this.store.findRecord('post', params.id);
    this.application.setPost(post);
    console.log(this.application.getPost());
    let result = this.application.getPost();
    return result;
  }
}
