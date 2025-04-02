let cluster = document.getElementsByClassName("cluster")[0];

for (i = 0; i < dtfLoad.length; i++) {
    let progress = 100 / dtfLoad[i][2][1] * dtfLoad[i][2][0];

    cluster.innerHTML += `
        <div class="cell">
            <a class="img"      href="img/${dtfLoad[i][0]}" style="background-image: url(img/${dtfLoad[i][0]})"></a>
            <div class="name"   >${dtfLoad[i][1]}</div>
            <div class="status" >${dtfLoad[i][2][0]} / ${dtfLoad[i][2][1]}<hr>${status(dtfLoad[i][4])}</div>
            <div class="time"   >${dtfLoad[i][3].toFixed(1)} ч.</div>
        </div>
        <div class="progress">
            <div style="width: ${progress}%;"></div>
            <b>${progress.toFixed(0)}% ${timeOne(dtfLoad[i][3], dtfLoad[i][2][1], dtfLoad[i][2][0], progress)}</b>
        </div>`;
};

// статус заказа
function status(code) {
    if (code == 0) {
        return '<div style="color: purple">ожидание</div>'
    } else if (code == 1) {
        return '<div style="color: orange">печатается</div>'
    } else if (code == 2) {
        return '<div style="color: blue">на соглосовании</div>'
    } else if (code == 3) {
        return '<div style="color: green">готово</div>'
    }
}

// расчет оставшегося времени печати заказа
function timeOne(time, target, ready, progress) {
    let timeAll = time;
    let timeOne = timeAll / target;
    let timeReady = timeOne * (target - ready);
    
    // проверка закончен ли заказ
    if( progress == 100 || progress == 0 ){return ' '}
    else {return `~${timeReady.toFixed(1)} ч`}
}


let  allTime = 0;

for (i = 0; i < dtfLoad.length; i++) {
    allTime += dtfLoad[i][3] - timeOne(dtfLoad[i][3], dtfLoad[i][2][1], dtfLoad[i][2][0])
}

cluster.innerHTML += `Всего времени печати ${allTime.toFixed(1)} ч.`
