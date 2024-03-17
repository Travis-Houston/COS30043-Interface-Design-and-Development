const app = Vue.createApp({
    data() {
      // Define the initial state of the form data and validation properties
      return {
        // Form data
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        confirmPassword: '',
        email: '',
        streetAddress: '',
        suburb: '',
        postcode: '',
        mobileNumber: '',
        termsAndConditions: false,
        
        // Validation properties
        firstNameError: false,
        lastNameError: false,
        usernameError: false,
        passwordError: false,
        confirmPasswordError: false,
        emailError: false,
        streetAddressError: false,
        suburbError: false,
        postcodeError: false,
        mobileNumberError: false,
  
        // Display properties
        showTermsAndConditions: false
      };
    },
    
    computed: {
      // Define functions to compute error messages and form validation status
      firstNameErrorMessage() {
        return 'Please enter a valid first name.';
      },
      lastNameErrorMessage() {
        return 'Please enter a valid last name.';
      },
      usernameErrorMessage() {
        return 'Please enter a valid username (at least 3 characters).';
      },
      passwordErrorMessage() {
        return 'Please enter a valid password (at least 8 characters with at least one special character).';
      },
      confirmPasswordErrorMessage() {
        return 'Passwords do not match.';
      },
      emailErrorMessage() {
        return 'Please enter a valid email address.';
      },
      streetAddressErrorMessage() {
        return 'Please enter a valid street address (maximum 40 characters).';
      },
      suburbErrorMessage() {
        return 'Please enter a valid suburb (maximum 20 characters).';
      },
      postcodeErrorMessage() {
        return 'Please enter a valid postcode (exactly 4 numeric digits).';
      },
      mobileNumberErrorMessage() {
        return 'Please enter a valid mobile number (10 digits, must start with 04).';
      },
      isValid() {
        // Check the validity of all form fields
        const validFirstName = /^[a-zA-Z]+$/.test(this.firstName);
        const validLastName = /^[a-zA-Z]+$/.test(this.lastName);
        const validUsername = /^(?=.{3,})[a-zA-Z0-9]+$/.test(this.username);
        const validPassword = /^(?=.*[\W])\S{8,}$/.test(this.password);
        const validEmail = /\S+@\S+.\S+/.test(this.email);
        const validStreetAddress = this.streetAddress.length <= 40;
        const validSuburb = this.suburb.length <= 20;
        const validPostcode = /^\d{4}$/.test(this.postcode);
        const validMobileNumber = /^04\d{8}$/.test(this.mobileNumber);
        
        // Return true if all fields are valid
        return (
          validFirstName &&
          validLastName &&
          validUsername &&
          validPassword &&
          this.password === this.confirmPassword &&
          validEmail &&
          validStreetAddress &&
          validSuburb &&
          validPostcode &&
          validMobileNumber
        );
      }
    },
    
    methods: {
      submitForm() {
        // Reset all validation errors
        this.resetErrors();
        
        if (this.isValid) {
          // Create a new form element and add form fields to it
          const form = document.createElement('form');
          form.setAttribute('method', 'POST');
          form.setAttribute('action', 'http://mercury.swin.edu.au/it000000/formtest.php');
          const fields = {
            firstName: this.firstName,
            lastName: this.lastName,
            username: this.username,
            password: this.password,
            confirmPassword: this.confirmPassword,
            email: this.email,
            streetAddress: this.streetAddress,
            suburb: this.suburb,
            postcode: this.postcode,
            mobileNumber: this.mobileNumber
          };
          for (const [name, value] of Object.entries(fields)) {
            const field = document.createElement('input');
            field.setAttribute('type', 'hidden');
            field.setAttribute('name', name);
            field.setAttribute('value', value);
            form.appendChild(field);
          }
          
          // Submit the form to the Mercury website
          document.body.appendChild(form);
          form.submit();
          
          // Clear the form fields and validation errors
          this.resetForm();
        } else {
          // Set validation errors for each invalid field
          if (!/^[a-zA-Z]+$/.test(this.firstName)) {
            this.firstNameError = true;
          }
          if (!/^[a-zA-Z]+$/.test(this.lastName)) {
            this.lastNameError = true;
          }
          if (!/^(?=.{3,})[a-zA-Z0-9]+$/.test(this.username)) {
            this.usernameError = true;
          }
          if (!/^(?=.*[\W])\S{8,}$/.test(this.password)){
            this.passwordError = true;
          }
          if (this.password !== this.confirmPassword) {
            this.confirmPasswordError = true;
          }
          if (!/\S+@\S+\.\S+/.test(this.email)) {
            this.emailError = true;
          }
          if (this.streetAddress.length > 40) {
            this.streetAddressError = true;
          }
          if (this.suburb.length > 20) {
            this.suburbError = true;
          }
          if (!/^\d{4}$/.test(this.postcode)) {
            this.postcodeError = true;
          }
          if (!/^04\d{8}$/.test(this.mobileNumber)) {
            this.mobileNumberError = true;
          }
        }
      },
      
      resetForm() {
        // Clear all form fields
        this.firstName = '';
        this.lastName = '';
        this.username = '';
        this.password = '';
        this.confirmPassword = '';
        this.email = '';
        this.streetAddress = '';
        this.suburb = '';
        this.postcode = '';
        this.mobileNumber = '';
        this.termsAndConditions = false;
      },
      
      resetErrors() {
        // Reset all validation errors
        this.firstNameError = false;
        this.lastNameError = false;
        this.usernameError = false;
        this.passwordError = false;
        this.confirmPasswordError = false;
        this.emailError = false;
        this.streetAddressError = false;
        this.suburbError = false;
        this.postcodeError = false;
        this.mobileNumberError = false;
      },
      
      toggleTermsAndConditions() {
        // Toggle the visibility of the terms and conditions section
        this.showTermsAndConditions = !this.showTermsAndConditions;
      }
    }
  });
  
  // Mount the app on the registration form element
  app.mount('#registration-form');