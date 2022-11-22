import { module, test } from 'qunit';
import { setupTest } from 'grocery-store/tests/helpers';

module('Unit | Controller | store', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:store');
    assert.ok(controller);
  });
});
