let cluster = document.getElementsByClassName('cluster')[0];

for(i=0;i<dtfLoad.length;i++){
    cluster.innerHTML += `
<div class="cell">
    <img src="${dtfLoad[i][0]}">
    <div>${dtfLoad[i][1]}</div>
</div>`
}