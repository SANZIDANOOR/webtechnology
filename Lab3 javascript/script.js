
var firstNames = [];
var lastNames = [];
var studentIds = [];
var emails = [];
var credits = [];
var departments = [];
var totalStudents = 0;
 
function validation() {
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var studentId = document.getElementById("studentId").value;
  var email = document.getElementById("email").value;
  var credit = document.getElementById("credit").value;
  var department = document.getElementById("department").value;
    
    
    let hasfirstNameError = true;
    let haslastNameError = true;
    let hasstudentIdError = true;
    let hasemailError = true;
    let hascreditError = true;
    let hasdepartmentError = true;

    


    

    if (firstName === "") {
    document.getElementById("firstNameError").innerHTML = "First name cannot be empty.";
        hasfnameError = true;
    
        } else {
        document.getElementById("firstnameError").innerHTML = "";
        hasfirstNameError = false;
    }

    if (lastName === "") {
    document.getElementById("lastNameError").innerHTML = "Last name cannot be empty.";
           haslastNameError = true;
    }
    else {
        document.getElementById("lastNameError").innerHTML = "";
        haslastNameError = false;
    }




    if (studentId === "" || studentId.indexOf("-") === -1) {
    document.getElementById("studentIdError").innerHTML = "Student ID must contain '-'.";
    
        studentIdError = true;
    } else {
        document.getElementById("studentIdError").innerHTML = "";
        studentIdError = false;
    }

    if (!email === "" || email.indexOf("@student.aiub.edu") === -1) {
        document.getElementById("emailError").innerHTML = "email must contain @student.aiub.edu ";
        hasemailError = true;
    } else {
        document.getElementById("emailError").innerHTML = "";
        hasemailError = false;
    }

    if (!credit ===" "  || isNaN(credit)|| Number(credit) < 0 || Number(credit) >= 148) {
        document.getElementById("creditError").innerHTML = "Credit must be 0 or more but less than 148.";
        hascreditError = true;
    } else {
        document.getElementById("creditError").innerHTML = "";
        hascreditError = false;
    }
    if (!department) {
        document.getElementById("departmentError").innerHTML = "Department is required.";
        hasdepartmentError = true;
    }else {
        document.getElementById("departmentError").innerHTML = "";
        hasdepartmentError = false;
    }

        return false;


firstNames[totalStudents] = firstName;
  lastNames[totalStudents] = lastName;
  studentIds[totalStudents] = studentId;
  emails[totalStudents] = email;
  credits[totalStudents] = credit;
  departments[totalStudents] = department;
  totalStudents = totalStudents + 1;
 
  updateTable();
 
  document.getElementById("regForm").reset();
};
 
function updateTable() {
  var tableBody = document.getElementById("studentTableBody");
  tableBody.innerHTML = "";
 
  for (var i = 0; i < totalStudents; i++) {
    var row = document.createElement("tr");
 
    row.innerHTML =
      "<td>" + firstNames[i] + "</td>" +
      "<td>" + lastNames[i] + "</td>" +
      "<td>" + studentIds[i] + "</td>" +
      "<td>" + emails[i] + "</td>" +
      "<td>" + credits[i] + "</td>" +
      "<td>" + departments[i] + "</td>";
 
    tableBody.appendChild(row);
  }
}
 