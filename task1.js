// 1. Create a MERN stack, Laravel, Django, GoLang,  WordPress, java dives students data structure and make their total income sheet with per developer data, Find specific students. 


const devs = [
   {
     id   : 1,
     name : 'Abu Sayed',
     skill  : 'MERN stack',
     location  : 'Mirpur',
     income  : 1000
   },

   {
    id   : 2,
    name : 'Abu Rayhan',
    skill  : 'Laravel',
    location  : 'Azimpur',
    income  : 1200
  },

  {
    id   : 3,
    name : 'Abu Sufian',
    skill  : 'Django',
    location  : 'Mohammadpur',
    income  : 800
  },

  {
    id   : 4,
    name : 'Achem',
    skill  : 'GoLang',
    location  : 'Lalbagh',
    income  : 1500
  },

  {
    id   : 5,
    name : 'Abu Sufian',
    skill  : 'WordPress',
    location  : 'Mirpur',
    income  : 2000
  },
  {
    id   : 6,
    name : 'Abu Bakkar',
    skill  : 'Java',
    location  : 'Azimpur',
    income  : 1800
  },

  {
    id   : 7,
    name : 'Nur Amin',
    skill  : 'Java',
    location  : 'Mirpur',
    income  : 1000
  }
];


let totalSalary = 0;

devs.map(data => {

  if(data.income >= 1000){
    console.log(`

      Id      : ${data.id}
      Name    : ${data.name}
      Skill   : ${data.skill}
      Location: ${data.location}
      Income  : ${data.income}

  `);

  totalSalary += data.income;

  }

  

});


  console.log(`Devs Total Salary: ${totalSalary}$`);


    