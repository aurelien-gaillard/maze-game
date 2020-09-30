class Game {
    constructor() {
        this.state = 'waiting'
    }

    render() {
        const startArea = document.createElement('div')
        startArea.className = 'start'
        startArea.textContent = 'START'
        startArea.addEventListener('mouseenter', () => {
            this.state = 'started'
            this.update()
            const endArea = document.querySelector('.end')
            endArea.style.display = 'flex'
        })

        const endArea = document.createElement('div')
        endArea.className = 'end'
        endArea.textContent = 'END'
        endArea.addEventListener('mouseenter', () => {
            if (this.state==='started') {
            this.state = 'victory'
            this.update()
            }
        })       
        return [startArea, endArea]
    }

    mount(parent) {
        this.render().forEach(element => {
            this.block = element
            parent.appendChild(this.block)
        })
        this.addObstacle()
        this.update()
    }

    update() {
        const h1 = document.querySelector('h1')
        h1.textContent = `Game Status: ${this.state}`
    }

    addObstacle() {
        const obs = new Obstacle
        obs.mount(body)
    }
}

class Obstacle {

    render() {
        const obstacle = document.createElement('div')
        obstacle.className = 'obstacle'
        obstacle.textContent = 'OBSTACLE'
        obstacle.addEventListener('mouseenter', () => {
            console.log('test')
            if (game.state==='started') {
            game.state = 'lost'
            game.update()
            const endArea = document.querySelector('.end')
            endArea.style.display = 'none'
            }
        })   
        return obstacle
    }
    mount(parent) {
        this.element = this.render();
        parent.appendChild(this.element);
        // this.update();
    }
}


const body = document.querySelector('body')
const game = new Game
game.mount(body)