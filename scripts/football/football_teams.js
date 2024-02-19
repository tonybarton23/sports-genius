function Team(nickname, city){
    this.nickname = nickname;
    this.city = city;
}

const atlantaFalcons = new Team('Falcons', 'Atlanta');
const buffaloBills = new Team('Bills', 'Buffalo')

console.log(`${atlantaFalcons.city} ${atlantaFalcons.nickname} vs. ${buffaloBills.city} ${buffaloBills.nickname}`);