const driversArray = ['Sally', 'Bob', 'Freddy', 'Claudia']

const returnFirstTwoDrivers = () => {
    
    return function (driversArray) {
         return driversArray
    }
}

returnFirstTwoDrivers('Sally', 'Bob')