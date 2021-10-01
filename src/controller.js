const { response, request } = require("express");
const axios = require("axios");
const map = new Map();
axios
.get(
  "https://gist.githubusercontent.com/jhonatan89/bc554ec3ded15407609714e8b7b8f1c8/raw/5ab1e3e5b45e99aabcbbdd30f55d2ae5eafb9cbe/nba-players"
)
.then((response) => {
  players = response.data.values;
  players.forEach((element) => {
    map.set(element.first_name +" " + element.last_name, Math.floor((element.h_meters * 39.37)));
  });
})
.catch((error) => {
  console.log(error);
});

const getPairsOfPlayers = async (req = request, resp = response, next) => {
  //Implementar logica aquí
  let input = req.query.input;
  let res = [];
  map.forEach((value1, key1) => {
      map.forEach((value2, key2)=>{
        if((input-value1)==value2 ){
          res.push({ first_player: key1, second_player: key2});
        }
      })
      
     
    });
  return resp.json(res);
};

module.exports = { getPairsOfPlayers };
