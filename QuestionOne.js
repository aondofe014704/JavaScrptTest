

function filterHighestScores(testScores) {
    return testScores.filter(result => result >= 70);
    
    }
    
    function improveStudentScores(studentScores) {
        return studentScores.map((num)=> num + 5);
    
    }
    
    function findTheSquaresOfThis(listOfNumbers) {
        return listOfNumbers.map(num * num);
    }
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
    