# react-qrvideo

Transfer data through QR codes.

This project can be useful for people who need to transfer data between devices, when they do not have an Internet connection (Wi-Fi or mobile data) or bluetooth.

This project was developed to be executed in React-Native with Redux and runs on expo.

## Features!

  - Generates QR code sequence from an object of type JSON
  - Compress JSON objects for a smaller number of QR images
  - Read the QR code sequence using the expo scanner
  - When the entire sequence is scanned, it decompresses and returns the JSON object
  - You can configure the size of generated QRs

<img src="https://media.giphy.com/media/l378phhgBqkVPFJTO/giphy.gif" width="250">

## Dependencies

  - "expo": "^20.0.0",
  - "history": "^4.7.2",
  - "immutable": "^3.8.1",
  - "jsonpack": "^1.1.5",
  - "react": "16.0.0-alpha.12",
  - "react-native": "^0.47.0",
  - "react-native-qrcode-svg": "^5.0.2",
  - "react-router-redux": "^4.0.8",
  - "redux": "^3.7.2",
  - "redux-immutable-state-invariant": "^2.0.0",
  - "redux-logger": "^3.0.6",
  - "redux-observable": "^0.16.0",
  - "redux-persist": "^4.9.1",
  - "redux-persist-transform-encrypt": "^1.0.2",
  - "remote-redux-devtools": "^0.5.12",
  - "rxjs": "^5.4.3"

### Installation

```sh
$ yarn add react-qrvideo
```

or

```sh
$ npm install react-qrvideo --save
```

### Usage

##### QR Secuence from JSON

```javascript
import QRVideo from 'react-qrvideo';

render() {
  const sampleJson = {grvty: 'rules'};
    return(
        <QRVideo
          isScanner={false}
          json{sampleJSon}
          size={300}
        />
    );
}
```

##### QR Scanner for Secuence

```javascript
import QRVideo from 'react-qrvideo';

render() {
    return(
        <QRVideo isScanner={true} />
    );
}
```

### Props

| Name | Description | Type | Required | Default Value
| ----------- | ----------- | ----------- | ----------- | ----------- |
| isScanner | Activating this value will activate the scanning mode | boolean | No | false |
| json | JSON object to be transferred by QR stream | Object | No | null |
| size | QR size | number | No | 300 |


### Author

[Yamil Diaz Aguirre](https://github.com/Yamilquery)

Want to contribute? Great!
