import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
export default class StoreComponent extends Component {
   @service store;
@action
async deletePost(id) {
  let confirmed = window.confirm('Are you sure you want to delete the post?');
  if (confirmed) {
    let posts = await this.store.peekRecord('post', id);
    console.log(posts);
    posts.destroyRecord();
  }
}
}

