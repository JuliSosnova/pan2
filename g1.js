window.onload=function(){
  document.getElementById("solve").addEventListener("click", FindDFS);
  function FindDFS(){
  let inputText = document.getElementById('matrix').value;
  let lines = inputText.split('\n');
  alert(lines)
  let adjacencyMatrix = [];
  for (let i = 0; i < lines.length; i++) {
    adjacencyMatrix[i] = [];
  }
  for (let i = 0; i < lines.length; i++) {
    let lineValues = lines[i].split(' '); 
    for (let j = 0; j < lineValues.length; j++) {
      adjacencyMatrix[i][j] = parseInt(lineValues[j]); 
    }
  }
  
  const graphDrawer = new GraphRenderer(adjacencyMatrix);
    graphDrawer.drawGraph();
      const node= document.getElementById("node").value;
      const visited = new Array(adjacencyMatrix.length).fill(false);
     // graphDrawer.drawFS(graphDrawer.dfs(node-1,visited));
  }
}
  
  