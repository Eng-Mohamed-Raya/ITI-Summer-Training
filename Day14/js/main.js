// ** --------------------Task1

    // let numbers=[50,0,80,9,100,2,-50];

    // // ** task 1.1
    // let ascSort=[...numbers]
    // let descSort=[...numbers]
    // ascSort.sort((a,b)=>a-b);
    // console.log(`Ascending : ${ascSort}`);
    // descSort.sort((a,b)=>b-a);
    // console.log(`Descending : ${descSort}`);

    // // ** task 1.2
    // console.log(numbers.filter((num)=>num>50));

    // // ** task 1.3

    // console.log('Max : ',Math.max(...numbers));
    // console.log('Min : ',Math.min(...numbers));

// ** --------------------Task2

    // function calc(operator, ...nums) {
    // let result;
    // operator == "+" || operator == "-" ? (result = 0) : (result = 1);

    // switch (operator) {
    //     case "+":
    //        result= nums.reduce((a,b)=>{
    //            return a+b
    //         },0)
    //         console.log(`Result of sum operation for ${nums} is ${result}`);
    //         break;
    //     case "-":
    //         nums.forEach((num)=>result-=num)
    //         console.log(`Result of sub operation for ${nums} is ${result}`);
    //         break;
    //     case "*":
    //         nums.forEach((num)=>result*=num)
    //         console.log(`Result of mul operation for ${nums} is ${result}`);
    //         break;
    //     case "/":
    //         nums.forEach((num)=>{
    //             if (num !== 0) result/= num;
    //         })
    //         console.log(`Result of / operation for ${nums} is ${result}`);
    //         break;
    //     default:
    //         console.log("invalid operator");
    // }

    // }
    // calc("+", 3, 1, 6, 3);
    // calc("-", 3, 1, 6, 3);
    // calc("*", 3, 1, 6, 3);
    // calc("/", 3, 1, 6, 3);


// ** --------------------Task3


let projectId = 1;
let projectName = "project one";
let duration = 5;

const project={
     projectId,
    projectName,
    duration,
    printData: function() {
        console.log(`id: ${this.projectId}\nProject Name: ${this.projectName}\nDuration: ${this.duration} days`);
  }
}
project.printData();