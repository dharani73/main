import { module, test } from 'qunit';
import { setupTest } from 'grocery-store/tests/helpers';

module('Unit | Route | grocery', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:grocery');
    assert.ok(route);
  });
});
