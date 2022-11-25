import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
export default class EditController extends Controller {
    @service store;
    @action
    async editPost(event){
        event.preventDefault();
        let edit=await this.model;
        edit.save().then (()=>{
            this.transitionToRoute('index');
        });
}
}
