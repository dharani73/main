import { module, test } from 'qunit';
import { setupTest } from 'grocery-store/tests/helpers';

module('Unit | Controller | grocery', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:grocery');
    assert.ok(controller);
  });
});
