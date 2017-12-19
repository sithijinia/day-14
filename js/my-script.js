
function checkFirstName() {
    var firstNameLength=$('#firstName').val().length;
    if(firstNameLength>=6 && firstNameLength<=16){
        $('#firstNameError').text('');
        return true;
    }else $('#firstNameError').text('First Name Should be between 6 to 15 character');
    return false;

}

function checkLastName() {
    var lastNameLength=$('#lastName').val().length;
    if(lastNameLength>=6 && lastNameLength<=16){
        $('#lastNameError').text('');
        return true;
    }else $('#lastNameError').text('last Name Should be between 6 to 15 character');
    return false;

}




$('#firstName').click(function () {
    checkFirstName();
})

$('#firstName').blur(function () {
    checkFirstName();
})

$('#firstName').keyup(function () {
    checkFirstName();
});


$('#lastName').click(function () {
    checkLastName();
})

$('#lastName').blur(function () {
    checkLastName();
})

$('#lastName').keyup(function () {
    checkLastName();
})


function checkGender() {
    var genderValue =$('input[type="radio"]').val();
    

}

function checkEmailAddress() {
   var pattern = new RegExp(/^[+a-zA-z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
   if(pattern.test($('#emailAddress').val())){
       $('#emailAddressError').text(' ');
       return true;
   }else {
       $('#emailAddressError').text('Email Address invalid');
       return false;
   }

}


//
// $('#emailAddress').click(function () {
//     checkEmailAddress();
// })

$('#emailAddress').blur(function () {
    checkEmailAddress();
})

$('#emailAddress').keyup(function () {
    checkEmailAddress();
})


function checkPassword() {
    var passwordLength=$('#password').val().length;
    if(passwordLength>=8){
        $('#passwordError').text(' ');
        return true;
    }else $('#passwordError').text('Password Length must be 8 character');
return false;


}
//
// $('#password').click(function () {
//     checkPassword();
// })

$('#password').blur(function () {
    checkPassword();
})

$('#password').keyup(function () {
    checkPassword();
})


function checkConfirmPassword() {
    var passwordValue=$('#password').val();
    var passwordValue1=$('#confirmPassword').val();
    if(passwordValue==passwordValue1){
        $('#confirmPasswordError').text(' ');
        return true;
    }else $('#confirmPasswordError').text('Password not match.');
    return false;



}

$('#confirmPassword').blur(function () {
    checkConfirmPassword();
})

$('#confirmPassword').keyup(function () {
    checkConfirmPassword();
})


function checkDistrictName() {
    var districtName = $('#districtName').val();
    if(districtName == ' '){
        $('#districtNameError').text('Please Select a Valid District Name.');
        return false;
    } else  {
        $('#districtNameError').text(' ');
        return true;

    }

}

$('#districtName').change(function () {
    checkDistrictName();
});






$('#registrationForm').submit(function () {
    if(checkFirstName() == true && checkLastName() == true && checkEmailAddress() == true && checkPassword()== true && checkConfirmPassword()==true && checkDistrictName()== true )
    {
        return true;
    }
    else {
        return false;
    }
});