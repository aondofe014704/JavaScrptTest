studentRecordOne = {
    groceries: 150,
    diningOut: 100,
    transportation: 50,
    entertainment: 80
}
davidExpenses = [studentRecordOne];

totalAmountOfExpenses = 0;
console.log(totalAmountOfExpenses);

for(index in davidExpenses){
    for(count in davidExpenses[index]){
        totalAmountOfExpenses += davidExpenses[index][count];

    }
}console.log(totalAmountOfExpenses);
