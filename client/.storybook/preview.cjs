import { addDecorator } from '@storybook/react';

import StylesDecorator from './styles-decorator';

import './index.css'

addDecorator(StylesDecorator);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      method: 'alphabetical',
      order: [], 
      locales: '', 
    },
  },
}