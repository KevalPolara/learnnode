const express = require("express");

const app = express();

// app.use(express.json());

// let institute = [
//   {
//     id: 1,
//     name: "ABC IT institute",
//     seat: [
//       {
//         react: 15,
//         node: 20,
//         full_stack: 10,
//         ui_ux: 0
//       }
//     ]
//   },
//   {
//     id: 2,
//     name: "XYZ IT institute",
//     seat: [
//       {
//         react: 0,
//         node: 70,
//         full_stack: 0,
//         ui_ux: 10
//       }
//     ]
//   },
//   {
//     id: 3,
//     name: "PQR IT institute",
//     seat: [
//       {
//         react: 50,
//         node: 30,
//         full_stack: 0,
//         ui_ux: 5
//       }
//     ]
//   },
//   {
//     id: 4,
//     name: "LNM IT institute",
//     seat: [
//       {
//         react: 2,
//         node: 0,
        
//         ui_ux: 10
//       }
//     ]
//   },
//   {
//     id: 5,
//     name: "QYP IT institute",
//     seat: [
//       {
//         react: 0,
//         node: 0,
//         full_stack: 0,
//         ui_ux: 0
//       }
//     ]
//   }
// ];

// app.get("/", (req, res) => {
//   console.log("Hello World in Node Js");

//   let fData = institute
//     .map(v => {
//       return {
//         id: v.id,
//         name: v.name,
//         seat: v.seat.map(v =>
//           Object.fromEntries(Object.entries(v).filter(v => v[1] > 0))
//         )
//       };
//     })
//     .filter(v => Object.keys(v.seat[0]).length > 0);

//   res.status(200).json({ data: fData });
// });

// app.post("/", (req, res) => {
//   let inputData = req.body;
//   console.log(inputData);

//   let ans = Object.entries(inputData.seat[0]).filter(([key, val]) => val !== 0);
//   console.log(ans);

//   if (ans.length) {
//     institute.push(inputData);
//     res.status(200).json({ message: "Data Push Succesfully" });
//   } else {
//     console.log("error");
//   }
// });

// app.put("/", (req, res) => {
//   const id = req.query.id;
//   console.log(id);

//   let inputData = req.body;
//   console.log(inputData);

//   let index = institute.findIndex(v => v.id == id);
//   console.log(index);

//   if (index !== -1) {
//     institute[index] = inputData;
//     res.status(200).json({ message: "Data Edit Succesfully", data: institute });
//   } else {
//     console.log("error");
//   }
// });

// app.delete('/', (req,res) => {
//     const id = req.query.id;
//     console.log(id);

//     let bodyData = req.body;
//     console.log(bodyData);

//     if(!isNaN(id)){
//        let ans = institute.filter((v) => v.id != id);
//        res.status(200).json({message : "Data Deleted Succesfully", data : ans})
//     }else{
//         console.log("error");
//     }
// })

// app.delete('/:instituteId/:courseKey', (req,res) => {
//     console.log("Hello World in Node Js");
    
//     const instId = parseInt(req.params.instituteId)

//     const courseKey = req.params.courseKey

//     const fInstitute = institute.find((v) => v.id === instId);
//     console.log(fInstitute);
    
//     if (fInstitute) {
//         if (fInstitute.hasOwnProperty(courseKey)) {
//              delete fInstitute[courseKey]
            
//             res.status(200).json({message: `Key ${courseKey} deleted successfully`,data : institute})
//         } else if(fInstitute.seat[0].hasOwnProperty(courseKey)){

//             delete fInstitute.seat[0][courseKey]
//             res.status(200).json({message: `seat's Key ${courseKey} deleted successfully`,data : institute})

//         }else {
//             res.status(404).json({message: `The key ${courseKey} is not in the database`})
//         }
//     } else {
//         res.status(404).json({message: 'Institute not found'})
//     }
// }) 


const routes = require('./routes/v1/index');

app.use('/v1',routes);


app.listen(3000, () => {
  console.log("Server Started Succesfully");
});

// const rectengle = require("./rectengle");
// const rect = require("./rectengle");
// console.log("hello word");

// let ans =rect.rectengle(10,20);
// let ansOne = rect.perimeter(10,20);
// console.log(ans,ansOne);

// const handlerect = (l, w) => {
//   if (l <= 0 || w <= 0) {
//     console.log("Your Length And Width is in Less Than Zero");
// } else {
//     const ans = rect.area(l, w);
//     const ansone = rect.perimeter(l, w);
//     console.log(ans, ansone);
//   }
// };
// handlerect(10, -2);

// const handleBonus = salary => {
//   if (salary <= 10000) {
//     console.log(rect.Bonus(salary));
//   } else if (salary <= 20000) {
//     console.log(rect.BonusOne(salary));
//   } else if (salary <= 30000) {
//     console.log(rect.BonusTwo(salary));
//   }
// };

// handleBonus(5000);

// const solveReact = (l,w) =>{
//   rect(l,w,(rectengle ,error) =>{
//     if(error){
//       console.log(error.message);
//     }else{
//       console.log(rectengle.area());
//       console.log(rectengle.perimeter());
//     }
//   });
// }

// solveReact(10,20);
// solveReact(10,2);
// solveReact(0,0);

// const handleBonus = (salary) =>{
//   rect(salary)
//   // rect(salary , (bonusname) =>{
//   //   console.log(bonusname);
//   //   // console.log(bonusname.handleSalary());
//   // })
// }

// handleBonus(30000);
