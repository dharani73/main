import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
// import { tracked } from '@glimmer/tracking';
export default class EditController extends Controller {
    @service store;

    // @tracked title;
    // @tracked homedelivery;
    // @tracked location;
    // @tracked rating;
    // @tracked stock;
    // @tracked image;
    @action
    async editPost(event){
        event.preventDefault();
        console.log("hi");
        let edit=await this.model;
        edit.save().then (()=>{
            this.transitionToRoute('index');
        });
}
}
