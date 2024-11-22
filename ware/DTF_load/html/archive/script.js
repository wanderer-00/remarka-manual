let cluster = document.getElementsByClassName('cluster')[0];

for(i=0;i<dtfLoad.length;i++){
    cluster.innerHTML += `
<div class="cell">
    <div class="img" style="background-image: url(../../img/${dtfLoad[i][0]})"></div>
    <p>${dtfLoad[i][1]}</p>
</div>`
}