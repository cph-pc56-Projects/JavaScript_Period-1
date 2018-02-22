var array = ["Lars", "Jan", "Peter", "Bo", "Frederik"];

function namesToHTML() {
    var text = "";
    text +="<ul>";
    text += array.map((name) => {
        return "<li>" + name + "</li>"
    }).join("");
    text += "</ul>";

    document.getElementById('names').innerHTML = text;
}


var names = [{name:"Lars",phone:"1234567"}, {name: "Peter",phone: "675843"}, {name: "Jan", phone: "98547"},{name: "Bo", phone: "79345"}];

function objectsToTable() {
    var texted = '';
    texted += '<table><tr> <th>Name</th> <th>Phone</th> </tr>';
    texted += names.map((object) => {
        return '<tr>' +'<td>'+object.name+'<td>' +'<td>'+object.phone+'<td>' +'</tr>'
    }).join('');
    texted += '</table>';

    document.getElementById('table').innerHTML = texted;
}

function filterList() {
    var text = "";
    text +="<ul>";
    var filtered = array.filter((x) => x.length > 3);
    text += filtered.map((name) => {
        return "<li>" + name + "</li>"
    }).join("");
    text += "</ul>";

    
    document.getElementById('names').innerHTML = text;
}

function filterTable() {
    
    var text = names.filter((o) => {
        return o.name.length > 3;
    })
    var htmled = '<table><tr> <th>Name</th> <th>Phone</th> </tr>';
    htmled += text.map((object) => {
        return '<tr>' +'<td>'+object.name+'<td>' +'<td>'+object.phone+'<td>' +'</tr>'
    }).join('');
    htmled += '</table>';

    document.getElementById('table').innerHTML = htmled;
}
// console.log(filterList());
document.getElementById("btn").onclick = namesToHTML;
document.getElementById('btn2').onclick = objectsToTable;
document.getElementById('btn3').onclick = filterTable;
document.getElementById('btn4').onclick = filterList;