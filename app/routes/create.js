import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
export default class CreateRoute extends Route {
    @service store;
    setupController(controller,model){
        this._super(controller,model);
        controller.set('title',"");
        controller.set('homedelivery',"");
        controller.set('location',"");
        controller.set('rating',"");
        controller.set('stock',"");
        controller.set('image',"");
    }
};
