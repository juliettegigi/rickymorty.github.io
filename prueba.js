const obj={
    id:1,
    name:"marti"
}

const arr=[{id:8,name:"marti"},
{id:0,name:"marti"},
{id:3,name:"marti"},
{id:0,name:"marti"},{id:1,name:"marti"}]

console.log(arr.sort((a,b)=>{
    if(a.id>b.id) return(-1)
      
}))

console.log(arr);