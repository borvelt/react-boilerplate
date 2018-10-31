/*
 *
 * LanguageProvider reducer
 *
 */

import { newAction, setState } from 'utils/store';
import { CHANGE_LOCALE } from './constants';
import { DEFAULT_LOCALE } from '../../i18n';
const initialState = {
  locale: DEFAULT_LOCALE,
};

setState({ language: initialState });

newAction(CHANGE_LOCALE).onSucceed(action => ({ locale: action.payload }));

export { initialState };
