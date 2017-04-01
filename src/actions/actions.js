export const SET_STEP = 'SET_STEP';
export const SET_GAME_NAME = 'SET_GAME_NAME';
export const SET_GAME_MAP = 'SET_GAME_MAP';
export const SET_GAME_SETTING_AGE = 'SET_GAME_SETTING_AGE';
export const SET_GAME_SETTING_LANGUAGE = 'SET_GAME_SETTING_LANGUAGE';
export const SET_GAME_SETTING_SUBJECT = 'SET_GAME_SETTING_SUBJECT';

export function setStep(steps) {
  return { type: SET_STEP, steps };
}

export function setGameName(name) {
  return { type: SET_GAME_NAME, name };
}

export function setGameMap(map) {
  return { type: SET_GAME_MAP, map };
}

export function setGameSubject(subject) {
  return { type: SET_GAME_SETTING_SUBJECT, subject };
}

export function setGameAge(age) {
  return { type: SET_GAME_SETTING_AGE, age };
}

export function setGameLanguage(language) {
  return { type: SET_GAME_SETTING_LANGUAGE, language };
}
