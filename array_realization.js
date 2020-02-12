const students = ["Саша", "Игорь", "Лена", "Ира", "Алексей", "Светлана"];
const themes = ["Дифференциальные уравнения", "Теория автоматов", "Алгоритмы и структуры данных"];
const marks = [4, 5, 5, 3, 4, 5];
 //function 1
 function couplStudents(students){
     return [[students[0],students[2]],[students[1],students[3]],[students[4],students[5]]];
 }
  const couples = (couplStudents(students));
  console.log(couples);

 //function 2
 let pairsAndProject = [];
  function nestedArray (couples, themes) {
   
    for(let i = 0; i<couples.length; i++){
        pairsAndProject.push([couples[i].join(' and '), themes[i]]);
    }
    return pairsAndProject ;
}
console.log(nestedArray (couples, themes));


//function 3
function joinStudentsMarks (studentsName, marks)  {
    const couplesMark = [];
    for(let i=0; i<studentsName.length; i++){
        couplesMark.push([studentsName[i],marks[i]]);
    }
    return couplesMark;
}
console.log(joinStudentsMarks(students, marks));

//function 4

function randomMarker(pairsAndProject){
   const min=1;
   const max=5;
   let randomResultMark=[];
   for(let i=0; i<pairsAndProject.length; i++){

    let Mark = Math.floor(Math.random()*(max - min +1) + min);
    
    randomResultMark.push ([...pairsAndProject[i], Mark]);
    }

    return randomResultMark;
   
}
console.log(randomMarker(pairsAndProject));



