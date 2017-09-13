// @flow
import * as jsonpack from 'jsonpack/main';

/**
 * Split a string into chunks of the given size
 * @param  {String} string is the String to split
 * @param  {Number} size is the size you of the cuts
 * @return {Array} an Array with the strings
 */
export const splitString = (string: string, size: number) => {
	var re = new RegExp('.{1,' + size + '}', 'g');
	return string.match(re);
}

/**
 * Divide Json to Strings equals parts, specifying a size
 * @param {Object} json Object JSON to parse
 * @param {number} size Size in number from divide
 * @returns {Object} jsonStrings
 */
export const divideJsonToStrings = (json: any, size: number) => {
  const jsonString = jsonpack.pack(json).replace(/\r?\n|\r/g, "");
  const jsonResult = splitString(jsonString, size);
  return jsonResult;
};

/**
 * Concat strings parts to JSON Object
 * @param {Object} Object with strings parts parsed by divideJsonToStrings func
 * @returns {Object} Rebuilded JSON Object
 */
export const joinStringsToJson = (jsnParts: any) => {
  let newJsonString = '';
  for (var i in jsnParts) newJsonString += jsnParts[i];
  const newJson = jsonpack.unpack(newJsonString);
  return newJson;
};

export default divideJsonToStrings;

const sampleJson = [
  {
    "_id": "59b8134315e0f5c12d0e5178",
    "index": 0,
    "guid": "a1e8d824-94d7-4d2a-baa1-d3c8f2467b1b",
    "isActive": true,
    "balance": "$3,977.43",
    "picture": "http://placehold.it/32x32",
    "age": 20,
    "eyeColor": "brown",
    "name": "Fran Atkinson",
    "gender": "female",
    "company": "ZIORE",
    "email": "franatkinson@ziore.com",
    "phone": "+1 (850) 465-3869",
    "address": "518 Coyle Street, Wakarusa, Hawaii, 9770",
    "about": "Dolor quis laborum Lorem in consectetur sint duis eiusmod. Qui velit elit tempor cupidatat mollit eiusmod minim mollit labore est aliqua minim. Laborum quis cillum est officia exercitation culpa ea. Est minim dolore minim qui velit culpa. Ea eu cupidatat consectetur id officia ut laborum amet amet.\r\n",
    "registered": "2015-09-09T02:06:22 +05:00",
    "latitude": -34.911309,
    "longitude": 175.708864,
    "tags": [
      "labore",
      "duis",
      "cillum",
      "pariatur",
      "aliqua",
      "ea",
      "est"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Robbins Lane"
      },
      {
        "id": 1,
        "name": "Bryant Warren"
      },
      {
        "id": 2,
        "name": "Savannah Cannon"
      }
    ],
    "greeting": "Hello, Fran Atkinson! You have 3 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "59b8134308228dbf1765805e",
    "index": 1,
    "guid": "285c835e-aa94-46e8-942a-a62950c03378",
    "isActive": false,
    "balance": "$2,233.39",
    "picture": "http://placehold.it/32x32",
    "age": 37,
    "eyeColor": "blue",
    "name": "Chavez Romero",
    "gender": "male",
    "company": "COASH",
    "email": "chavezromero@coash.com",
    "phone": "+1 (958) 440-2907",
    "address": "309 Kent Street, Suitland, Virginia, 2199",
    "about": "Id nulla aute nisi in occaecat ea ex dolor adipisicing deserunt. Nulla aliqua laboris excepteur deserunt fugiat exercitation proident voluptate amet ipsum. Dolor eiusmod in exercitation esse nulla.\r\n",
    "registered": "2016-09-19T03:50:12 +05:00",
    "latitude": -65.872494,
    "longitude": 1.256201,
    "tags": [
      "esse",
      "anim",
      "cillum",
      "adipisicing",
      "aute",
      "cillum",
      "do"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Shanna Hubbard"
      },
      {
        "id": 1,
        "name": "Jeanne Tyler"
      },
      {
        "id": 2,
        "name": "Norma Leon"
      }
    ],
    "greeting": "Hello, Chavez Romero! You have 1 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "59b813438c903bf1b62ef4d7",
    "index": 2,
    "guid": "1a9b0af4-fafc-4a68-b5bb-fe4ed74e8267",
    "isActive": true,
    "balance": "$3,599.23",
    "picture": "http://placehold.it/32x32",
    "age": 39,
    "eyeColor": "blue",
    "name": "Jensen Golden",
    "gender": "male",
    "company": "GLUKGLUK",
    "email": "jensengolden@glukgluk.com",
    "phone": "+1 (956) 525-2138",
    "address": "803 Bartlett Place, Sidman, Guam, 1046",
    "about": "Elit labore veniam anim sint. Eiusmod pariatur nostrud nostrud proident non ea fugiat esse. Deserunt amet commodo sunt cillum est eiusmod dolore culpa anim aute proident nostrud.\r\n",
    "registered": "2016-11-20T02:18:01 +06:00",
    "latitude": -43.459201,
    "longitude": 142.784558,
    "tags": [
      "minim",
      "fugiat",
      "esse",
      "minim",
      "sunt",
      "dolore",
      "quis"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Ronda Hensley"
      },
      {
        "id": 1,
        "name": "Terry Hill"
      },
      {
        "id": 2,
        "name": "Mullen Dyer"
      }
    ],
    "greeting": "Hello, Jensen Golden! You have 8 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "59b81343f7d192cd8103d995",
    "index": 3,
    "guid": "554c214d-9c5e-408e-a570-09d3fc3cf21c",
    "isActive": true,
    "balance": "$3,540.81",
    "picture": "http://placehold.it/32x32",
    "age": 34,
    "eyeColor": "brown",
    "name": "Tanisha Boyer",
    "gender": "female",
    "company": "ECOLIGHT",
    "email": "tanishaboyer@ecolight.com",
    "phone": "+1 (924) 412-3762",
    "address": "544 Montrose Avenue, Crumpler, North Dakota, 6119",
    "about": "Duis exercitation proident excepteur reprehenderit incididunt dolor veniam enim irure Lorem. Fugiat cillum velit enim nisi et do culpa incididunt irure et elit ea deserunt. Consequat culpa cillum officia ut anim dolore fugiat minim in ipsum ullamco voluptate cupidatat.\r\n",
    "registered": "2014-08-20T12:50:26 +05:00",
    "latitude": -35.910701,
    "longitude": 36.370052,
    "tags": [
      "ad",
      "nostrud",
      "est",
      "ipsum",
      "elit",
      "occaecat",
      "Lorem"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Webb Alvarez"
      },
      {
        "id": 1,
        "name": "Isabel Sweeney"
      },
      {
        "id": 2,
        "name": "Avis Murphy"
      }
    ],
    "greeting": "Hello, Tanisha Boyer! You have 8 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "59b81343a53ff829770f05bb",
    "index": 4,
    "guid": "08e17804-439c-4d86-bcfd-4c61d1839c70",
    "isActive": true,
    "balance": "$3,347.77",
    "picture": "http://placehold.it/32x32",
    "age": 30,
    "eyeColor": "brown",
    "name": "Kerri Rivas",
    "gender": "female",
    "company": "KIGGLE",
    "email": "kerririvas@kiggle.com",
    "phone": "+1 (880) 470-2093",
    "address": "148 Tilden Avenue, Rutherford, Connecticut, 4076",
    "about": "Est consectetur non est elit aliqua aliquip est consequat ea tempor. Aute anim qui pariatur reprehenderit sit. Qui magna cupidatat culpa laboris ipsum occaecat ad voluptate voluptate magna exercitation cillum.\r\n",
    "registered": "2016-12-19T05:46:02 +06:00",
    "latitude": -33.336558,
    "longitude": -71.315829,
    "tags": [
      "reprehenderit",
      "dolor",
      "ex",
      "magna",
      "minim",
      "adipisicing",
      "laboris"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Bianca Wong"
      },
      {
        "id": 1,
        "name": "Suarez Kinney"
      },
      {
        "id": 2,
        "name": "Cara Ochoa"
      }
    ],
    "greeting": "Hello, Kerri Rivas! You have 5 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "59b8134379ec84870ea13390",
    "index": 5,
    "guid": "725fa8c6-f306-4234-ba58-cf7a2f26c271",
    "isActive": false,
    "balance": "$1,199.24",
    "picture": "http://placehold.it/32x32",
    "age": 26,
    "eyeColor": "brown",
    "name": "Hayes Rosa",
    "gender": "male",
    "company": "INCUBUS",
    "email": "hayesrosa@incubus.com",
    "phone": "+1 (932) 461-3660",
    "address": "605 Prospect Avenue, Dragoon, New Hampshire, 7822",
    "about": "Aliqua quis enim veniam esse occaecat ut quis aliqua nostrud laborum dolore nisi ex eu. Ad incididunt minim proident dolor ex ea officia. Dolor elit elit ex qui exercitation consectetur adipisicing aute ipsum eiusmod.\r\n",
    "registered": "2015-04-07T02:08:21 +05:00",
    "latitude": 47.804439,
    "longitude": 158.858107,
    "tags": [
      "laborum",
      "ipsum",
      "laborum",
      "aute",
      "ad",
      "in",
      "labore"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Essie Burns"
      },
      {
        "id": 1,
        "name": "Norton Avila"
      },
      {
        "id": 2,
        "name": "Mathews Oconnor"
      }
    ],
    "greeting": "Hello, Hayes Rosa! You have 5 unread messages.",
    "favoriteFruit": "apple"
  }
];

const eljson = [{"_id":"59b857b3f82e95d60600c757","index":0,"guid":"2320fc25-462e-47cd-89be-e5eb61165236","isActive":false,"balance":"$3,268.24","picture":"http://placehold.it/32x32","age":34,"eyeColor":"blue","name":"Hobbs Graham","gender":"male","company":"EMOLTRA","email":"hobbsgraham@emoltra.com","phone":"+1 (962) 433-2479","address":"996 Village Court, Smeltertown, West Virginia, 9930","about":"Enim dolor consequat eiusmod duis. Incididunt in commodo consectetur quis ad voluptate magna officia ex pariatur cupidatat enim occaecat. In non cupidatat fugiat pariatur magna ut enim ad reprehenderit cupidatat deserunt.\r\n","registered":"2015-10-23T01:53:41 +05:00","latitude":82.435303,"longitude":175.230783,"tags":["fugiat","enim","cupidatat","consequat","ipsum","et","veniam"],"friends":[{"id":0,"name":"Taylor Rodgers"},{"id":1,"name":"Witt Davidson"},{"id":2,"name":"Marianne Mccarty"}],"greeting":"Hello, Hobbs Graham! You have 9 unread messages.","favoriteFruit":"strawberry"},{"_id":"59b857b36fadcc2d4dfed2d7","index":1,"guid":"cc29fdad-33c3-41bc-8bdc-679248054b84","isActive":false,"balance":"$3,171.07","picture":"http://placehold.it/32x32","age":28,"eyeColor":"blue","name":"Katrina Pitts","gender":"female","company":"ARCHITAX","email":"katrinapitts@architax.com","phone":"+1 (992) 545-3867","address":"691 Vernon Avenue, Bowie, Louisiana, 7075","about":"Enim minim esse ipsum labore est ex enim duis nulla pariatur fugiat magna amet. Nulla officia mollit officia labore id eiusmod elit reprehenderit in duis laborum in sit. Ea nostrud adipisicing est in voluptate non irure incididunt. Proident veniam cupidatat duis ut ex esse officia ullamco fugiat ullamco.\r\n","registered":"2015-04-20T03:18:19 +05:00","latitude":-2.250748,"longitude":-165.318574,"tags":["sint","aliqua","aliqua","amet","ad","magna","ex"],"friends":[{"id":0,"name":"Sophia Mccormick"},{"id":1,"name":"Lane Gross"},{"id":2,"name":"Hurst Lyons"}],"greeting":"Hello, Katrina Pitts! You have 2 unread messages.","favoriteFruit":"banana"},{"_id":"59b857b308b65c9522a3412c","index":2,"guid":"d9827fff-9cb9-4d04-b0de-5ecc4afed13f","isActive":true,"balance":"$3,252.13","picture":"http://placehold.it/32x32","age":27,"eyeColor":"blue","name":"Britney Dejesus","gender":"female","company":"XIIX","email":"britneydejesus@xiix.com","phone":"+1 (944) 491-2117","address":"366 Hopkins Street, Hall, New Jersey, 7659","about":"Amet aute amet nisi anim. Qui dolor duis culpa non non ullamco aute. Culpa veniam mollit magna in dolor. Nisi ea exercitation laborum ex enim esse aliqua aliqua voluptate commodo esse. Reprehenderit voluptate laborum officia voluptate excepteur voluptate deserunt. Elit qui dolor Lorem id incididunt occaecat ea.\r\n","registered":"2014-11-24T07:05:09 +06:00","latitude":-10.531961,"longitude":-25.297812,"tags":["amet","sunt","irure","ad","duis","culpa","ipsum"],"friends":[{"id":0,"name":"Wendi Owens"},{"id":1,"name":"Gina Riddle"},{"id":2,"name":"Effie Burke"}],"greeting":"Hello, Britney Dejesus! You have 7 unread messages.","favoriteFruit":"strawberry"},{"_id":"59b857b34dcdbde5e0ed487f","index":3,"guid":"75bd4434-acd6-49e0-a7ae-ff8a1f18699b","isActive":false,"balance":"$3,012.36","picture":"http://placehold.it/32x32","age":28,"eyeColor":"brown","name":"Cervantes Ewing","gender":"male","company":"QUILCH","email":"cervantesewing@quilch.com","phone":"+1 (877) 520-3714","address":"552 Scholes Street, Umapine, Kansas, 3982","about":"Mollit mollit nulla in ex laboris consequat officia cillum anim enim nostrud sint eu qui. Sunt incididunt esse non velit proident in eu magna pariatur est reprehenderit cupidatat ad. Lorem labore velit irure id.\r\n","registered":"2014-06-05T08:17:48 +05:00","latitude":-72.266903,"longitude":13.43912,"tags":["nulla","elit","culpa","nisi","consequat","eu","ullamco"],"friends":[{"id":0,"name":"Serena Padilla"},{"id":1,"name":"Tami Hensley"},{"id":2,"name":"Justine Lawson"}],"greeting":"Hello, Cervantes Ewing! You have 5 unread messages.","favoriteFruit":"strawberry"},{"_id":"59b857b348c6adfe470805d2","index":4,"guid":"67cd0f41-9bcb-4111-8138-8a316e639a90","isActive":false,"balance":"$1,508.80","picture":"http://placehold.it/32x32","age":38,"eyeColor":"green","name":"Hart Webster","gender":"male","company":"VIRVA","email":"hartwebster@virva.com","phone":"+1 (942) 507-3248","address":"176 Division Place, Linganore, Wyoming, 9090","about":"Cillum labore aliquip sint amet in sit. Consectetur tempor et elit reprehenderit aliquip eu veniam irure excepteur Lorem sint irure. Ea reprehenderit pariatur cupidatat est in esse. Exercitation exercitation aliqua veniam cupidatat consequat. Labore velit commodo ad est eiusmod culpa consectetur ex anim deserunt sunt.\r\n","registered":"2014-06-17T11:26:55 +05:00","latitude":-22.974563,"longitude":39.583652,"tags":["aute","deserunt","nostrud","labore","veniam","dolore","nulla"],"friends":[{"id":0,"name":"Rena Garrett"},{"id":1,"name":"Wilkins Gonzalez"},{"id":2,"name":"Mandy Jennings"}],"greeting":"Hello, Hart Webster! You have 8 unread messages.","favoriteFruit":"apple"}];

const jsonParts = divideJsonToStrings(eljson, 400);
const newJson = joinStringsToJson(jsonParts);

console.log(jsonParts);
