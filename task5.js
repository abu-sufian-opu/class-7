//5. Create fees array and object data for a picnic where everyone will provide free basic information for everyone.

const picnic = [
    {
        name      : 'Rayhan',
        roll      : 1,
        class     : 'Ten',
        fees      : 1000
    },
    {
        name      : 'Sabbir',
        roll      : 2,
        class     : 'ten',
        fees      : 1000
    },
    {
        name      : 'Adnan',
        roll      : 3,
        class     : 'ten',
        fees      : 500
    },
    {
        name      : 'Mamun',
        roll      : 4,
        class     : 'ten',
        fees      : 1000
    },
    {
        name      : 'Bakkar',
        roll      : 5,
        class     : 'ten',
        fees      : 300
    },
    {
        name      : 'Syam',
        roll      : 6,
        class     : 'ten',
        fees      : 500
    },
    {
        name      : 'Sumaya',
        roll      : 7,
        class     : 'ten',
        fees      : 500
    },
    {
        name      : 'Farjana',
        roll      : 8,
        class     : 'ten',
        fees      : 300
    },
    {
        name      : 'Farhana',
        roll      : 9,
        class     : 'ten',
        fees      : 500
    },
    {
        name      : 'Nazmul',
        roll      : 10,
        class     : 'ten',
        fees      : 300
    }
]

let totalFees = 0;

picnic.map(data => {


    function catagory(){
        let fee = data.fees;
        if( fee == 1000 ){
            return 'You are Catagory A';
        }else if( fee == 500 ){
            return 'You are Catagory B';
        }else if( fee == 300 ){
            return 'You are Catagory c';
        }

    }

    console.log(`
        Name        : ${data.name}
        Roll        : ${data.roll}
        Class       : ${data.class}
        Fees        : ${data.fees}
        Massege     : ${catagory()}
    `);


    totalFees += data.fees;
})

console.log( ` Total Fees for Picnic : ${totalFees}$ ` );