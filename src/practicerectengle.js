module.exports = (salary, callback) => {

  if (salary <= 10000) {
    callback(salary * 0.1, null);
  } else if (salary <= 20000) {
    callback(salary * 0.2, null);
  } else if (salary <= 30000) {
    callback(salary * 0.3, null);
  }else{
    callback(null,new Error("Salary is Greter Than Thirty Thousand"));
  }
};
