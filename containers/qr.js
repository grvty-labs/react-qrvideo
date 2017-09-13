// @flow
import { connect } from 'react-redux';
import QR from '../components/qr';
import * as names from '../constants/reducerNames';

const mapStateToProps = state => ({
  currentQrIndex: state[names.DATA_QR].currentQrIndex,
});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(QR);
