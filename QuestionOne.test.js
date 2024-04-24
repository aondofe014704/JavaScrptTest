

let {highestScores, addFiveToScores} = require("./QuestionOne.js");

test("filter highest scores", () => {
    let testScores = [20, 30, 60, 45, 95, 80, 25, 75, 60, 90];
    let result = [95, 80, 75, 90];
    expect(result).toEqual([95, 80, 75, 90])

})

test("improve student scores by 5", () => {
    let studentScores = [85, 92, 78, 88, 95];
    let newScores = [90, 97, 83, 80, 95];
    expect(newScores).toEqual([90, 97, 83, 80, 95]);

})

test("square of numbers in a list", () => {
    let listNumbers = [2, 4, 6, 8, 10];
    let result = [4, 16, 36, 64, 100];
    expect(result).toEqual([4, 16, 36, 64, 100]);
})
test("toFindExpensesOfDavidExpenses", ()=>{
    let studentRecordOne ={groceries: 150, diningOut: 100, transportation: 50, entertainment: 80};
    expect(totalAmountOfExpenses).toEqual(380);
})