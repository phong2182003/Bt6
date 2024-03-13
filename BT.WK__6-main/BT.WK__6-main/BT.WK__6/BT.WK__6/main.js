var Arr=[

]

function save(Fullname_Customers,Id_Pro,Name_Pro,Quanity_Pro,Price_Pro){
    console.log(Fullname_Customers,Id_Pro,Name_Pro,Quanity_Pro,Price_Pro)
    a={
        Fullname_Customers: Fullname_Customers,
        Id_Pro: Id_Pro,
        Name_Pro: Name_Pro,
        Quanity_Pro: Quanity_Pro,
        Price_Pro: Price_Pro
    }
    Arr.push(a)
    console.log(Arr)

}
function show(){
    var demo = ''
    for(i=0; i<Arr.length;i++){
        var n = i
        n++
        demo += '<tr>'      
        demo += '  <th scope="row">'+(n)+'</th>'      
        demo += '  <td>'+Arr[i].Fullname_Customers+'</td>'      
        demo += '  <td>'+Arr[i].Id_Pro+'</td>'      
        demo += '  <td>'+Arr[i].Name_Pro+'</td>'      
        demo += '  <td>'+Arr[i].Quanity_Pro+'</td>'      
        demo += '  <td>'+Arr[i].Price_Pro+'</td>'      
        demo += '  <td>'+Arr[i].Quanity_Pro * Arr[i].Price_Pro+'</td>'      
        demo += '</tr>'      
    }
    document.getElementById('result').innerHTML = demo
}
function reset(){
    document.getElementById("Fullname_Customers").value = ''
    document.getElementById("Id_Pro").value = ''
    document.getElementById("Name_Pro").value = ''
    document.getElementById("Quanity_Pro").value = ''
    document.getElementById("Price_Pro").value = ''
}