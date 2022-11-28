import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

// const GROCERY_CATEGORIES = ['Vegetables', 'Fruits', 'Cereals'];

export default class StoreRoute extends Route {
  @service store;

  // if (GROCERY_CATEGORIES.includes(attributes.category)) {
  //   type = 'Grocery';
  // } else {
  //   type = 'All';
  // }

  async model(params) {
    return await this.store.findRecord('post', params.id);
  }
}


{/* <label for="title">title</label>
       <Input @id="title" @type="text" @value={{model.title}} />
    </div>
    <div>
        <label for="homedelivery">homedelivery</label>
        <Input @id="homedelivery" @type="text" @value={{model.homedelivery}} />
    </div>
    <div>
        <label for="location">location</label>
        <Input @id="location"  @type="text" @value={{model.location}} />
    </div>
    <div>
        <label for="rating">rating</label>
       <Input @id="rating" @type="text" @value={{model.rating}} />
    </div>
     <div>
        <label for="stock">stock</label>
        <Input @id="stock" @type="text" @value={{model.stock}} />
    </div>
    <div>
        <label for="image">image</label>
        <Input @id="image" @type="url" @value={{model.image}} />
    </div>
    <button type="submit">Edit</button> */}
