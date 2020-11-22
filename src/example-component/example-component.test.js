import React from 'react';
import ExampleComponent from './example-component';

describe('<ExampleComponent />', () => {
  test('deve estar declarado', () => {
    global.shallow(<ExampleComponent />);
  });
});
