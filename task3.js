//Send a welcome message to everyone over the age of 18 based on the age of the data array of all the members of a club and send a greeting message to the person over the age of 40, of course, send the message through a function, and to those who are under 18 years of age. Give the message to be attentive.


const members = [

    {
        id      : 1,
        name    : 'Achem',
        age     : 22,
        loction : 'Lalbagh',
        position: 'Director'     
    },
    {
        id      : 2,
        name    : 'Nur Amin',
        age     : 45,
        loction : 'Lalbagh',
        position: 'Manager'     
    },
    {
        id      : 1,
        name    : 'Rayhan',
        age     : 15,
        loction : 'Mirpur',
        position: 'Accountant'     
    },

];


members.map((data) => {

    let age = data.age;

    function ageCal(age){
        if( age >= 0 && age < 18){

            return 'You are not permited bcz you are under 18'
    
        }else if( age >= 18 && age <= 40 ) {
            return 'You are most Welcome in this Club'

        }else if( age > 40 ) {
            return 'You are over ages'
        }
    }

    console.log(`
    
    Name        : ${data.name}
    Your Age    : ${data.age}
    Location    : ${data.loction}
    Position    : ${data.position}
    Message     : ${ageCal(age)}
----------------------------------------
    
    `);
})
 



