// @flow
import React from 'react';
import { View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

type Props = {
  value: string,
  currentKey: number,
  currentQrIndex: number,
  size: number,
};
type State = {};
export default class QR extends React.Component<Props, State> {
  static defaultProps: Props = {
    value: 'a',
    currentKey: 0,
    currentQrIndex: 0,
    size: 300,
  };
  state: State = {};

  render() {
    const { value, currentQrIndex, currentKey, size } = this.props;
    return (<View
      style={
      (currentQrIndex === currentKey)
      ? {
        height: size,
        opacity: 1,
      }
      : {
        opacity: 0,
        height: 0,
      }
    }
    >
      <QRCode
        value={value}
        size={size}
      />
    </View>);
  }
}
