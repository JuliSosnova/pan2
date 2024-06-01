window.onload=function(){
const a = [
  [0 ,1, 1, 0, 0],
  [1 ,0 ,0 ,1 ,1],
  [1 ,0 ,0 ,0 ,0],
  [0 ,1, 0 ,0, 0],
  [0 ,1 ,0 ,0 ,0]
];
const graphDrawer = new GraphRenderer(a);

document.getElementById("solve").addEventListener("click", FindBFS);
function FindBFS(){
    graphDrawer.drawGraph();
    const node= document.getElementById("node").value;
    graphDrawer.drawFS(graphDrawer.bfs(node-1));
}

}
