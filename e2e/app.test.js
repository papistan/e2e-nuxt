// import VueSelector from 'testcafe-vue-selectors'
import { Selector, ClientFunction } from 'testcafe'

const getUrl   = ClientFunction(() => document.location.href);
const origin = 'http://localhost:3000/'

fixture `Testing testcafe`
    .page `${origin}`

test('Test homepage URL', async t => {
    // assertion to check if url is what it should be
    await t.expect('http://localhost:3000/').match(/http:\/\/localhost:3000/);
});

test('Check title text', async (t) => {
  const title = Selector('h1').innerText
  // assertion to check if the only h1 tag on the page contains the required text
  await t.expect(title).contains('nuxt-test');
});

fixture `Testing Name and Age calulator`
    .page `http://localhost:3000/age`

test('Test Age calculator', async t => {
    const ageInput = Selector('input').withAttribute('placeholder', 'Add Age')
    await t
    .click(ageInput)
    .typeText(ageInput, '100', { replace: true })
    .wait(5000)
    .expect(Selector('#age-text').innerText).contains('105');
});