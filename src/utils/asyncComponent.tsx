import React from "react";

const asyncComponent = (loadComponent, loadModels: any[] = [], appendModel) =>
  class AsyncComponent extends React.Component<any, any> {
    constructor(props) {
      super(props);
      this.state = {
        Component: "div",
      };
    }

    componentDidMount() {
      if (this.hasLoadedComponent()) {
        return;
      }

      Promise.all([loadComponent(), ...loadModels])
        .then(([page, ...models]) => ({
          page: page.default,
          model: models.reduce((gather, item) => {
            const { default: _default } = item;
            gather[_default.name] = _default;
            return gather;
          }, {}),
        }))
        .then(({ page: Component, model: models }) => {
          Object.keys(models).forEach((key) => {
            appendModel(models[key]);
          });
          this.setState({ Component });
        })
        .catch((err) => {
          console.error(`Cannot load component in <AsyncComponent />`);
          throw err;
        });
    }

    hasLoadedComponent() {
      return this.state.Component !== "div";
    }
    render() {
      const { Component } = this.state;
      // 这样把 staticContext 分离出来是为了 https://github.com/ReactTraining/react-router/issues/4683
      const { staticContext, ...newProps } = this.props;
      const ComponentAS = Component as "div";
      return <ComponentAS {...newProps} />;
    }
  };

export default asyncComponent;
