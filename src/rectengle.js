// exports.rectengle  = (l,w) => l * w;
// exports.perimeter = (l,w) => 2*(l + w);

// const area  = (l,w) => l * w;
// const perimeter = (l,w) => 2*(l + w);

// module.exports = {
//     area,
//     perimeter
// }

// const Bonus = (salary) => salary * 0.10;
// const BonusOne = (salary) => salary * 0.20;
// const BonusTwo = (salary) => salary * 0.30;

// module.exports = {
//     Bonus,
//     BonusOne,
//     BonusTwo
// }

// module.exports = (l, w, callback) => {
//   console.log(callback);
//   if (l <= 0 || w <= 0) {
//     callback(null, new Error("Error Message"));
//   } else {
//     callback(
//       {
//         area: () => l * w,
//         perimeter: () => 2 * (l + w)
//       },
//       null
//     );
//   }
// };

module.exports = (salary,callback) =>{

    if(salary <= 10000){
        callback({handleSalary : () => salary * 0.10})
    }else if(salary <= 20000){
        callback({handleSalary : () => salary * 0.20})
        
    }else if(salary <= 30000){
        callback({handleSalary : () => salary * 0.30})
    }
}



