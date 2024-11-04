// Create a function that can create a triangle pattern according to the height we provide like the
// following :
// 01
// 02 03
// 04 05 06
// 07 08 09 10

// ● Parameters : height → triangle height

const triangle = (height: number) => {
  let n = 1

  for (let i = 1; i <= height; i++) {
    let nums: string = ''

    for (let j = 1; j <= i; j++) {
      nums += n > 9 ? n : '0' + n + ' '
      n++
    }
    console.log(nums)
  }
}

console.log('\nExercise 1')
triangle(4)

// Create a function that can loop the number of times according to the input we provide, and will
// replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with
// "FizzBuzz".

const fizzBuzz = (n: number) => {
  let result: string = ''

  for (let i = 1; i <= n; i++) {
    let str: string = ''

    if (i % 3 === 0 && i % 5 === 0) {
      str = 'FizzBuzz'
    } else if (i % 3 === 0) {
      str = 'Fizz'
    } else if (i % 5 === 0) {
      str = 'Buzz'
    } else {
      str = i.toString()
    }

    result += str + (i !== n ? ' ,' : '')
  }

  return result
}

console.log('\nExercise 2')
console.log(fizzBuzz(15))

// ● Create a function to calculate Body Mass Index (BMI)
// ● Formula : BMI = weight (kg) / (height (meter))2
// ● Parameters : weight & height
// ● Return values :
// ○ < 18.5 return “less weight”
// ○ 18.5 - 24.9 return “ideal”
// ○ 25.0 - 29.9 return “overweight”
// ○ 30.0 - 39.9 return “very overweight”
// ○ > 39.9 return “obesity”z

const calculateBMI = (weightInKilogram: number, heightInMeter: number) => {
  const bmi = weightInKilogram / (heightInMeter * heightInMeter)

  if (bmi < 18.5) return 'less weight'
  else if (bmi < 25) return 'ideal'
  else if (bmi < 30) return 'overweight'
  else if (bmi < 40) return 'very overweight'
  else return 'obesity'
}

console.log('\nExercise 3')
console.log(calculateBMI(65, 1.8))

// ● Write a function to remove all odd numbers in an array and return a new array that contains even numbers only

const evenNumbers = (nums: number[]) => {
  return nums.filter((num) => num % 2 === 0)
}

console.log('\nExercise 4')
console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

// ● Write a function to split a string and convert it into an array of words

const splitString = (str: string) => {
  return str.split(' ')
}

console.log('\nExercise 5')
console.log(splitString('Hello Big World'))
