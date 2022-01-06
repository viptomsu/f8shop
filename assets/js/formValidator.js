class Validator{
   constructor(formSelector, messageSelector, onSubmit){
      this.form = document.querySelector(formSelector);
      this.msgSelector = messageSelector;
      this.test = new Map;
      this.validators = new Map;
   }
   validate(){
      for (const [checkFunction, fields] of this.test){
         let action;
         if(this.validators.get('isFilled') !== checkFunction){
            action = 'input';
         } else {
            action = 'blur';
         }
         for (const field of fields){
            field.addEventListener(action, () => {
               checkFunction(field);
            })
            if(action === 'blur'){
               field.oninput = () => {
                  const parent = field.parentElement;
                  parent.classList.remove('invalid');
                  parent.querySelector(this.msgSelector).innerText = '';
               }
            }
         }
      }
      
      this.form.setAttribute('novalidate', false);
      this.form.addEventListener('keydown', (e) => {
         if(e.keyCode === 13) {//press Enter
            e.preventDefault();
         }
      })
      this.form.addEventListener('submit', (e) => {
         e.preventDefault();
         let isValid = true;
         for (const [check, fields] of this.test){
            for (const field of fields) {
               isValid = check(field) && isValid;
            }
         }
         if(isValid){
            this.form.submit();
         }
      })
   }
   handle(field, message, type) {
      const parent = field.parentElement;
      const messageElement = parent.querySelector(this.msgSelector);
      parent.classList.remove('success', 'warning', 'invalid');
      if(type !== '') parent.classList.add(type);
      messageElement.innerText = message;
   }
   isFilled(field){
      if(field.value) {
         return true;
      } else {
         this.handle(field, 'This field is required', 'invalid');
         return false;
      }
   }
   isEmail(field){
      if(field.value){
         const regex = /^[\w\.\-]+\@(\w+\.)+([a-zA-Z0-9]{2,4})+$/g;
         if (regex.test(field.value)) {
            this.handle(field, '', 'success');
            return true;
         } else {
            this.handle(field, 'Your email address is invalid!', 'invalid');
            return false;
         }
      }
      return false;
   }
   isPassword(field){
      const value = field.value;
      if(value){
         const feedback = this.isGoodPwd(value, 8, 16);
         switch (feedback.level) {
            case 0:
               this.handle(field, feedback.message, 'invalid');
               return false;
            case 1:
               this.handle(field, feedback.message, 'warning');
               return true;
            default:
               this.handle(field, feedback.message, 'success');
               return true;
         }
      }
      return false;
   }
   isMatching(matchedField, field){
      if(field.value)
         if(field.value === matchedField.value) {
            this.handle(field, '', 'success');
            return true;
         } else {
            this.handle(field, 'Confirm password does not match', 'invalid');
            return false;
         }
   }
   required(selector = 'input[required]:not([type=checkbox]):not([type=radio])', callback = this.isFilled.bind(this)){
      const requiredFields = this.form.querySelectorAll(selector);
      if(this.test.get(callback)){
         this.test.get(callback).concat(requiredField);
      } else {
         this.test.set(callback, requiredFields);
         this.validators.set('isFilled', callback);
      }
   }
   checkEmail(selector = 'input[type=email]', callback = this.isEmail.bind(this)){
      const input = this.form.querySelector(selector);
      if(this.test.get(callback)){
         this.test.get(callback).push(input);
      } else {
         this.test.set(callback, [input]);
         this.validators.set('isEmail', callback);
      }
   }
   checkPassword(selector = 'input[type=password]', callback = this.isPassword.bind(this)){
      const input = this.form.querySelector(selector);
      if(this.test.get(callback)){
         this.test.get(callback).push(input);
      } else {
         this.test.set(callback, [input]);
         this.validators.set('isPassword', callback);
      }
   }
   isGoodPwd(value, min, max){
      const len = value.length;
      const testSet = [
         /\d/.test(value),
         /[A-Z]/.test(value),
         /[^a-zA-Z0-9\s]/.test(value),
         len > (min + max)/2 && len <= max
      ];
      let level = 0;
      let message = '';
      if(len < min){
         message = 'Please enter at least ' + min + ' characters';
      } else if(len > max){
         message = 'Please enter at most ' + max + ' characters';
      } else{
         for (const value of testSet) {
            value && ++level;
         }
         
         switch (level) {
            case 0:
               message = `Your password must have at least one number or uppercase/special character`;
               break;
            case 1:
                  message = 'Your password is weak';
               break;
            case 2:
               message = 'Your password is good';
               break;
            case 3:
               message = 'Your password is strong';
               break;
         }
      }
      return {
         message,
         level
      };
   }
   checkMatch(confirmSelector, passwordSelector, callback = this.isMatching.bind(this, this.form.querySelector(passwordSelector))) {
      const input = this.form.querySelector(confirmSelector);
      if(this.test.get(callback)){
         this.test.get(callback).push(input);
      } else {
         this.test.set(callback, [input]);
         this.validators.set('isMatching', callback);
      }
   }
}

const formValidator = new Validator('#form-sign-up', '.form-message');
formValidator.required();
formValidator.checkEmail();
formValidator.checkPassword();
formValidator.checkMatch('input[name="confirmPassword"]', 'input[name="password"]');
formValidator.validate();

const signInValidator = new Validator('#form-sign-in', '.form-message');
signInValidator.required();
signInValidator.checkEmail();
signInValidator.validate();


let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9\s])[\S]{8,}$/;