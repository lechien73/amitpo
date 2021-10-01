let optima = {
    "o": 3.0,
    "p": 1.2,
    "t": 1.0,
    "i": 11.0,
    "m": 1.0,
    "a": 8.0,
    "wpm": 120
}

let configModal = new bootstrap.Modal(document.getElementById("configModal"));
let helpModal = new bootstrap.Modal(document.getElementById("helpModal"));

let fields = document.getElementsByClassName("form-control");

for (let field of fields) {
    field.addEventListener("change", recalculate);
}

document.getElementById("config").addEventListener("click", show);
document.getElementById("savebutton").addEventListener("click", save);
document.getElementById("help").addEventListener("click", () => {
    helpModal.show();
});

function recalculate() {

    let o_num = document.getElementById("o_num").value || 0;
    let o_len = document.getElementById("o_len").value || 0;
    let p_num = document.getElementById("p_num").value || 0;
    let p_len = document.getElementById("p_len").value || 0;
    let t_num = document.getElementById("t_num").value || 0;
    let t_len = document.getElementById("t_len").value || 0;
    let i_num = document.getElementById("i_num").value || 0;
    let i_len = document.getElementById("i_len").value || 0;
    let m_num = document.getElementById("m_num").value || 0;
    let m_len = document.getElementById("m_len").value || 0;
    let a_num = document.getElementById("a_num").value || 0;
    let a_len = document.getElementById("a_len").value || 0;
    let c_num = document.getElementById("c_num").value || 0;
    let c_len = document.getElementById("c_len").value || 0;

    let running_total = 0;
    running_total += o_num * o_len * optima.o;
    running_total += p_num * p_len * optima.p;
    running_total += (t_num * (t_len / optima.wpm) * optima.t);
    running_total += i_num * i_len * optima.i;
    running_total += m_num * m_len * optima.m;
    running_total += a_num * a_len * optima.a;
    running_total += c_num * c_len * optima.t;

    document.getElementById("totaltime").innerText = (running_total / 60).toFixed(2) + " hours";

}

function show() {
    document.getElementById("o").value = optima.o;
    document.getElementById("p").value = optima.p;
    document.getElementById("t").value = optima.t;
    document.getElementById("i").value = optima.i;
    document.getElementById("m").value = optima.m;
    document.getElementById("a").value = optima.a;
    document.getElementById("wpm").value = optima.wpm;
    configModal.show();
}

function save() {
    optima.o = parseFloat(document.getElementById("o").value);
    optima.p = parseFloat(document.getElementById("p").value);
    optima.t = parseFloat(document.getElementById("t").value);
    optima.i = parseFloat(document.getElementById("i").value);
    optima.m = parseFloat(document.getElementById("m").value);
    optima.a = parseFloat(document.getElementById("a").value);
    optima.wpm = parseFloat(document.getElementById("wpm").value);
    configModal.hide();
}
