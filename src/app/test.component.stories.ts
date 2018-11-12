import { storiesOf, addDecorator } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { withNotes } from '@storybook/addon-notes';

import { Welcome, Button } from '@storybook/angular/demo';

import { TestComponent } from './test.component';

addDecorator(withNotes);

storiesOf('Welcome', module).add('to Storybook', () => ({
  component: Welcome,
  props: {}
}));

storiesOf('My Button', module)
  .add('with some emoji', () => ({
    component: Button,
    props: {
      text: '😀 😎 👍 💯',
    },
  }))
  .add('with some emoji and action', () => ({
    component: Button,
    props: {
      text: '😀 😎 👍 💯',
      click: action('clicked'),
    },
  }));

storiesOf('My Button', module)
  .add('Default', () => ({
    component: TestComponent,
    props: {
      btnClicked: action('clicked')
    }
  }))
  .add('test', () => ({
    component: TestComponent,
    props: {
      someText: 'hrhr',
      btnClicked: action('clicked')
    }
  }), {
    notes: 'testing notes...'
  });