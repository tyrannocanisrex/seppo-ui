import { connect } from 'react-redux';
import { setStep } from '../actions/actions';
import Step from '../components/Step';

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToState = (dispatch) => {
  return {
    clickPrevious: (step) => {
      dispatch(setStep(step));
    }
  }
};

const StepContainer = connect(mapStateToProps, mapDispatchToState)(Step);

export default StepContainer;
