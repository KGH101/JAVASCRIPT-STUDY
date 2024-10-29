// console.log numbers that are only divisible by 5 and 7 and between 0 to 500.

for (let i = 0; i <=50; i++) {
    if (i % 5 == 0 && i % 7 ==0) {
       console.log(i);
      }
  }

  // 1. Display numbers from 20 to 80 in console log

  for (let num =20; num<=80; num++){
    console.log(num);
  }

  // 2. Improve num 1 above, only display numbers divisible by 7 i.e 21, 28, 35...

  for (let num=20; num<=80; num++){
    if (num%7==0){
        console.log(num);
    }

  }

  // 3. Store the numbers divisible by 7, in an array

  num_divisible=[]

  // 4. Display that array with all the values.

  for (let num = 20; num<=80; num++) {
    if (num%7==0){
        num_divisible.push(num)
    }   
}
console.log(num_divisible)
