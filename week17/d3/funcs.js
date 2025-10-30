let myarr = [1,4,9,16,56,34,6,8]
// what is the smallest number above 10: 

// step 1: filter all numbers above 10
// step 2: find the smallest number

// [16,56,34]
// 16

function is_number_greater_than_10(value){
    return value > 10; 
}
let fitered_arr = myarr.filter(is_number_greater_than_10)
let lowest_number = fitered_arr.reduce(smallest_number)

/// or

myarr.filter(is_number_greater_than_10).reduce(smallest_number)

// or

myarr.filter((value) => value > 10).reduce(smallest_number)

// find biggest number
// acc, value
function biggest_number(accumulator,current_value){
    if(current_value > accumulator){
        return current_value
    }
    else {
        return accumulator
    }
}

function smallest_number(accumulator,current_value){
    if(current_value < accumulator){
        return current_value
    }
    else {
        return accumulator
    }
}

function count_numbers(acc,value){
    return acc + 1
}
myarr.reduce(count_numbers,0)






