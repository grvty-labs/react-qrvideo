// @flow
import React from 'react';
import { View, Text } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

type Props = {
  value: string,
  currentKey: number,
  currentQrIndex: number,
};
type State = {};
export default class QR extends React.Component<Props, State> {
  static defaultProps: Props = {
    value: 'a',
    currentKey: 0,
    currentQrIndex: 0,
  };
  state: State = {};

  render() {
    const { value, currentQrIndex, currentKey } = this.props;
    return (<View style={{ height: (currentQrIndex === currentKey) ? null : 0 }}>
      <Text>{currentQrIndex} {currentKey}</Text>
      <QRCode
        value={value}
        size={300}
      />
    </View>);
  };
}
