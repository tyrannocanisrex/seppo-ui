import { connect } from 'react-redux';
import { setStep, setGameName, setGameMap } from '../actions/actions';
import GameConfig from '../components/GameConfig';

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToState = (dispatch) => {
  return {};
};

const GameConfigContainer = connect(mapStateToProps, mapDispatchToState)(GameConfig);

export default GameConfigContainer;
