// Car Racing Game
class CarRacingGame {
    constructor() {
        this.canvas = document.getElementById('gameCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.scoreElement = document.getElementById('score');
        this.gameOverElement = document.getElementById('gameOver');
        this.finalScoreElement = document.getElementById('finalScore');
        
        this.setupCanvas();
        this.initGame();
        this.setupControls();
        this.gameLoop();
    }

    setupCanvas() {
        // Make canvas responsive
        const resizeCanvas = () => {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
            this.canvasWidth = this.canvas.width;
            this.canvasHeight = this.canvas.height;
            
            // Calculate lane positions and car size
            this.laneWidth = this.canvasWidth * 0.4; // 40% of screen width for road
            this.laneCenter = this.canvasWidth / 2;
            this.leftLaneX = this.laneCenter - this.laneWidth / 4;
            this.rightLaneX = this.laneCenter + this.laneWidth / 4;
            
            // Car size should be ~15% of screen width
            this.carWidth = this.canvasWidth * 0.15;
            this.carHeight = this.carWidth * 1.8; // Make cars taller than wide
        };
        
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
    }

    initGame() {
        this.gameRunning = true;
        this.score = 0;
        this.playerLane = 0; // 0 = left, 1 = right
        this.targetLane = 0;
        this.laneTransition = 0; // For smooth movement between lanes
        
        // Player car position
        this.playerY = this.canvasHeight - this.carHeight - 50;
        this.playerX = this.leftLaneX;
        
        // Enemy cars
        this.enemies = [];
        this.enemySpeed = 3;
        this.enemySpawnRate = 0.02; // Probability per frame
        this.lastEnemySpawn = 0;
        
        // Difficulty progression
        this.difficultyTimer = 0;
        this.maxEnemySpeed = 8;
        this.maxSpawnRate = 0.08;
        
        // Road animation
        this.roadOffset = 0;
    }

    setupControls() {
        // Keyboard controls
        document.addEventListener('keydown', (e) => {
            if (!this.gameRunning) {
                if (e.code === 'Space') {
                    this.restartGame();
                }
                return;
            }
            
            switch(e.code) {
                case 'ArrowLeft':
                case 'KeyA':
                    this.moveLeft();
                    break;
                case 'ArrowRight':
                case 'KeyD':
                    this.moveRight();
                    break;
            }
        });

        // Touch controls for mobile
        this.canvas.addEventListener('touchstart', (e) => {
            e.preventDefault();
            if (!this.gameRunning) return;
            
            const touch = e.touches[0];
            const rect = this.canvas.getBoundingClientRect();
            const touchX = touch.clientX - rect.left;
            
            if (touchX < this.canvasWidth / 2) {
                this.moveLeft();
            } else {
                this.moveRight();
            }
        });

        // Prevent context menu on mobile
        this.canvas.addEventListener('contextmenu', (e) => e.preventDefault());
    }

    moveLeft() {
        this.targetLane = 0;
    }

    moveRight() {
        this.targetLane = 1;
    }

    updatePlayerPosition() {
        // Smooth transition between lanes
        const transitionSpeed = 0.15;
        if (this.playerLane !== this.targetLane) {
            if (this.targetLane === 0) {
                this.laneTransition = Math.max(0, this.laneTransition - transitionSpeed);
            } else {
                this.laneTransition = Math.min(1, this.laneTransition + transitionSpeed);
            }
            
            if (Math.abs(this.laneTransition - this.targetLane) < 0.01) {
                this.laneTransition = this.targetLane;
                this.playerLane = this.targetLane;
            }
        }
        
        // Calculate player X position based on transition
        this.playerX = this.leftLaneX + (this.rightLaneX - this.leftLaneX) * this.laneTransition;
    }

    spawnEnemy() {
        const now = Date.now();
        if (now - this.lastEnemySpawn > 1000 && Math.random() < this.enemySpawnRate) {
            const lane = Math.random() < 0.5 ? 0 : 1;
            const x = lane === 0 ? this.leftLaneX : this.rightLaneX;
            
            this.enemies.push({
                x: x,
                y: -this.carHeight,
                lane: lane,
                speed: this.enemySpeed + Math.random() * 2
            });
            
            this.lastEnemySpawn = now;
        }
    }

    updateEnemies() {
        for (let i = this.enemies.length - 1; i >= 0; i--) {
            const enemy = this.enemies[i];
            enemy.y += enemy.speed;
            
            // Remove enemies that are off screen
            if (enemy.y > this.canvasHeight) {
                this.enemies.splice(i, 1);
                this.score += 10; // Score for avoiding an enemy
            }
        }
    }

    checkCollisions() {
        const playerCenterX = this.playerX;
        const playerCenterY = this.playerY + this.carHeight / 2;
        
        for (const enemy of this.enemies) {
            const enemyCenterX = enemy.x;
            const enemyCenterY = enemy.y + this.carHeight / 2;
            
            const distance = Math.sqrt(
                Math.pow(playerCenterX - enemyCenterX, 2) + 
                Math.pow(playerCenterY - enemyCenterY, 2)
            );
            
            // Collision if cars are close enough
            if (distance < this.carWidth * 0.7) {
                this.gameOver();
                return;
            }
        }
    }

    updateDifficulty() {
        this.difficultyTimer++;
        
        // Increase difficulty every 300 frames (about 5 seconds at 60fps)
        if (this.difficultyTimer % 300 === 0) {
            this.enemySpeed = Math.min(this.maxEnemySpeed, this.enemySpeed + 0.5);
            this.enemySpawnRate = Math.min(this.maxSpawnRate, this.enemySpawnRate + 0.005);
        }
    }

    drawRoad() {
        // Draw road background
        this.ctx.fillStyle = '#333333';
        const roadLeft = this.laneCenter - this.laneWidth / 2;
        const roadRight = this.laneCenter + this.laneWidth / 2;
        this.ctx.fillRect(roadLeft, 0, this.laneWidth, this.canvasHeight);
        
        // Draw lane divider (animated)
        this.ctx.strokeStyle = '#FFFF00';
        this.ctx.lineWidth = 4;
        this.ctx.setLineDash([20, 20]);
        this.ctx.lineDashOffset = this.roadOffset;
        
        this.ctx.beginPath();
        this.ctx.moveTo(this.laneCenter, 0);
        this.ctx.lineTo(this.laneCenter, this.canvasHeight);
        this.ctx.stroke();
        
        this.roadOffset += 3; // Animate road
        if (this.roadOffset > 40) this.roadOffset = 0;
        
        // Draw road edges
        this.ctx.setLineDash([]);
        this.ctx.strokeStyle = '#FFFFFF';
        this.ctx.lineWidth = 6;
        this.ctx.beginPath();
        this.ctx.moveTo(roadLeft, 0);
        this.ctx.lineTo(roadLeft, this.canvasHeight);
        this.ctx.moveTo(roadRight, 0);
        this.ctx.lineTo(roadRight, this.canvasHeight);
        this.ctx.stroke();
    }

    drawCar(x, y, color = '#FF0000') {
        // Car body
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x - this.carWidth/2, y, this.carWidth, this.carHeight);
        
        // Car windows
        this.ctx.fillStyle = '#87CEEB';
        const windowWidth = this.carWidth * 0.7;
        const windowHeight = this.carHeight * 0.3;
        this.ctx.fillRect(x - windowWidth/2, y + this.carHeight * 0.1, windowWidth, windowHeight);
        
        // Wheels
        this.ctx.fillStyle = '#000000';
        const wheelRadius = this.carWidth * 0.15;
        const wheelOffset = this.carWidth * 0.3;
        
        // Front wheels
        this.ctx.beginPath();
        this.ctx.arc(x - wheelOffset, y + this.carHeight * 0.8, wheelRadius, 0, Math.PI * 2);
        this.ctx.arc(x + wheelOffset, y + this.carHeight * 0.8, wheelRadius, 0, Math.PI * 2);
        this.ctx.fill();
        
        // Rear wheels
        this.ctx.beginPath();
        this.ctx.arc(x - wheelOffset, y + this.carHeight * 0.2, wheelRadius, 0, Math.PI * 2);
        this.ctx.arc(x + wheelOffset, y + this.carHeight * 0.2, wheelRadius, 0, Math.PI * 2);
        this.ctx.fill();
    }

    drawPlayer() {
        this.drawCar(this.playerX, this.playerY, '#0066FF');
    }

    drawEnemies() {
        for (const enemy of this.enemies) {
            this.drawCar(enemy.x, enemy.y, '#FF0000');
        }
    }

    updateScore() {
        this.score += 1; // Continuous score for staying alive
        this.scoreElement.textContent = `Pontuação: ${this.score}`;
    }

    gameOver() {
        this.gameRunning = false;
        this.finalScoreElement.textContent = `Pontuação: ${this.score}`;
        this.gameOverElement.classList.remove('hidden');
    }

    restartGame() {
        this.gameOverElement.classList.add('hidden');
        this.initGame();
    }

    update() {
        if (!this.gameRunning) return;
        
        this.updatePlayerPosition();
        this.spawnEnemy();
        this.updateEnemies();
        this.checkCollisions();
        this.updateDifficulty();
        this.updateScore();
    }

    draw() {
        // Clear canvas
        this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        
        this.drawRoad();
        this.drawEnemies();
        this.drawPlayer();
    }

    gameLoop() {
        this.update();
        this.draw();
        requestAnimationFrame(() => this.gameLoop());
    }
}

// Start game when page loads
document.addEventListener('DOMContentLoaded', () => {
    new CarRacingGame();
});