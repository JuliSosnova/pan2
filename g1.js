window.onload=function(){
/*const a = [
    [0 ,1, 1, 0, 0],
    [1 ,0 ,0 ,1 ,1],
    [1 ,0 ,0 ,0 ,0],
    [0 ,1, 0 ,0, 0],
    [0 ,1 ,0 ,0 ,0]
  ];*/
  const a= [
    [0, 1, 1, 0, 0, 0],
    [1, 0, 0, 1, 0, 0],
    [1, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 1, 0]
  ];
  const graphDrawer = new GraphRenderer(a);
 
  document.getElementById("solve").addEventListener("click", FindDFS);
  function FindDFS(){
    const node= document.getElementById("node").value;
    if(a.length>node){
      graphDrawer.drawGraph();
      graphDrawer.drawFS(graphDrawer.bfs(node-1));
      aud();
    }
    else{
      alert('bred ne vvodi');
    }
  }
  alert(graphDrawer.findComponents());

}
  /*function aud(){
    alert('fff');
      var fly = new Audio();
  fly.src = "D:/Системные/Desktop/graph/g/src/brrrr.mp3";*/
  
  