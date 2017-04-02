import { connect } from 'react-redux';
import { setStep } from '../actions/actions';
import StoryStep from '../components/StoryStep';

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToState = (dispatch) => {
  return {
    toSettingStep: () => {
      dispatch(setStep({stepNow: 'StoryStep', stepTo: 'SettingStep'}));
    }
  };
};

const StoryStepContainer = connect(mapStateToProps, mapDispatchToState)(StoryStep);

export default StoryStepContainer;
