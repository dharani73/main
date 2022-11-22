import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
export default class StoreController extends Controller {
 @action deletePost(){
  alert('sure want to delete this?');
 }
}

