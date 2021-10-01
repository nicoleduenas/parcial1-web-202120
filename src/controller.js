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
      map.set(element.first_name + element.last_name, element.h_meters * 39.37);
    });
  })
  .catch((error) => {
    console.log(error);
  });
const getPairsOfPlayers = async (req = request, resp = response, next) => {
  //Implementar logica aquí
  let input = request.query.input;
  let res = [];
  map.forEach((value, key) => {
    if (map.has(Math.abs(input - value))) {
      res.push({ first_player: key, second_player: map.get(input - value) });
    }
  });
  return resp.json(res);
};

module.exports = { getPairsOfPlayers };
