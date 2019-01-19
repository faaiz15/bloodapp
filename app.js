  function signup(){
let email = document.getElementById("email").value;
let password = document.getElementById("pass").value;
firebase.auth().createUserWithEmailAndPassword(email, password)
.then(function(result){
    console.log(result)
})
.catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
    // ...
  });
}
function signin(){
let signinemail = document.getElementById("signinemail").value;
let signinpassword = document.getElementById("signinpassword").value;


    firebase.auth().signInWithEmailAndPassword(signinemail, signinpassword)
    .then(function(result){
        console.log(result)
        window.location = "./page1.html";
    })
    
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage)

        // ...
      });
      

}

function blood(){
var name = document.getElementById("name").value;
var blood = document.getElementById("blood").value;

var database = firebase.database();
database.ref('donors/').push({
    name: name,
    blood:blood,
  });
}



function receive(){
    var name = document.getElementById("name").value;
    var blood = document.getElementById("blood").value;
    
    var database = firebase.database();
    database.ref('receivers/').push({
        name: name,
        blood:blood,
      });
    }
    

    function show_donor(){
        // window.location = "./present_blood.html";
var show = document.getElementById("qwerty");
show.innerHTML=`<h1>Donors</h1>`;
        firebase.database().ref('/donors/').once('value').then(function(snapshot) {
            var username = snapshot.val();
            console.log(username);
            for (var key in username){
                show.innerHTML+=`
                <div>
                <p> Name:
                ${username[key].name}</p>
                <p>Blood :
                ${username[key].blood}</p>
                </div>
                `
            }
        });
    }
    function show_receiver(){

        // window.location = "./present_blood.html";
var show = document.getElementById("qwerty");
show.innerHTML=`<h1>receivers</h1>`;

        firebase.database().ref('/receivers/').once('value').then(function(snapshot) {
            var username = snapshot.val();
            console.log(username);
            for (var key in username){
                show.innerHTML+=`
                <div>
                <p> Name:
                ${username[key].name}</p>
                <p>Blood :
                ${username[key].blood}</p>
                </div>
                `
            }
        });
    }




    