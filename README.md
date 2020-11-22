# React Components Template

Template to create independent React components to publish on NPM.

## Dev environment

Use `yarn start` to start your localhost.

This repository has **only** the generic React components that could be imported in your project. Therefore, theres no HTMLs, pages, routes... We are using the **Storybook** to see how our components will be rendered, just create a file with name `stories.js` in your component folder an import it with the neccessary properties.

To more details to how create stories, see the [Storybook documentation](https://storybook.js.org/docs/basics/writing-stories/).

## Tests

We are using **Jest** with default coverage of 80. To change it, modify the following lines in the `jest.config.js` file:

```
...
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    },
  },
...
```

## Creating your component

Use the `ExampleComponent` in the `src` folder to create yours. You can create more than one component and export they in the `src/index.js` file.

**Don't forget to export your component in the `src/index.js` file. This is the file that we use on webpack to build the bundle.**

## Publishing

To generate a release and publish on NPM, just run `yarn release`. The `package.json` and `CHANGELOG.md` files will be automatically updated with the new version and the changes maded.

The version is generated following the [Conventional Commit Format](https://conventionalcommits.org/), using your commit history.

After that, run `git push --follow-tags && npm publish` to publish the new version of your component.

## Compatibility

This template allows us to use [React Hooks](https://reactjs.org/docs/hooks-intro.html) and [Styled Components](https://styled-components.com/).

This don't prevent you to use *class syntax* to create your components or stylize with *normal CSS* and *SASS*, but depending of your necessities, could be necessary install other dependencies and do new configurations on your `webpack.config.js` module.

It's important make sure that **the React version in the project that you want to use your component be equal or higher that the version of your component to ensure the full compatibility**.
