// 4. Arrange a data sheet for a family phone book and publish it


const phoneBook = [
    {
        name      : 'Md Amjad Hossain',
        age       : 65,
        relation  : 'Father',
        phone     : '01912888332'
    },
    {
        name      : 'Sufia Begum',
        age       : 55,
        relation  : 'Mother',
        phone     : '01916145191'
    },
    {
        name      : 'Farhana Limu',
        age       : 28,
        relation  : 'Wife',
        phone     : '01774585216'
    },
    {
        name      : 'Farid Ahmed',
        age       : 45,
        relation  : 'Elder Brother',
        phone     : '01712389870'
    },
    {
        name      : 'Farjana Khatun',
        age       : 27,
        relation  : 'Sister',
        phone     : '01924563342'
    }
]
 

phoneBook.map(data => {

    console.log(`
    Name        : ${data.name}
    Age         : ${data.age}
    Relation    : ${data.relation}
    Phone No    : ${data.phone}
        
    `); 
})



