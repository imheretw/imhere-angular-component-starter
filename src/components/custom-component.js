import angular from 'angular';

class Controller {
}

const component = {
  bindings: {
  },
  transclude: true,
  controller: Controller,
  controllerAs: 'vm',
  template: `
  <div>
    Imhere Custom Component
  </div>
  `,
};

export default angular
  .module('imhere-component.customComponent', [])
  .component('customComponent', component);
