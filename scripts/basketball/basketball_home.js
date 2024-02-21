function createNBATeam (city, nickname) {
    const name = `${city} ${nickname}`;
    let win = 0;
    let loss = 0;

    const getWinLoss = () => `${win}-${loss}`;
    const giveWin = (currentWins) => win = win+currentWins;
    const giveLoss = (currentLoss) => loss = loss+currentLoss;


    return {city, nickname, name, getWinLoss, giveWin, giveLoss};
}

const atlantaHawks = createNBATeam('Atlanta', 'Hawks');
atlantaHawks.giveWin(10);
atlantaHawks.giveLoss(13);

console.log(`${atlantaHawks.name} ${atlantaHawks.getWinLoss()}`);