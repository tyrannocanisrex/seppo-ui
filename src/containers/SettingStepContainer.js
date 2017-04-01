import { connect } from 'react-redux';
import { setStep, setGameSubject, setGameAge, setGameLanguage } from '../actions/actions';
import SettingStep from '../components/SettingStep';

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToState = (dispatch) => {
  return {
    defineGameSettings: (subject, age, language) => {
      dispatch(setGameSubject(subject));
      dispatch(setGameAge(age));
      dispatch(setGameLanguage(language));
      dispatch(setStep({stepNow: 'SettingStep', stepTo: 'GameConfig'}));
    }
  };
}

const SettingStepContainer = connect(mapStateToProps, mapDispatchToState)(SettingStep);

export default SettingStepContainer;
