var Arr = [
    {
        id: 1,
        User_Name: "Thuan",
        Password: "thuan123"
    },
    {
        id: 2,
        User_Name: "Nhi",
        Password: "nhi123"
    },
    {
        id: 3,
        User_Name: "Nhat",
        Password: "nhat123"
    },
    {
        id: 4,
        User_Name: "Lan",
        Password: "lan123"
    },
    {
        id: 5,
        User_Name: "Mai",
        Password: "mai123"
    },
    {
        id: 6,
        User_Name: "Tring",
        Password: "tring123"
    },
    {
        id: 7,
        User_Name: "Phoutnai",
        Password: "phoutnai123"
    },
]
function demo(name_user, pass){
    var resul = Boolean
    for(i=0; i<Arr.length; i++){
        if(name_user == Arr[i].User_Name){
            if(pass == Arr[i].Password){
                resul = true
                break;
            }else{
                resul = false;
                continue;
            }
        }else{
            resul = false;
            continue;
        }
    }
    if(resul == true){
        document.write("<b> trang chu </b>")
    }else{
        alert("Ten nguoi hoac mat khau khong chinh sac")
    }
}
function Clear(){
    document.getElementById("name_user").value = ''
    document.getElementById("pass").value = ''
}
