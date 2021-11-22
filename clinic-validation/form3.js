

validateForm2=()=>{
    let logForm = document.forms["formsheet"]; 
    let firstName = logForm["firstname"].value; 
    let middleName = logForm["middlename"].value; 
    let lastName = logForm["lastname"].value; 
    let birthDate = logForm["birthdate"].value;
    let addRess = logForm["address"].value;
    let addPattern = /^[a-zA-Z0-9\s,.'-]{10,}$/;
    let conTact = logForm["contact"].value;
    let conPattern = /^[0-9]{11,11}$/;
    let namePattern = /^[a-zA-Z]{1,}$/;



    //name validation
    if (!namePattern.test(firstName)) {
        alert ('Please Enter a Valid First Name in Alphabet Characters Only');
        logForm['firstname'].focus();
        return false;
    }
    else if (!namePattern.test(middleName)) {
        alert ('Please Enter a Valid Middle Name in Alphabet Characters Only');
        logForm['middlename'].focus();
        return false;
    }
    else if (!namePattern.test(lastName)) {
        alert ('Please Enter a Valid Last Name in Alphabet Characters Only');
        logForm['lastname'].focus();
        return false;
    }
    //address validation
    else if (!addPattern.test(addRess)) {
        alert ('Please Enter a Valid address of Minimum 10 Characters');
        logForm['address'].focus();
        return false;
    }
    //contact
    else if (!conPattern.test(conTact)) {
        alert ('Please Enter a Valid Contact in format 09xxxxxxx and all numeric');
        logForm['contact'].focus();
        return false;
    } 
    else if (birthDate==""){
        alert('Please Select Birtdate');
        logForm['birthdate'].focus();
       return false;
    } 
    //validation if the input fields are not empty
    if (firstName!=="" && middleName!=="" && lastName!=="") {
        alert("You Completed your Submission");
        return true; 
    }
        //for the radio button value
        function disAbled () {
            //alert('yes');
            let Yes = document.getElementById('Yes').checked;
            let meD = document.getElementById('desc');
    
            if (Yes) {
                meD.disabled = false;
            }
            else {
                meD.disabled = true;
            }
        }
}
  
    //for the local storage
    let formSheet = [];
    addFormSheet = (e) => {
        e.preventDefault();
        let formSheet2 = {
           firstName: document.formsheet.firstname.value, 
           middleName: document.formsheet.middlename.value, 
           lastName: document.formsheet.lastname.value, 
           genDer: document.formsheet.gender.value,
           birthDate: document.formsheet.birthdate.value,
           conTact: document.formsheet.contact.value,
           addRess: document.formsheet.address.value,
           Medhistory: document.formsheet.medhistory.value,
           Illness: document.formsheet.cure.value,
           SyspToms: document.formsheet.symptoms.value,
           medicaTions: document.formsheet.desc.value,

        }
        formSheet.push(formSheet2);
        console.table(formSheet) //display console
        document.querySelector("#display pre").innerHTML = "\n" +JSON.stringify(formSheet,null,2);
        document["formsheet"].reset();
        localStorage.setItem("forminfo", JSON.stringify(formSheet));
    }
    document.getElementById("checkForm").addEventListener("click", addFormSheet);

    getFormsheet = (e) => {
        e.preventDefault();

        let getFormarray = [];
        getFormarray = JSON.parse(localStorage.getItem("forminfo"));
        let getFormtable = document.getElementById("formTable");
        console.table (getFormarray);
        
        getFormarray.forEach((listForm, i) => {
            let listRow = getFormtable.insertRow(i+1);
            let y = 0;
            for (let content in listForm) {
                let listCol = listRow.insertCell(y);
                listCol.innerHTML = listForm[content];
                y++
            }
        })
    }
    document.getElementById("retriveForm").addEventListener("click", getFormsheet);
