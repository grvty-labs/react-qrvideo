// @flow
import { connect } from 'react-redux';
import App from '../components/app';
import { setQrIndex } from '../actions/qr';

const mapStateToProps = () => ({

});

const mapDispatchToProps = dispatch => ({
  setQrIndex: (currentQrIndex: number) => dispatch(setQrIndex(currentQrIndex)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
