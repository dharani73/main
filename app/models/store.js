import Model, { attr } from '@ember-data/model';

export default class StoreModel extends Model {
  @attr title;
  @attr homedelivery;
  @attr location;
  @attr rating;
  @attr stock;
  @attr image;
}
