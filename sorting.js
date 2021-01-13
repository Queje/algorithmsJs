// constant variable for exercice 1, the Two-Sum problem
const list = [10, 15, 3, 7, 6, 4, 2]
const value = 10

// constant variable for exercice 2, the skyscraper problem
const list2 = [3, 7, 8, 3, 6, 1]

class Sorting {
    constructor(turnCount = 0) {
        this.turnCount = turnCount
    }

    twoSum(array, target) {
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

    skyScraper1(array) {
        const result =[]
        if (array.length == 0) {
            return result
        } else if (array.length > 0) {
            result.push(Math.max(...array))
        }
        console.log(result)
        return this.skyScraper1(array.slice(array.lastIndexOf(Math.max(...array))+1,array.length))
    };

    skyScraper2(array) {
        let result = []
        result.push(array[array.length-1])
        for(let i=array.length; i > 1 ; i--){
            if (array[i-2] > array[i-1]) {
                result.push(array[i-2])
            }
        }
        return result.length
    };

}

function Apply() {
    const exercice = new Sorting();
    console.log(`sujet 1: exercice1: y a t'il 2 nombres dans le tableaux dont la somme fait ${value} ?`);
    console.log(exercice.twoSum(list, value));

    console.log(`sujet 2: exercice1: Combien d'immeubles ayant la vue sur le soleil (skyline avec une seule boucle?) ? ${list2}`);
    console.log(exercice.skyScraper1(list2));
    
    console.log(`sujet 2: exercice6: Combien d'immeubles ayant la vue sur le soleil (skyline avec une seule boucle?) ? ${list2}`);
    console.log(exercice.skyScraper2(list2));
};

Apply();

