// constant variable for exercice 1, the Two-Sum problem
const list = [10, 15, 3, 7, 6, 4, 2]
const value = 10

// constant variable for exercice 2, the skyscraper problem
const list2 = [3, 7, 8, 3, 6, 1]

class Sorting {
    constructor(turnCount = 0) {
        this.turnCount = turnCount
    }

    twoSumExo1(array, target) {
        let result = [];
        for (let i = 0; i < array.length-1; i++) {
            for (let j = i+1; j < array.length; j++) {
                if (array[i] + array[j] === target) {
                    result.push(`${target} = ${array[i]} + ${array[j]}`);
                }
            }
        }
        if (result.length > 0) {
            console.log(result)
            return true
        } else {
            return false
        }
    };

    skyScraperExo2(array) {

    };

    twoSumExo3(array, sum) {
        let storageHash = {}
        let nums = []
        for(let i in array){
            let addend = sum - array[i]
            
            if (addend in storageHash){
                nums.push([addend, array[i]])
            }
            storageHash[array[i]] = i
        }
        if(nums.length > 0) {
            console.log(nums)
            return true
        } else {
            return false
        }
    };


    skyScraperExo4(array) {
        let result = []
        result.push(array[array.length-1])
        for(let i=array.length; i > 1 ; i--){
            if (array[i-2] > array[i-1]) {
                result.push(array[i-2])
            }
        }
        return result.length
    };

    twoSumExo5(array, number){
        if (array.length == 1) {
            return false
        }
        let diff = number - array[0];
        let element = array.slice(1).find(element => diff == element)
        if (element == diff) {
                return true
        }
        else if (element == undefined) {
            return this.twoSumExo5(array.slice(1), number);
        }        
    };

    skyScraperExo6(array) {
        const result =[]
        if (array.length == 0) {
            return result
        } else if (array.length > 0) {
            result.push(Math.max(...array))
        }
        console.log(result)
        return this.skyScraperExo6(array.slice(array.lastIndexOf(Math.max(...array))+1,array.length))
    };

}

function Apply() {
    const exercice = new Sorting();
    console.log(`sujet 1: exercice1: y a t'il 2 nombres dans le tableaux dont la somme fait ${value} ?`);
    console.log(exercice.twoSumExo1(list, value));

    console.log(`sujet 1: exercice3: y a t'il 2 nombres dans le tableaux dont la somme fait ${value} ?`);
    console.log(exercice.twoSumExo3(list, value));
    
    console.log(`sujet 2: exercice4: Combien d'immeubles ayant la vue sur le soleil (skyline avec une seule boucle?) ? ${list2}`);
    console.log(exercice.skyScraperExo4(list2));

    console.log(`sujet 1: exercice5: y a t'il 2 nombres dans le tableaux dont la somme fait ${value} ?`);
    console.log(exercice.twoSumExo5(list, value));

    console.log(`sujet 2: exercice6: Combien d'immeubles ayant la vue sur le soleil (skyline avec une recursion) ? ${list2}`);
    console.log(exercice.skyScraperExo6(list2));
};

Apply();

