
// პირველი კითხვა
let myVariable = 5;
//meore
let testVariable = myVariable;

//mesame
let x = 4;
let y = 5;
let sum = x+y;
let difference = x-y;

x+=12;

let num 
let str = "66";

num=str+10;












//თამაში ჯეირანი
let computerChoice = Math.floor(Math.random()*3);
let i = 0;
let j = 0;

if(computerChoice === 0){
    computerChoice ='ქვა';
}else if(computerChoice===1){
    computerChoice ='ცა';
}else if(computerChoice === 2){
    computerChoice ='მაკრატელი';
}


alert('ჯეირანს მეთამაშები??? პლიზ! მოკლედ ოთხჯერ ვთამაშობთ 2 სურვილზე :* ოღონდ გულწრფელობაა მთავარი')
var name = prompt('შეიყვანე შენისახელი');

for (let m=0; m<4; m++){
    let userChoice = prompt('ჯეირანი!!', 'ცა, ქვა, მაკრატელი');
    if(computerChoice == 'ქვა' && userChoice == ' ქვა'){
        alert(`შენი არჩევანია: ${userChoice} \n კომპიუტერის არჩევანია: ${computerChoice} \n შედეგია:ყაიმი`);
    }else if(computerChoice== 'ქვა' && userChoice== 'ცა'){
        alert(`შენი არჩევანია: ${userChoice} \n კომპიუტერის არჩევანია: ${computerChoice} \n შედეგია:შენ მოიგე`);
        i++;
    }else if (computerChoice== 'ქვა' && userChoice== 'მაკრატელი'){
        alert(`შენი არჩევანია: ${userChoice} \n კომპიუტერის არჩევანია: ${computerChoice} \n შედეგია:შენ წააგე`);
        j++;
    }else if(computerChoice == 'ცა' &&  userChoice== 'ქვა'){
        alert(`შენი არჩევანია: ${userChoice} \n კომპიუტერის არჩევანია: ${computerChoice} \n შედეგია:შენ წააგე`);
        j++;
    }else if(computerChoice == 'ცა' && userChoice == 'ცა'){
        alert(`შენი არჩევანია: ${userChoice} \n კომპიუტერის არჩევანია: ${computerChoice} \n შედეგია:ყაიმი`);
    }else if(computerChoice == 'ცა' && userChoice == 'მაკრატელი'){
        alert(`შენი არჩევანია: ${userChoice} \n კომპიუტერის არჩევანია: ${computerChoice} \n შედეგია:შენ მოიგე`);
        i++;
    }else if(computerChoice == 'მაკრატელი' && userChoice == 'ქვა'){
        alert(`შენი არჩევანია: ${userChoice} \n კომპიუტერის არჩევანია: ${computerChoice} \n შედეგია:შენ მოიგე`);
        i++;
    }else if(computerChoice == 'მაკრატელი' && userChoice == 'ცა'){
        alert(`შენი არჩევანია: ${userChoice} \n კომპიუტერის არჩევანია: ${computerChoice} \n შედეგია:შენ წააგე`);
        j++;
    }else if(computerChoice == 'მაკრატელი' && userChoice == 'ცამაკრატელი'){
        alert(`შენი არჩევანია: ${userChoice} \n კომპიუტერის არჩევანია: ${computerChoice} \n შედეგია:ყაიმი`);
    }else if(userChoice == 'გიუშას ლექციები'){
        alert('Welcome to Master Georges lectures');
    }
}
console.log(`საბოლოო ანგარიშია: ${name} ${i} - ${j} #squirelJr`)




