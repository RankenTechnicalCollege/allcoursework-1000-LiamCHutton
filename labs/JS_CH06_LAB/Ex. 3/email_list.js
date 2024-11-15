const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    
    $("#join_list").addEventListener("click", () => {
        // get values user entered in textboxes
        const email1 = $("#email_1");
        const email2 = $("#email_2");
        const firstName = $("#first_name");
    
        // create an error message and set it to an empty string
        let dataValidation = true;

        // check user entries - add text to error message if invalid
        if (email1.value == "") { 
            document.querySelector('.email_span').textContent = "First email is required.";
            dataValidation = false;
        }
        else {
            document.querySelector('.email_span').textContent = "*";
        }
        
        if (email2.value == "") { 
            document.querySelector('.confirmEmail_span').textContent = "Second email is required.";
            dataValidation = false;
        }
        else if (email1.value != email2.value) {
            document.querySelector('.confirmEmail_span').textContent = "Both emails must match.";
            dataValidation = false;
        }
        else {
            document.querySelector('.confirmEmail_span').textContent = "*";
        }
    
    
        if (firstName.value == "") {
            document.querySelector('.name_span').textContent = "First name is required.";
            dataValidation = false;
        }
        else {
            document.querySelector('.name_span').textContent = "*";
        }
    
        // submit the form if error message is an empty string
        if (dataValidation == true) {
            $("#email_form").submit();
        } 
    });

    $("#clear_form").addEventListener("click", () => {
        $("#email_1").value = "";
        $("#email_2").value = "";
        $("#first_name").value = "";

        $("#email_1").focus();
    });
    
    $("#email_1").focus();
});