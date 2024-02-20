function Team(nickname, city){
    this.nickname = nickname;
    this.city = city;
    this.name = `${this.city} ${this.nickname}`;
}

Team.prototype.sayName = function(){
    console.log(`${this.name}`);
}

function Game(hometeam, awayteam){
    this.hometeam = hometeam;
    this.awayteam = awayteam;
    this.name = `${this.hometeam.city} ${this.hometeam.nickname} vs. ${this.awayteam.city} ${this.awayteam.nickname}`
}

function Player(firstname, lastname, team, pos){
    this.firstname = firstname;
    this.lastname = lastname;
    this.team = team;
    this.pos = pos;
    this.name = `${this.firstname} ${this.lastname}`;
}

Player.prototype.info = function(){
    console.log(`${this.name} ${this.pos} ${this.team.name}`);
}

Object.setPrototypeOf(Game.prototype, Team.prototype);
Object.setPrototypeOf(Player.prototype, Team.prototype);

const atlantaFalcons = new Team('Falcons', 'Atlanta');
const buffaloBills = new Team('Bills', 'Buffalo');

const game1 = new Game(atlantaFalcons, buffaloBills);

const player1 = new Player('Josh', 'Allen', buffaloBills, 'QB');

atlantaFalcons.sayName();
game1.sayName();
player1.sayName();
player1.info();
