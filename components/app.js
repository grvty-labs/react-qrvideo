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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  containerBarScanner: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

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
    const { json, setQrIndex, speed, density, isScanner } = this.props;
    // TODO: Save images SVG and render iterative
    if (!isScanner) {
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
  }

  componentWillUnmount() {
    const { isScanner } = this.props;
    if (!isScanner) {
      clearInterval(this.state.intervalQr);
    }
  }

  shouldCompmonentUpdate() {
    return false;
  }

  scann(data: any) {
    const { onComplete } = this.props;
    const metaData: string = data.data.split('®');
    const scannIndex: number = Number(metaData[0].split(',')[0]);
    const partsTotal: number = Number(metaData[0].split(',')[1]);
    this.state.jsonPiecesScann[scannIndex] = metaData[1];
    this.setState({
      ...this.state,
      jsonPiecesScann: this.state.jsonPiecesScann,
    }, () => {
      let notEmpty: number = 0;
      for (let i in this.state.jsonPiecesScann) {
        if (this.state.jsonPiecesScann[i] !== null) notEmpty += 1;
      }
      if (notEmpty >= partsTotal) {
        if (!this.state.isComplete) {
          onComplete(joinStringsToJson(this.state.jsonPiecesScann));
        }
        this.setState({ isComplete: true });
      }
    });
  }

  renderMode() {
    const { isScanner, size } = this.props;
    if (!isScanner) {
      return (<View style={styles.container}>
        {
          this.state.jsonPieces.map((item, key) => (
            <QR
              size={size}
              value={key + ',' + this.state.jsonPieces.length + '®' + item}
              key={key}
              currentKey={key}
            />
          ))
        }
      </View>);
    }
    return (<View style={styles.containerBarScanner}>
      <BarCodeScanner
        onBarCodeRead={data => this.scann(data)}
        style={{ flex: 1 }}
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
