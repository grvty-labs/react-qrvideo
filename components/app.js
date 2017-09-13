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
  setQrIndex: Function,
};
type State = {
  jsonPieces: any,
  intervalQr: any,
  jsonPiecesScann: any,
  jsonIndex: number,
};
export default class QRV extends React.Component<Props, State> {
  static defaultProps: Props = {
    json: [{"_id":"59b857b3f82e95d60600c757","index":0,"guid":"2320fc25-462e-47cd-89be-e5eb61165236","isActive":false,"balance":"$3,268.24","picture":"http://placehold.it/32x32","age":34,"eyeColor":"blue","name":"Hobbs Graham","gender":"male","company":"EMOLTRA","email":"hobbsgraham@emoltra.com","phone":"+1 (962) 433-2479","address":"996 Village Court, Smeltertown, West Virginia, 9930","about":"Enim dolor consequat eiusmod duis. Incididunt in commodo consectetur quis ad voluptate magna officia ex pariatur cupidatat enim occaecat. In non cupidatat fugiat pariatur magna ut enim ad reprehenderit cupidatat deserunt.\r\n","registered":"2015-10-23T01:53:41 +05:00","latitude":82.435303,"longitude":175.230783,"tags":["fugiat","enim","cupidatat","consequat","ipsum","et","veniam"],"friends":[{"id":0,"name":"Taylor Rodgers"},{"id":1,"name":"Witt Davidson"},{"id":2,"name":"Marianne Mccarty"}],"greeting":"Hello, Hobbs Graham! You have 9 unread messages.","favoriteFruit":"strawberry"},{"_id":"59b857b36fadcc2d4dfed2d7","index":1,"guid":"cc29fdad-33c3-41bc-8bdc-679248054b84","isActive":false,"balance":"$3,171.07","picture":"http://placehold.it/32x32","age":28,"eyeColor":"blue","name":"Katrina Pitts","gender":"female","company":"ARCHITAX","email":"katrinapitts@architax.com","phone":"+1 (992) 545-3867","address":"691 Vernon Avenue, Bowie, Louisiana, 7075","about":"Enim minim esse ipsum labore est ex enim duis nulla pariatur fugiat magna amet. Nulla officia mollit officia labore id eiusmod elit reprehenderit in duis laborum in sit. Ea nostrud adipisicing est in voluptate non irure incididunt. Proident veniam cupidatat duis ut ex esse officia ullamco fugiat ullamco.\r\n","registered":"2015-04-20T03:18:19 +05:00","latitude":-2.250748,"longitude":-165.318574,"tags":["sint","aliqua","aliqua","amet","ad","magna","ex"],"friends":[{"id":0,"name":"Sophia Mccormick"},{"id":1,"name":"Lane Gross"},{"id":2,"name":"Hurst Lyons"}],"greeting":"Hello, Katrina Pitts! You have 2 unread messages.","favoriteFruit":"banana"},{"_id":"59b857b308b65c9522a3412c","index":2,"guid":"d9827fff-9cb9-4d04-b0de-5ecc4afed13f","isActive":true,"balance":"$3,252.13","picture":"http://placehold.it/32x32","age":27,"eyeColor":"blue","name":"Britney Dejesus","gender":"female","company":"XIIX","email":"britneydejesus@xiix.com","phone":"+1 (944) 491-2117","address":"366 Hopkins Street, Hall, New Jersey, 7659","about":"Amet aute amet nisi anim. Qui dolor duis culpa non non ullamco aute. Culpa veniam mollit magna in dolor. Nisi ea exercitation laborum ex enim esse aliqua aliqua voluptate commodo esse. Reprehenderit voluptate laborum officia voluptate excepteur voluptate deserunt. Elit qui dolor Lorem id incididunt occaecat ea.\r\n","registered":"2014-11-24T07:05:09 +06:00","latitude":-10.531961,"longitude":-25.297812,"tags":["amet","sunt","irure","ad","duis","culpa","ipsum"],"friends":[{"id":0,"name":"Wendi Owens"},{"id":1,"name":"Gina Riddle"},{"id":2,"name":"Effie Burke"}],"greeting":"Hello, Britney Dejesus! You have 7 unread messages.","favoriteFruit":"strawberry"},{"_id":"59b857b34dcdbde5e0ed487f","index":3,"guid":"75bd4434-acd6-49e0-a7ae-ff8a1f18699b","isActive":false,"balance":"$3,012.36","picture":"http://placehold.it/32x32","age":28,"eyeColor":"brown","name":"Cervantes Ewing","gender":"male","company":"QUILCH","email":"cervantesewing@quilch.com","phone":"+1 (877) 520-3714","address":"552 Scholes Street, Umapine, Kansas, 3982","about":"Mollit mollit nulla in ex laboris consequat officia cillum anim enim nostrud sint eu qui. Sunt incididunt esse non velit proident in eu magna pariatur est reprehenderit cupidatat ad. Lorem labore velit irure id.\r\n","registered":"2014-06-05T08:17:48 +05:00","latitude":-72.266903,"longitude":13.43912,"tags":["nulla","elit","culpa","nisi","consequat","eu","ullamco"],"friends":[{"id":0,"name":"Serena Padilla"},{"id":1,"name":"Tami Hensley"},{"id":2,"name":"Justine Lawson"}],"greeting":"Hello, Cervantes Ewing! You have 5 unread messages.","favoriteFruit":"strawberry"},{"_id":"59b857b348c6adfe470805d2","index":4,"guid":"67cd0f41-9bcb-4111-8138-8a316e639a90","isActive":false,"balance":"$1,508.80","picture":"http://placehold.it/32x32","age":38,"eyeColor":"green","name":"Hart Webster","gender":"male","company":"VIRVA","email":"hartwebster@virva.com","phone":"+1 (942) 507-3248","address":"176 Division Place, Linganore, Wyoming, 9090","about":"Cillum labore aliquip sint amet in sit. Consectetur tempor et elit reprehenderit aliquip eu veniam irure excepteur Lorem sint irure. Ea reprehenderit pariatur cupidatat est in esse. Exercitation exercitation aliqua veniam cupidatat consequat. Labore velit commodo ad est eiusmod culpa consectetur ex anim deserunt sunt.\r\n","registered":"2014-06-17T11:26:55 +05:00","latitude":-22.974563,"longitude":39.583652,"tags":["aute","deserunt","nostrud","labore","veniam","dolore","nulla"],"friends":[{"id":0,"name":"Rena Garrett"},{"id":1,"name":"Wilkins Gonzalez"},{"id":2,"name":"Mandy Jennings"}],"greeting":"Hello, Hart Webster! You have 8 unread messages.","favoriteFruit":"apple"}],
    isScanner: false,
    setQrIndex: () => {},
  }
  state: State = {
    jsonPieces: [],
    intervalQr: null,
    jsonPiecesScann: [],
    jsonIndex: 0,
  }

  componentDidMount() {
    const { json, setQrIndex } = this.props;
    // TODO: Save images SVG and render iterative
    this.setState({
      jsonPieces: divideJsonToStrings(json, 400),
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
    }, 200);
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalQr);
  }

  shouldCompmonentUpdate() {
    return false;
  }

  scann(data: any) {
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
        alert(joinStringsToJson(this.state.jsonPiecesScann));
      }
    });
  }

  renderMode() {
    const { isScanner } = this.props;
    if (!isScanner) {
      return (<View style={styles.container}>
        <View style={styles.containerBarScanner}>
          <BarCodeScanner
            onBarCodeRead={(data) => this.scann(data)}
            style={{ flex: 1, }}
          />
        </View>
        { this.state.jsonPieces.map((item, key) => <QR value={key + '®' + item} key={key} currentKey={key} />) }
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
