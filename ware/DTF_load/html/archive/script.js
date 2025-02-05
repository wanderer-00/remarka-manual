let cluster = document.getElementById('cluster');

for (i = 0; i < 2; i++) {
    cluster.innerHTML += `
<div class="cell" style="background-color:${dataDTF[i].COLOR}">
    <div class="img" style="background-image: url(../../img/${dataDTF[i].ARTICLE}.${dataDTF[i].ICONTYPE})"></div>
    <details>
        <summary>More Info</summary>
            <p>${dataDTF[i].ARTICLE}</p>
            <p>${dataDTF[i].WORK}</p>
            <p>${dataDTF[i].CLIENT}</p>
            <p>${dataDTF[i].PRODUCT}</p>
            <p>${dataDTF[i].QUANTITY}</p>
            <p>${dataDTF[i].TERM}</p>
            <p>${dataDTF[i].NOTE}</p>
    </details>
</div>
`
};
