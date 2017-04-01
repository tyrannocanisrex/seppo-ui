import { connect } from 'react-redux';
import IntroStep from '../components/IntroStep';
import { setStep } from '../actions/actions';

const mapStateToProps = (state) => {
  return {
    state: state
  };
}

const mapDispatchToState = (dispatch) => {
  return {
    newGame: () => {
      dispatch(setStep({ stepNow: 'IntroStep', stepTo: 'NamingStep' }));
    }
  };
}

const IntroStepContainer = connect(mapStateToProps, mapDispatchToState)(IntroStep);

export default IntroStepContainer;
