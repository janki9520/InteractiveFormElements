
//Check for outdated browsers if present then redirect to FireFox download page
if(!document.addEventListener){ //returns false if there is no addEventListener method in the document
    alert("The browser that you are currently using does not support Javascript. Please let me help you download the latest browser.");
    window.open("https://www.mozilla.org/en-US/firefox/");
}

// Storing data in Multi-Dimentional Arrays
var brandSelection = ["Choose a laptop brand", "level1Array", "level2Array", "level3Array"];

//HP selection
var hp = {

            level1Array:    ["Choose a laptop model", "HP Envy", "HP Spectre", "HP Pavilion"],
            
            level2Array:    ["Choose laptop specifications", "8GB Memory;256GB SSD", "16GB Memory;512GB SSD", "16GB Memory;1TB HDD+128GB SSD"], 
            
            level3Array:    ["Select Budget", "799 usd","1099 usd", "1699 usd"] 

        };
     
//MAC selection
var mac = {

            level1Array:    ["Choose a laptop model", "MacBook", "MacBook Air", "MacBook Pro"],
            
            level2Array:    ["Choose laptop specifications", "1.2GHz Processor;256GB Storage", "1.8GHz Processor;128GB Storage", "2.3GHz Processor;512GB Storage"],
            
            level3Array:    ["Select Budget", "999 usd", "1599 usd", "2299 usd" ]
                                 
        };
 

//DELL selection
var dell = {

                level1Array:    ["Choose a laptop model", "DELL XPS", "DELL Chromebook", "DELL Inspiron"],
               
                level2Array:    ["Choose laptop specifications","4GB Memory;128GB SSD", "6GB Memory;512GB SSD","8GB Memory;1TB SSD"],
               
                level3Array:    ["Select Budget", "699 usd", "1299 usd", "1399usd"]
                            
    };

//brand variable stores what laptop brand is selected
var brand = "";

//Index of current selection
var currentIndex;



//body onload creating first select and option element
function init(){

    //Check for cookie - checkCookie function called
     checkCookie();
    
    //start animation on load by calling this function 
    performAnimation();

    //Creating select element
    var select = document.createElement('select');
    select.setAttribute('onchange','getBrandType(this);');

    //Adding the Brand Types for the first select
    var brandTypes = ['Choose a laptop brand','HP','MAC','DELL'];

    //iterating through array list and creating options for each select
    for(var i = 0; i < brandTypes.length;i++){
        var opt = document.createElement('option');
        if(i == 0){
            //First element is set to disabled
            opt.setAttribute('disabled','disabled');    
        }

        //Setting TextNodes before add to options elements
        var text = document.createTextNode(brandTypes[i]);
        opt.appendChild(text);
        select.appendChild(opt);   
    }
    
    //Setting the name of the first select element & appending  select element to form 
    select.name = brandTypes[0];
    document.form.appendChild(select);
    //Setting the first option as current selection
    select.selectedIndex = 0;
               
}



//Getting laptop brand type and then creating next select element using createNewSelect() function
function getBrandType(objType){
    //Reference to all select elements
    var select = document.getElementsByTagName('select');
    brand = objType.options[objType.selectedIndex].value;   
    createNewSelect(objType);
}

//function creates select element 
function createNewSelect(newSelectObject){
    //Set the previous object to disabled
    newSelectObject.setAttribute('disabled','disabled');
    //create new select
    var $select= document.createElement("select");
    //Add the onchange event with event and handler
    $select.setAttribute("onchange","createNewSelect(this);");
    //Get reference to all select elements to know when we reach the end
    var selects = document.getElementsByTagName('select');

    //Track the current step and return index accordingly
    currentIndex = brandSelection.indexOf(newSelectObject.name);
    var next = brandSelection[currentIndex+1];
    $select.name = next;

    //create option function called  
    createNewOptions($select);
}

//function creating options called from the previous function after creating select element
function createNewOptions(s){

    //will create option element only if the last created was select
    if(currentIndex < (brandSelection.length-1)){

        //This will find out what laptop brand is chosen
        if(brand.toLowerCase() == "hp"){
            //Looping to fill new options with according values from object hp or mac or dell, in later steps according to previous input
            for(var i = 0; i < hp[s.name].length; i++){
                //Create option element
                var $option = document.createElement("option");
                //Creating text node with text from object at current index step
                var text = document.createTextNode(hp[s.name][i]);
                //Set the first option element to disabled, selected and insert the text for first value
                if(i == 0){
                    $option.setAttribute('disabled', 'disabled');
                    $option.setAttribute('selected','selected');
                    $option.appendChild(text);
                } else{
                    //For other elements enter chooseable inputs
                    $option.appendChild(text);
                }
                //Append the options to select element
                s.appendChild($option);
            }
        }
        //if mac brand is chosen
        else if(brand.toLowerCase() == "mac"){
            for(var i =0; i< mac[s.name].length; i++){
                var $option = document.createElement("option");
                var text = document.createTextNode(mac[s.name][i]);
                if(i == 0){
                    $option.setAttribute('disabled', 'disabled');
                    $option.setAttribute('selected','selected');
                    $option.appendChild(text);
                } else{
                    $option.appendChild(text);
                }
                s.appendChild($option);
            }
        }

        //if dell brand is chosen
        else if(brand.toLowerCase() == "dell"){
            for(var i =0; i< dell[s.name].length; i++){
                var $option = document.createElement("option");
                var text = document.createTextNode(dell[s.name][i]);
                if(i == 0){
                    $option.setAttribute('disabled', 'disabled');
                    $option.setAttribute('selected','selected');
                    $option.appendChild(text);
                } else{
                    $option.appendChild(text);
                }
                s.appendChild($option);
            }
        }
    //created select element is appended to the form in html
    document.form.appendChild(s);
    }

}

//function called onload to perform animation 
function performAnimation(){
//animation using DHTML
     var animatedImg = document.getElementById("animatedImg");
     animatedImg.style.position='relative';
     animatedImg.style.left='0px';
     animatedImg.style.width='90px';
     animatedImg.style.height='85px';
     animatedImg.style.paddingTop='145px';
     moveImageRight();


     //function to move the image to the right
     function moveImageRight(){
         var position = 0;
         var id = setInterval(frame, 15);
         function frame() {
             if (position == 1400) {
                 clearInterval(id);
             } else {
                 position++;
                 animatedImg.style.left = position + 'px';
             }
         }
     }

  }



//Function will remove all selected inputs except for the first selection
function resetBtnClicked(){
    //Laptop brand variable set to undefined
    brand = "";
    //get reference to all selects
    var selectLevel= document.getElementsByTagName('select');
    selectLevel[0].removeAttribute('disabled');
    selectLevel[0].selectedIndex = 0;
    //while loop remove all inputs except the first
    while(selectLevel[1]){
    document.form.removeChild(selectLevel[1]);
    }
}


//set cookie constructor
function setCookie(cookieName, cookieValue, cookieExpiry) {
    var date = new Date();
    date.setTime(date.getTime() + (cookieExpiry * 24 * 60 * 60 * 1000));
    var expires = "expires="+ date.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
    console.log(document.cookie);
}

//getCookie function: get the name of the visitor from the stored cookie
function getCookie(cookieName) {
    var cookieName = cookieName + "=";
    var dCookie = document.cookie.split(';');
    console.log(dCookie);
    for(var i = 0; i <dCookie.length; i++) {
        var c = dCookie[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(cookieName) == 0) {
            return c.substring(cookieName.length, c.length);
        }
    }
    return "";
}

//check cookie function for information validation that user enters
function checkCookie() {
    var userName = getCookie("username");
    if (userName != "") {
        //existing user
        alert("Welcome back" +" " + userName +"." +" "+ "We have new laptop deals for you !!");
    }

    else {
        //if first visit or new user
        alert("Please register first by providing us with your name and password to get latest offers");

        //create form wherein username and password will be there
        var form = document.getElementById("displayForm");
        form.setAttribute("name","myForm");

        var formTitle = document.createElement("p");
        formTitle.setAttribute("id","formTitle");
        var formTitleText=document.createTextNode("Registration Form");
        form.appendChild(formTitleText);
        form.appendChild(formTitle);

        //form css using dhtml
        form.style.border='2px solid black';
        form.style.width='220px';
        form.style.height='200px';
        form.style.float='left';
        form.style.padding='5px';
        form.style.marginLeft='10px';
        form.style.marginBottom='10px';
        form.style.color='#c83349';
        form.style.textAlign='center';
        form.style.fontWeight='bold';

        //name input created
        var nameInput = document.createElement("input");
        nameInput.setAttribute("id","username");
        nameInput.setAttribute("type","text");
        nameInput.setAttribute("placeholder","Enter Your Name");
        form.appendChild(nameInput);
        nameInput.style.position="relative";


        //br tag created
        var br1 = document.createElement("br");
        form.appendChild(br1);

        //password input created
        var passwordInput = document.createElement("input");
        passwordInput.setAttribute("id","userpassword");
        passwordInput.setAttribute("type","password");
        passwordInput.setAttribute("placeholder","Enter Your Password");
        form.appendChild(passwordInput);

        //br tag created
        var br2 = document.createElement("br");
        form.appendChild(br2);

        //create a button to save the user information when they click on "Register"
        var registerBtn = document.createElement("button");
        registerBtn.setAttribute("id","registerBtn");
        registerBtn.setAttribute("value","Register");
        //add text to the button using createTextNode
        registerBtn.appendChild(document.createTextNode("REGISTER"));
        form.appendChild(registerBtn);

        //onclick of register button the user information will be validated
        //on refresh of the page/second visit, the user wont be asked to input the information again
        //it will be stored in cookie
        registerBtn.onclick = function(){
            console.log("Register button clicked. Information saved. Refresh the page and you will not have to re-enter the values");
            //getting name
            var name = document.getElementById("username");
            var getName = name.value;

            var password = document.getElementById('userpassword');
            var getPassword = password.value;


            //user name and password validation done here
            if (getName == "" || getName == null) {
                alert("Name can't be blank. Please write your name");
                return false;
            }

            else if(getPassword.length < 6) {
                    alert("Password must contain at least six characters!");
                    return false;
            }

            //information stored in cookie
            setCookie("username", getName, 30);
        }
    }
}


//submit function will output the selections made by the user and refresh the page after displaying the selections
function submitSelection(){

    var values = [];
    //titleHeading here
    var titleHeading = [];
    //selectionSummary
    var selectionSummary = [];
    //String to store message for each paragraph
    var string = "";
   //referring to result div to display all the user selections
    var resultDisplayDiv = document.getElementById("resultDisplayDiv");
    //Select elements reference
    var selectRef = document.getElementsByTagName('select');

    for(var i = 0; i < selectRef.length; i++){
        //First select has different starting title
        if(i==0){
            values.push(selectRef[i].value);
            titleHeading.push("You are interested in");
        }else{
            values.push(selectRef[i].value);
            titleHeading.push(selectRef[i].options[0].value);
        }

        //Adding new paragraphs 
        selectionSummary[i] = document.createElement('p');
        //Creating a string for each line of output
        string = titleHeading[i] + ": " + values[i];
        //Creating TextNode for each selected values
        var text = document.createTextNode(string);
        //Appending the TextNode to paragraphs
        selectionSummary[i].appendChild(text);
        //Appending the paragraphs to the table div
        resultDisplayDiv.appendChild(selectionSummary[i]);

    }

    //After 2.5s the result div goes away
    setTimeout(function(){
        resultDisplayDiv.style.opacity = 0;
        resultDisplayDiv.style.visibility = 'hidden';
        //refresh page to make fresh selections
          window.location.reload(true);
    },2500);


        //display result div styles 
        resultDisplayDiv.style.boxSizing='border-box';
        resultDisplayDiv.style.marginLeft='550px';
        resultDisplayDiv.style.marginTop='5px';
        resultDisplayDiv.style.fontFamily='Times New Roman';
        resultDisplayDiv.style.size='10px';
        resultDisplayDiv.style.fontWeight='bold';
        resultDisplayDiv.style.color='#000080';
        resultDisplayDiv.style.position='absolute';
        resultDisplayDiv.style.right='50px';
        resultDisplayDiv.style.top='350px';

        //resultDisplayDiv css using dhtml
        resultDisplayDiv.style.border='4px solid black';
        resultDisplayDiv.style.width='410px';
        resultDisplayDiv.style.height='250px';
        resultDisplayDiv.style.float='right';
        resultDisplayDiv.style.padding='10px';

        resultDisplayDiv.style.textAlign='center';
        resultDisplayDiv.style.fontWeight='bold';

}








