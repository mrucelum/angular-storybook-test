import { configure, addDecorator } from '@storybook/angular';

const req = require.context('../', true, /src\/app\/.*\.stories.ts$/);

function loadStories() {
  req.keys().forEach((filename) => {
    console.log('require', filename);
    req(filename);
  })
}

configure(loadStories, module);