import angular from 'angular';
import customComponent from './custom-component';

export default angular
  .module('imhere-angular-component', [
    customComponent.name,
  ]);
