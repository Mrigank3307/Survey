class Form {
    constructor () {

        this.personName = createElement ('h3');
        this.personInput = createInput ("name")

this.firstQuestion = createElement ('h5');
this.firstInput = createInput ('hello');

this.secondQuestion = createElement ('h5');
this.secondInput = createInput ('hello');

this.thirdQuestion = createElement ('h5');
this.thirdInput = createInput ('hello');

this.fourthtQuestion = createElement ('h5');
this.fourthInput = createInput ('hello');

this.submitButton = createButton ('Submit');

this.firstName = null
this.secondName = null
this.thirdName = null
this.fourthName = null
    }

         updateFood () {
            var foodIndex = "food/responders/responder" + responderCount;
        database.ref (foodIndex).set({
        answer : this.firstName
        })
        }
        
        
        
        updateContribution () {
            var contIndex = "contribution/responders/responder" + responderCount;
        database.ref (contIndex).set({
        answer : this.secondName
        })
        
        }
        
        updateAmount () {
            var amountIndex = "amount/responders/responder" + responderCount;
        database.ref (amountIndex).set({
        answer : this.thirdName
        })
        }
        
        updateName () {
            var nameIndex = "name/responders/responder" + responderCount;
        database.ref (nameIndex).set({
        answer : this.fourthName
        })
        }

        getAnswers(){
            this.firstName = this.firstInput.value();
            this.secondName = this.secondInput.value();
            this.thirdName = this.thirdInput.value();
            this.fourthName = this.personInput.value();
             }

    display() {
        this.firstQuestion.html ("Do you think food should me given to poor children in schools?")
        this.firstQuestion.position (10,0);
       this.firstInput.position (100,50);

       this.secondQuestion.html ("Will you be willing to donate to such an organization?");
       this.secondQuestion.position(10,70);
       this.secondInput.position(100,110);

       this.thirdQuestion.html ("What is the amount that you will be willing to donate")
       this.thirdQuestion.position(10,140);
       this.thirdInput.position(100,180)

       this.personName.html ("What is your name/nickname")
this.personName.position(90,220)
this.personInput.position(100,260)

       this.submitButton.position(100,300)

      
      

this.submitButton.mousePressed(() => {
    ke()
    updateCount(responderCount)

    if (responderCount !== undefined){
      console.log(responderCount);
      }

      this.getAnswers();
      // this.updateIndex();
      
       this.updateFood();
       this.updateContribution();
      this.updateAmount();
      this.updateName();
})



    }
}