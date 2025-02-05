alert('🏗️ Микросервис пока в разработке. Ожидание полного функционала неразумно.');

let cluster = document.getElementById('cluster');

for (i = 0; i < 2; i++) {
    cluster.innerHTML += `
    <div class="cell" style="background-color:${dataDTF[i].COLOR}">
        <div class="img" style="background-image: url(../../img/${dataDTF[i].ARTICLE}.${dataDTF[i].ICONTYPE})"></div>
        <details>
            <summary>More Info</summary>
                <p>Артикул: ${dataDTF[i].ARTICLE}</p>
                <p>Номер работы: ${dataDTF[i].WORK}</p>
                <p>Клиент: ${dataDTF[i].CLIENT}</p>
                <p>${dataDTF[i].PRODUCT}</p>
                <p>Количество: ${dataDTF[i].QUANTITY} шт</p>
                <p>${dataDTF[i].NOTE}</p>
                <p>Размер: ${dataDTF[i].SIZE}</p>
                <p>Срок: ${dataDTF[i].TERM}</p>
                <p>Выполнен: ${dataDTF[i].COMPLETED}</p>
                <p>Трата плёнки: <font style="color:green">${dataDTF[i].PET[0]}</font> / <font style="color:red">${dataDTF[i].PET[1]}</font> mm</p>
                <p>Стоимость: ${dataDTF[i].PRICE} ₽</p>
        </details>
    </div>
`
};
