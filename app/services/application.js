import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
export default class ApplicationService extends Service {
  @tracked post;
  getPost() {
    return this.post;
  }
  setPost(post) {
    let { id, title, homedelivery, location, rating, stock, image } = post;

    console.log(title + homedelivery + location + rating + stock + image);
    this.post = { title, homedelivery, location, rating, stock, image, id };
  }
}
