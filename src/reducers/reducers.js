import { combineReducers } from 'redux';

import { SET_STEP } from '../actions/actions';

let initialStep = { stepName: 'NamingStep', previousStep: 'NamingStep' };

function step(state = initialStep, action) {
  switch(action.type) {
    case SET_STEP:
      let temp = {
        stepName: action.steps.stepTo,
        previousStep: action.steps.stepNow
      };
      return temp;
    default:
      return state;
  }
}

const seppoWizard = combineReducers({
  step
});

export default seppoWizard;
