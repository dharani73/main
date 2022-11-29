import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
export default class EditController extends Controller {
  @service store;
  @service application;
  @tracked title;
  @tracked homedelivery;
  @tracked location;
  @tracked rating;
  @tracked stock;
  @tracked image;
  @action
  async editPost(event) {
    event.preventDefault();
    let result= await this.store.findRecord('post', this.model.id);
    console.log(this.model);
         result.title=this.model.title;
         result.homedelivery=this.model.homedelivery;
         result.location=this.model.location;
         result.rating=this.model.rating;
         result.stock=this.model.stock;
         result.image=this.model.image;
         result.save().then(()=> this.transitionToRoute('index'));
console.log(this.result);
    }
}

