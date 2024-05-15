//класс рисует граф,заданный матрицей смежности
class GraphRenderer {
  constructor(matrix) {
    this.matrix = matrix;
    this.canvas = document.getElementById('graphCanvas');
    this.ctx = this.canvas.getContext('2d');
    this.centerX = this.canvas.width / 2;
    this.centerY = this.canvas.height / 2;
    this.radius = 100;
    this.numNodes = this.matrix.length;
  }

  drawGraph() {
    // Очищаем холст перед отрисовкой
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    let l=this.getCoordinates(this.centerX,this.centerY,this.radius,this.numNodes);
    let c='blue';
    // Рисует каждую вершину графа, передаются параметры х,у, с-цвет
    for (let i = 0; i < this.numNodes; i++) {
     this.drawNode(l[i].key,l[i].value ,c )
      
    }

    // Рисуем ребра графа,выссчитывая координаты
    for (let i = 0; i < this.numNodes; i++) {
      for (let j = 0; j < this.numNodes; j++) {
        if (this.matrix[i][j] === 1) {
          const startX = this.centerX + this.radius * Math.cos((2 * Math.PI * i) / this.numNodes);
          const startY = this.centerY + this.radius * Math.sin((2 * Math.PI * i) / this.numNodes);
          const endX = this.centerX + this.radius * Math.cos((2 * Math.PI * j) / this.numNodes);
          const endY = this.centerY + this.radius * Math.sin((2 * Math.PI * j) / this.numNodes);
          this.ctx.beginPath();
          this.ctx.moveTo(startX, startY);
          this.ctx.lineTo(endX, endY);
          this.ctx.strokeStyle = 'red';
          this.ctx.lineWidth = 2;
          this.ctx.stroke();
          this.ctx.closePath();
        }
      }
    }
  }
  //вычисление координат вершин
  getCoordinates(centerX,centerY,radius,numNodes){
    
    const pairs = [];
    for(let i=0;i<numNodes;i++){
      const angle = (2 * Math.PI * i) / numNodes;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      pairs.push({ key: x, value: y });
      //alert(x);
  }
    return pairs;

  }
  //рисовашка вершин
  drawNode(x,y,c ){
      this.ctx.beginPath();
      this.ctx.arc(x, y, 10, 0, 2 * Math.PI);
      this.ctx.fillStyle = c;
      this.ctx.fill();
      this.ctx.closePath();
  }
//обход в ширину для 3 задачи
  bfs(startNode) {
    const visited = new Array(this.matrix.length).fill(false);
  const queue = [];
  let l = this.getCoordinates(this.centerX, this.centerY, this.radius, this.numNodes);
  visited[startNode] = true;
  queue.push(startNode);
  const c = 'red';

  const processNode = () => {
    if (queue.length > 0) {
      const currentNode = queue.shift();

      // Обработка текущего узла
      console.log('Посещаем узел:', currentNode);

      this.drawNode(l[currentNode].key, l[currentNode].value, c);

      // Добавляем соседние непосещенные узлы в очередь
      for (let i = 0; i < this.matrix.length; i++) {
        if (this.matrix[currentNode][i] === 1 && !visited[i]) {
          visited[i] = true;
          queue.push(i);
        }
      }

      setTimeout(processNode, 2000); // Выполняем функцию processNode снова через 2 секунд
    }
  };

  processNode();
    
  }
}

//тест
const adjacencyMatrix = [
  [0, 1, 1, 0],
  [1, 0, 0, 1],
  [1, 0, 0, 1],
  [0, 1, 1, 0]
];

const graphDrawer = new GraphRenderer(adjacencyMatrix);
graphDrawer.drawGraph();
graphDrawer.bfs(0);

