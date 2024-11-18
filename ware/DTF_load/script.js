let cluster = document.getElementsByClassName("cluster")[0];

for (i = 0; i < dtfLoad.length; i++) {
    cluster.innerHTML += `
        <div>
            <a class="img"      href="img/${dtfLoad[i][0]}" style="background-image: url(img/${dtfLoad[i][0]})"></a>
            <div class="name"   >${dtfLoad[i][1]}</div>
            <div class="status" >${dtfLoad[i][2][0]}/${dtfLoad[i][2][1]}</div>
            <div class="time"   >${dtfLoad[i][3].toFixed(1)} ч.</div>
        </div>
`;
};

let = allTime = 0;

for (i = 0; i < dtfLoad.length; i++) {
    allTime += dtfLoad[i][3]
}

cluster.innerHTML += `Всего времени печати ${allTime.toFixed(1)} ч.`
