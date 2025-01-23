document.getElementById('clicking').addEventListener('click',()=>{
    document.getElementById('main').textContent="abnormal"
})
document.getElementById('secondClick').addEventListener('click',()=>{
    let a =document.getElementById('first')

     a.style.color='red';
    
})

document.getElementById('add').addEventListener('click',()=>{
    const a=parseFloat(document.getElementById("a").value)
    const b=parseFloat(document.getElementById("b").value)
    const c=a+b;

    document.getElementById('display').innerHTML=`${c}`

})