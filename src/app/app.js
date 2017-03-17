import angular from 'angular';
import * as uiRouter from 'angular-ui-router';

import '../style/app.css';

import { DefaultCtrl, DefaultState } from './states/default';

import { AwwCtrl, AwwState, AwwServiceName, AwwService } from './states/aww';
import { MechCtrl, MechState, MechServiceName, MechService} from './states/mechanicalkeyboards';

let app = () => {
  return {
    template: require('./app.html'),
  }
};

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, ['ui.router'])

  .directive('app', app)

  .service(AwwServiceName, AwwService)
  .service(MechServiceName, MechService)

  .config(($stateProvider) => {
    $stateProvider
      .state(DefaultState.name, DefaultState)
      .state(AwwState.name, AwwState)
      .state(MechState.name, MechState)
      ;
  })

  .run(($state) => {
    $state.go('default');
  })

  .controller(DefaultState.controller, DefaultCtrl)
  .controller(AwwState.controller, AwwCtrl)
  .controller(MechState.controller, MechCtrl)

export default MODULE_NAME;