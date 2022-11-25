import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
export default class CreateController extends Controller {
  @service store;
  @tracked title;
  @tracked homedelivery;
  @tracked location;
  @tracked rating;
  @tracked stock;
  @tracked image;
  @action
  createPost(event) {
    event.preventDefault();
    console.log(this.title);
    let post = this.store.createRecord('post', {
      title: this.title,
      homedelivery: this.homedelivery,
      location: this.location,
      rating: this.rating,
      stock: this.stock,
      image: this.image,
    });
    post.save().then(() => {
      this.transitionToRoute('index');
    });
  }
}
