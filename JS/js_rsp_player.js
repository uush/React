function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rspPlayer(userRsp) {
  const rsp = ["가위", "바위", "보"];
  const playerRsp = rsp[getRandomInteger(0, 2)];

  if (userRsp == playerRsp) {
    //비겼을 때
    return {
      userRsp: userRsp,
      playerRsp: playerRsp,
      winner: 0,
    };
  } else if (userRsp == "가위") {
    //user가 가위를 냈을 때
    if (playerRsp == "보") {
      return {
        userRsp: userRsp,
        playerRsp: playerRsp,
        winner: 1,
      };
    } else {
      return {
        userRsp: userRsp,
        playerRsp: playerRsp,
        winner: -1,
      };
    }
  } else if (userRsp == "바위") {
    if (playerRsp == "가위") {
      return {
        userRsp: userRsp,
        playerRsp: playerRsp,
        winner: 1,
      };
    } else {
      return {
        userRsp: userRsp,
        playerRsp: playerRsp,
        winner: -1,
      };
    }
  } else {
    //user가 보를 냈을 때
    if (playerRsp == "바위") {
      return {
        userRsp: userRsp,
        playerRsp: playerRsp,
        winner: 1,
      };
    } else {
      return {
        userRsp: userRsp,
        playerRsp: playerRsp,
        winner: -1,
      };
    }
  }
}

function rspPlayer2(userRsp) {
  const rsp = ["가위", "바위", "보"];
  const playerRsp = rsp[getRandomInteger(0, 2)];
  const winValue = {
    가위: "보",
    바위: "가위",
    보: "바위",
  };

  return {
    userRsp: userRsp,
    playerRsp: playerRsp,
    winner: userRsp == playerRsp ? 0 : winValue[userRsp] == playerRsp ? 1 : -1,
  };
}
