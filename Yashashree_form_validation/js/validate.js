window.onload = () => {
	// gets the form elements
	 let forms = document.querySelectorAll("form");

    Array.from(forms).forEach(form => {
    	     
           let errors = form.previousElementSibling;

           let errorMessages = "";
           
           let requiredClass = form.getElementsByClassName("required");
           
           let numericClass = form.getElementsByClassName("numeric");
           
           let requiredSizeClass = form.getElementsByClassName("required_size");

           
       	    form.addEventListener("submit", (e) => {
       	        e.preventDefault();
       	        
       	        errorMessages += validateRequired(requiredClass);
       	        errorMessages += requiredSize(requiredSizeClass);
       	        errorMessages += validateNumber(numericClass);
       	        showErrorMessage(errorMessages, errors);
                 if( errorMessages == "")
                 {
                   form.submit();
                 }
       	        // resets the error message
       	        errorMessages = "";
       	    })

      });
    }

function validateRequired(elems) {
    var error = "";

  Array.from(elems).forEach(elem => {

	   if (elem.value.length == 0) {
        elem.style.background = 'Yellow';
        error += `${elem.name} is required field.<br>`
    } else {
        elem.style.background = 'White';
    }

    });

    return error;
}

function requiredSize(elems) {
    var error = "";
     Array.from(elems).forEach(elem => {

	   if (elem.value.length < elem.maxLength) {
        elem.style.background = 'Yellow';
        error += `Enter atleast ${elem.maxLength} charcter for field ${elem.name}.<br>`
    } else {
        elem.style.background = 'White';
    }

    });

    return error;
}

function validateNumber(elems) {
    var error = "";
  Array.from(elems).forEach(elem => {
	   if (isNaN(elem.value) || elem.value=="" ) {
        elem.style.background = 'Yellow';
        error += `Enter number for field ${elem.name}.<br>`
    } else {
        elem.style.background = 'White';
    }

    });

    return error;
}

const showErrorMessage = (errorMessage, errorDiv) => {
    errorDiv.classList.add('displayError');
    errorDiv.innerHTML = errorMessage;
    if(errorMessage == "") {
        errorDiv.innerHTML = "No Errors!";
    }
	}

