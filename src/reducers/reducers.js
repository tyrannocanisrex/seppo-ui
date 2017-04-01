import { combineReducers } from 'redux';

import { SET_STEP, SET_GAME_NAME, SET_GAME_MAP } from '../actions/actions';

let initialStep = { stepName: 'IntroStep' };

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

function game(state = {}, action) {
  switch(action.type) {
    case SET_GAME_NAME:
      return Object.assign({}, state, {name: action.name});
    case SET_GAME_MAP:
      return Object.assign({}, state, {map: action.mapType});
    default:
      return state;
  }
}

const seppoWizard = combineReducers({
  step,
  game
});

export default seppoWizard;
