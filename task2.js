//2.Create an array data structure with some data of fifth-grade students where their results will be published based on GPA and grade based on. Publish CGPA and final grade in the final result

const students = [
        {
        roll        : 1,
        name        : 'Mamun',
        bn          : 75,
        en          : 70,
        math        : 80,
        s           : 85,
        rel         : 75
    },
        {
        roll        : 2,
        name        : 'Rayhan',
        bn          : 85,
        en          : 75,
        math        : 30,
        s           : 88,
        rel         : 90
    },

        {
        roll        : 3,
        name        : 'Nur Amin',
        bn          : 85,
        en          : 75,
        math        : 80,
        s           : 88,
        rel         : 90
    },
        {
        roll        : 4,
        name        : 'Adnan',
        bn          : 85,
        en          : 75,
        math        : 80,
        s           : 88,
        rel         : 90
    },
        {
        roll        : 5,
        name        : 'Sufian',
        bn          : 85,
        en          : 75,
        math        : 80,
        s           : 88,
        rel         : 90
    }

];

students.map (data => {

    let bn = data.bn;
    let en = data.en;
    let math = data.math;
    let s = data.s;
    let rel = data.rel;

    let total = bn + en + math + s + rel;


function Result(){

    this.gpa = (marks) => {
        if(marks >= 0 && marks <= 32){
            return 0;
        }else if(marks >= 33 && marks < 40){
            return 1;
        }else if(marks >= 40 && marks < 50){
            return 2;
        }else if(marks >= 50 && marks < 60){
            return 3;
        }else if(marks >= 60 && marks < 70){
            return 3.5;
        }else if(marks >= 70 && marks < 80){
            return 4;
        }else if(marks >= 80 && marks <= 100){
            return 5;
        }else{
            return 'invalid';
        }
    }


    this.grade = (marks) => {
        if(marks >= 0 && marks <= 32){
            return 'F';
        }else if(marks >= 33 && marks < 40){
            return 'D';
        }else if(marks >= 40 && marks < 50){
            return 'C';
        }else if(marks >= 50 && marks < 60){
            return 'B';
        }else if(marks >= 60 && marks < 70){
            return 'A-';
        }else if(marks >= 70 && marks < 80){
            return 'A';
        }else if(marks >= 80 && marks <= 100){
            return 'A+';
        }else{
            return 'invalid';
        }
    }

    this.cgpa = (bn, en, math, s, rel) => {

        let totalCgpa = bn + en + math + s + rel;
        let cgpa = totalCgpa/5;

        if( bn == 0 || en == 0 || math == 0 || s == 0 || rel == 0){
            return 'You Are Failed'
        }else{
            return `${cgpa} Total Grade = ${this.totalGrade(cgpa)}
            `;
        }
    }


this.totalGrade = (totalGradeCal) => {
    if (totalGradeCal >= 0 && totalGradeCal < 1) {
        return 'F'
    } else if (totalGradeCal >= 1 && totalGradeCal < 2) {
        return 'D'
    } else if (totalGradeCal >= 2 && totalGradeCal < 3) {
        return 'C'
    } else if (totalGradeCal >= 3 && totalGradeCal < 3.5) {
        return 'B'
    } else if (totalGradeCal >= 3.5 && totalGradeCal < 4) {
        return 'A-'
    } else if (totalGradeCal >= 4 && totalGradeCal < 5) {
        return 'A'
    } else if (totalGradeCal == 5) {
        return 'A+'
    }
}
}

let sufian = new Result();


console.log(`
------------------------------------------------------------------------
    ${data.roll}   ${data.name}

    Subject           Mark          GPA         Grade
________________________________________________________________________________________
    Bangla            = ${data.bn}           ${sufian.gpa(data.bn)}           ${sufian.grade(data.bn)}
    English           = ${data.en}           ${sufian.gpa(data.en)}           ${sufian.grade(data.en)}
    Mathematics       = ${data.math}           ${sufian.gpa(data.math)}           ${sufian.grade(data.math)}
    Science           = ${data.s}           ${sufian.gpa(data.s)}           ${sufian.grade(data.s)}
    Religion          = ${data.rel}           ${sufian.gpa(data.rel)}           ${sufian.grade(data.rel)}
_________________________________________________________________________________________
  Your Total Mark is = ${total}   GPA = ${sufian.cgpa(sufian.gpa(data.bn), sufian.gpa(data.en), sufian.gpa(data.math), sufian.gpa(data.s), sufian.gpa(data.rel))}

`);


})
