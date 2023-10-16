class Game{
    constructor(){
        this.turn = 'x';
        this.p1 = document.getElementById('p1');
        this.p2 = document.getElementById('p2');
        this.currentTurn = document.getElementById('currentTurn');
    }
    start(){
        document.getElementById('form').style.display = 'none';
        document.getElementById('game-board').style.display = 'block';

        this.p1.innerText = document.getElementById('player1').value;
        this.p2.innerText = document.getElementById('player2').value;
        game.currentTurn.innerText = game.p1.innerText; 
        document.getElementById('currentTurnH').style.display = 'flex';

        new Board;
    }
}   

class Board {
    constructor(){
        this.a1 = document.getElementById('a1');
        this.a2 = document.getElementById('a2');
        this.a3 = document.getElementById('a3');
        this.b1 = document.getElementById('b1');
        this.b2 = document.getElementById('b2');
        this.b3 = document.getElementById('b3');
        this.c1 = document.getElementById('c1');
        this.c2 = document.getElementById('c2');
        this.c3 = document.getElementById('c3');
        this.spaces = [this.a1,
            this.a2,
            this.a3,
            this.b1,
            this.b2,
            this.b3,
            this.c1,
            this.c2,
            this.c3];
        this.spaces.push()
        this.addEvent();
    }

    addEvent(){
        this.a1.addEventListener('click', () => this.mark(this.a1));
        this.a2.addEventListener('click', () => this.mark(this.a2));
        this.a3.addEventListener('click', () => this.mark(this.a3));
        this.b1.addEventListener('click', () => this.mark(this.b1));
        this.b2.addEventListener('click', () => this.mark(this.b2));
        this.b3.addEventListener('click', () => this.mark(this.b3));
        this.c1.addEventListener('click', () => this.mark(this.c1));
        this.c2.addEventListener('click', () => this.mark(this.c2));
        this.c3.addEventListener('click', () => this.mark(this.c3));
    }

    mark(space){
        if(game.turn == 'x' && space.style.backgroundImage == ''){
            space.style.backgroundImage = 'url("Images/x.png")';
            game.turn = 'o';
            game.currentTurn.innerText = game.p2.innerText;
        }else if(game.turn == 'o' && space.style.backgroundImage == ''){
            space.style.backgroundImage = 'url("Images/o-300x300.png")';
            game.turn = 'x';  
            game.currentTurn.innerText = game.p1.innerText;  
        }

        this.win();
    }

    win(){
        if(this.a1.style.backgroundImage == this.a2.style.backgroundImage && 
            this.a1.style.backgroundImage == this.a3.style.backgroundImage &&
            this.a1.style.backgroundImage != ''){this.makeReset(this.a1.style.backgroundImage); this.winGame(this.a1.style.backgroundImage);}

        else if(this.b1.style.backgroundImage == this.b2.style.backgroundImage && 
            this.b1.style.backgroundImage == this.b3.style.backgroundImage &&
            this.b1.style.backgroundImage != ''){this.makeReset(this.b1.style.backgroundImage); this.winGame(this.b1.style.backgroundImage);}

        else if(this.c1.style.backgroundImage == this.c2.style.backgroundImage && 
            this.c1.style.backgroundImage == this.c3.style.backgroundImage &&
            this.c1.style.backgroundImage != ''){this.makeReset(this.c1.style.backgroundImage); this.winGame(this.c1.style.backgroundImage);}

        else if(this.a1.style.backgroundImage == this.b1.style.backgroundImage && 
            this.a1.style.backgroundImage == this.c1.style.backgroundImage &&
            this.a1.style.backgroundImage != ''){this.makeReset(this.a1.style.backgroundImage); this.winGame(this.a1.style.backgroundImage);}

        else if(this.a2.style.backgroundImage == this.b2.style.backgroundImage && 
            this.a2.style.backgroundImage == this.c2.style.backgroundImage &&
            this.a2.style.backgroundImage != ''){this.makeReset(this.a2.style.backgroundImage); this.winGame(this.a2.style.backgroundImage);}

        else if(this.a3.style.backgroundImage == this.b3.style.backgroundImage && 
            this.a3.style.backgroundImage == this.c3.style.backgroundImage &&
            this.a3.style.backgroundImage != ''){this.makeReset(this.a3.style.backgroundImage); this.winGame(this.a3.style.backgroundImage);}

        else if(this.a1.style.backgroundImage == this.b2.style.backgroundImage && 
            this.a1.style.backgroundImage == this.c3.style.backgroundImage &&
            this.a1.style.backgroundImage != ''){this.makeReset(this.a1.style.backgroundImage); this.winGame(this.a1.style.backgroundImage);}

        else if(this.a3.style.backgroundImage == this.b2.style.backgroundImage && 
            this.c1.style.backgroundImage == this.a3.style.backgroundImage &&
            this.a3.style.backgroundImage != ''){this.makeReset(this.a3.style.backgroundImage); this.winGame(this.a3.style.backgroundImage);}

        else if(this.a1.style.backgroundImage != '' &&
        this.a2.style.backgroundImage != '' &&
        this.a3.style.backgroundImage != '' &&
        this.b1.style.backgroundImage != '' &&
        this.b2.style.backgroundImage != '' &&
        this.b3.style.backgroundImage != '' &&
        this.c1.style.backgroundImage != '' &&
        this.c2.style.backgroundImage != '' &&
        this.c3.style.backgroundImage != ''){this.makeReset('tie'); this.tieGame();}

    }

    makeReset(winner){
        let reset = document.createElement('button');
        reset.innerText = 'Reset';
        reset.addEventListener('click', () => {
            console.log(document.getElementsByClassName('gameSpace').style);
            for(let space of this.spaces){
                space.style.backgroundImage = '';
            }
            if(winner == 'tie'){
                document.getElementById('tie').remove();
            }else if(winner == 'url("Images/x.png")'){
                document.getElementById('X').remove();
            }else if(winner == 'url("Images/o-300x300.png")'){
                document.getElementById('O').remove();
            }
            reset.remove();

            
        })
        document.getElementById('game-board').append(reset);
    }

    tieGame(){
        let banner = document.createElement('div');
        banner.classList.add('alert', 'alert-primary', 'd-flex', 'justify-content-center');
        banner.innerText = 'Tie Game!';
        banner.setAttribute('id','tie');
        document.body.append(banner);
    }

    winGame(winner){
        let banner = document.createElement('div');
        banner.classList.add('alert', 'alert-primary', 'd-flex', 'justify-content-center');
        if(winner == 'url("Images/x.png")'){
            banner.innerText = 'X Wins!';
            banner.setAttribute('id','X');
        }else if(winner == 'url("Images/o-300x300.png")'){
            banner.innerText = 'O Wins!';
            banner.setAttribute('id','O');
        }
        

        
        document.body.append(banner);

    }
}

let button = document.getElementById('button');
let game = new Game;  
button.addEventListener('click', () => game.start());
