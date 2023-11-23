// let Btn=document.getElementById('btn');
// let body=document.querySelector('body');
// Btn.addEventListener('click',()=>{
//     const Div=document.createElement('div');
//     body.append(Div)
//     Div.style.backgroundColor="violet";
//     Div.style.height="100px";
//     Div.style.width="100px";
// })

// let arr=[
//    {
//     Name:"Amaliya",
//     Year:"20"
//    },
//    {
//    Name:"Aynur",
//    Year:"19"
//    },
//    {
//     Name:"Fatima",
//     Year:"19"
//    },

//    {
//     Name:"Xedice",
//     Year:"19"
//    }
// ]
// let body=document.querySelector('body');
// const ul=document.createElement('ul');

// for(i=0;i<arr.length;i++){
//     const li=document.createElement('li');
//     li.innerHTML+=arr[i].Name + "-" +arr[i].Year;
//     ul.append(li);
// }
// document.body.append(ul);


///-----------3---------------//
// const  fname=document.getElementById('fname');
// const  lname=document.getElementById('lname');
// const  btn=document.getElementById('btn');
// let body=document.querySelector('body');
// btn.addEventListener('click',()=>{
//     const Div=document.createElement('div');
//     body.append(Div);
//     Div.append(fname.value +" "+ lname.value)
// })

///-----------4-------------//

// const nav=document.querySelector('nav')
// console.log(nav.children[1].children[0])
// console.log(nav.lastElementChild)
// console.log(nav.children[1].children[2].firstElementChild)
// console.log(nav.children[1].children[1].firstElementChild.innerText)

///-----------5-----------------//
let body=document.querySelector('body')
let first=document.createElement('input')
let second=document.createElement('input')
let third=document.createElement('input')
let btn=document.getElementById('btn')

first.setAttribute('type','radio');
first.setAttribute('name','example');
second.setAttribute('type','radio');
second.setAttribute('name','example');
third.setAttribute('type','radio');
third.setAttribute('name','example');

first.value="yaslilar ucun";
second.value="boyukler ucun";
third.value="kicikler ucun";

body.append(first,second,third);

btn.addEventListener('click',()=>{
    let fatime=document.querySelector('input[name="example"]:checked').value;
    console.log(fatime);
})


