let cluster = document.getElementsByClassName("cluster")[0];

for (i = 0; i < dtfLoad.length; i++) {
    let progress = 100 / dtfLoad[i][2][1] * dtfLoad[i][2][0];
    console.log(progress);
    cluster.innerHTML += `
        <div class="cell">
            <a class="img"      href="img/${dtfLoad[i][0]}" style="background-image: url(img/${dtfLoad[i][0]})"></a>
            <div class="name"   >${dtfLoad[i][1]}</div>
            <div class="status" >${dtfLoad[i][2][0]} / ${dtfLoad[i][2][1]}</div>
            <div class="time"   >${dtfLoad[i][3].toFixed(1)} ч.</div>
        </div>
        <div class="progress">
            <div style="width: ${progress}%;"></div>
            <b>напечатоно ${progress.toFixed(0)}% до окончания ~${timeOne(dtfLoad[i][3], dtfLoad[i][2][1], dtfLoad[i][2][0])} ч</b>
        </div>
`;
};

function timeOne(time, target, ready) {
    let timeAll = time;
    let timeOne = timeAll / target;
    let timeReady = timeOne * (target - ready);
    
    return timeReady.toFixed(1);
}


let = allTime = 0;

for (i = 0; i < dtfLoad.length; i++) {
    allTime += dtfLoad[i][3]
}

cluster.innerHTML += `Всего времени печати ${allTime.toFixed(1)} ч.`
