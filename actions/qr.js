// @flow
import {
  SET_QR_INDEX,
} from '../constants/actionTypes';

/**
 * Set the patient estatus (alive or dead)
 * @param {string} isAlive The patient is alive
 * @returns {void}
 */
export const setQrIndex = (currentQrIndex: number) => ({
  type: SET_QR_INDEX,
  payload: { currentQrIndex },
});

export default setQrIndex;
