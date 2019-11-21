function monkey(){
<<<<<<< HEAD
    let total =document.getElementById("monkeytotal").value
    let kick =document .getElementById("monkeykick").value
    total =parseInt(total)&& Number(total)
    kink =parseInt(kick)&&Number(total)
=======
    let total = document.getElementById("monkeytotal").value
    let kick = document.getElementById("monkeykick").value
    total = parseInt(total)&&Number(total)
    kick = parseInt(kick)&&Number(kick)
>>>>>>> b829ed4f8a83693654509412384df973fbebf404
    if(isNaN(total)||isNaN(kick)){
        alert('请输入数字')
        return
    }
<<<<<<< HEAD
    let monkey =[]
    for (let i=1; i<=total;i++){
        monkey.push(i)
    }
    let i=0
    while (monkey.length>1){
        i++
        head =monkey.shift()
        if (i%kick!=0){
            monkey.push(head);
        }
    }
    document.getElementById('monkeyking').innerText=monkey[0]
}


function  stat(){
    let str =document.getElementById('str').value     
    let  obj ={}
    
        

}
=======
    let monkey=[]
    for (let i=1;i<=total;i++ ){
        monkey.push(i)
    }
    let i = 0
    while (monkey.length>1){
        i++;
        head = monkey.shift()
        if(i%kick!=0){
            monkey.push(head);
        }
    }
    document.getElementById('monkeyking').innerText = monkey[0]
}
function stat(){
    let str = document.getElementById("str").value
    let obj = {}
    for(let i=0;i<str.length;i++){
        if(!obj[str.charAt(i)]){
            obj[str.charAt(i)]=1;
        }else{
            obj[str.charAt(i)]++
        }
      }
      document.getElementById('result').innerText = JSON.stringify(obj)
    }
>>>>>>> b829ed4f8a83693654509412384df973fbebf404
