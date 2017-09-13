// @flow
import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { BarCodeScanner, Permissions } from 'expo';
import { divideJsonToStrings, joinStringsToJson } from '../utils';
import QR from '../containers/qr';

type Props = {
  json: any,
  isScanner: boolean,
  size: number,
  speed: number,
  density: number,
  onComplete: Function,
  setQrIndex: Function,
};
type State = {
  jsonPieces: any,
  intervalQr: any,
  jsonPiecesScann: any,
  jsonIndex: number,
  isComplete: boolean,
};
export default class QRV extends React.Component<Props, State> {
  static defaultProps: Props = {
    json: [],
    isScanner: false,
    size: 300,
    speed: 250,
    density: 400,
    onComplete: (data) => { alert(data); },
    setQrIndex: () => {},
  }
  state: State = {
    jsonPieces: [],
    intervalQr: null,
    jsonPiecesScann: [],
    jsonIndex: 0,
    isComplete: false,
  }

  componentDidMount() {
    const { json, setQrIndex, speed, density } = this.props;
    // TODO: Save images SVG and render iterative
    this.setState({
      jsonPieces: divideJsonToStrings(json, density),
    });
    this.state.intervalQr = setInterval(() => {
      const addJsonIndex = (this.state.jsonIndex < this.state.jsonPieces.length - 1)
        ? this.state.jsonIndex + 1
        : 0;
      this.setState({
        ...this.state,
        jsonIndex: addJsonIndex,
      });
      setQrIndex(this.state.jsonIndex);
    }, speed);
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalQr);
  }

  shouldCompmonentUpdate() {
    return false;
  }

  scann(data: any) {
    const { onComplete } = this.props;
    const scannIndex: number = parseInt(data.data.split("®")[0]);
    this.state.jsonPiecesScann[scannIndex] = data.data.split("®")[1];
    this.setState({
      ...this.state,
      jsonPiecesScann: this.state.jsonPiecesScann,
    }, () => {
      var notEmpty: number = 0;
      for (var i in this.state.jsonPiecesScann) {
        if (this.state.jsonPiecesScann[i] !== undefined) notEmpty += 1;
      }
      if (notEmpty >= (this.state.jsonPieces.length)) {
        if (!this.state.isComplete) onComplete(joinStringsToJson(this.state.jsonPiecesScann));
        this.setState({isComplete: true});
      }
    });
  }

  renderMode() {
    const { isScanner, size } = this.props;
    // if (!isScanner) {
    //   return (<View style={styles.container}>
    //     <View style={styles.containerBarScanner}>
    //       <BarCodeScanner
    //         onBarCodeRead={(data) => this.scann(data)}
    //         style={{ flex: 1, }}
    //       />
    //     </View>
    //     { this.state.jsonPieces.map((item, key) => <QR size={size} value={key + '®' + item} key={key} currentKey={key} />) }
    //   </View>);
    // }
    if (!isScanner) {
      return (<View style={styles.container}>
        { this.state.jsonPieces.map((item, key) => <QR size={size} value={key + '®' + item} key={key} currentKey={key} />) }
      </View>);
    }
    return (<View style={styles.containerBarScanner}>
      <BarCodeScanner
        onBarCodeRead={(data) => this.scann(data)}
        style={{ flex: 1, }}
      />
    </View>);
  }

  render() {
    return (
      <View style={styles.container}>
        { this.renderMode() }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerBarScanner: {
    marginTop: 16,
    paddingBottom: 16,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  }
});
