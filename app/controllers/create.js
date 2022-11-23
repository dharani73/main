import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
export default class CreateController extends Controller {
    @service store;
    @action 
    async createPost(event){
    event.preventDefault();
    console.log(this.title,this.image);
    let post= await this.store.createRecord('post',{
        title:this.title,
        homedelivery:this.homedelivery,
        location:this.location,
        rating:this.rating,
        stock:this.stock,
        image:this.image,
    });
    post.save().then(()=>{
        this.transitionToRoute('index');
    });
    }
    };
    
