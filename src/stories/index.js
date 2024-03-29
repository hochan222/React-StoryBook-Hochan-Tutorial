import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import App from "../App";
import Tutorial from "../Tutorial/Tutorial";
import GuGuDan from "../Tutorial/GuGuDan"

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

storiesOf('App', module).add('default', () => <App />);

storiesOf('Tutorial', module)
   .add('Functional React', () => <Tutorial />)
   .add('GuGuDan', () => <GuGuDan />);
