import { connect } from 'react-redux';
import { setStep, setGameName, setGameMap } from '../actions/actions';
import NamingStep from '../components/NamingStep';

function SetStepper(to) {
  return {
    stepTo: to,
    stepNow: 'NamingStep'
  };
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToState = (dispatch) => {
  return {
    selectLiveMap: (name) => {
      dispatch(setGameName(name));
      dispatch(setGameMap('live'));
      dispatch(setStep(SetStepper('StoryStep')));
    },
    selectCustomMap: (name) => {
      dispatch(setGameName(name));
      dispatch(setGameMap('custom'));
      dispatch(setStep(SetStepper('StoryStep')));
    }
  };
};

const NamingStepContainer = connect(mapStateToProps, mapDispatchToState)(NamingStep);

export default NamingStepContainer;
