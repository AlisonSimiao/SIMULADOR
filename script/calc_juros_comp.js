function juros_comp(C,i,t,mensal=0){
    let M;
    while(t > 0){
        M = C + (C*i);
        C = M+mensal;
        t--;
    }

   return M.toFixed(2);
}

const $btn = document.getElementById("btn");

$btn.addEventListener("click",(e)=>{
    const C = parseFloat( document.getElementById("text_vi").value);
    const i = document.getElementById("text_taxa").value/100;
    const t = parseInt( document.getElementById("text_periodo").value);
    const m = parseFloat( document.getElementById("text_vm").value);
    
    const span_final = document.querySelector("#telas > div:nth-child(1) > span");
    const span_total = document.querySelector("#telas > div:nth-child(2) > span");
    const span_juros = document.querySelector("#telas > div:nth-child(3) > span");

    var M     = juros_comp(C,i,t,m);
    var total = C+t*m;
    var juros = (M-total).toFixed(2);

    span_final.innerHTML = `R$ ${M}`;
    span_total.innerHTML = `R$ ${total}`;
    span_juros.innerHTML = `R$ ${juros}`;
});