// @flow
import { combineReducers } from 'redux';
import * as names from '../constants/reducerNames';
import DataQR from './qr';

const reducersJson = {};
reducersJson[names.DATA_QR] = DataQR;

export const reducers = combineReducers(reducersJson);
export default reducers;
