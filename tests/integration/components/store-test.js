import { module, test } from 'qunit';
import { setupRenderingTest } from 'grocery-store/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | store', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Store />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <Store>
        template block text
      </Store>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
