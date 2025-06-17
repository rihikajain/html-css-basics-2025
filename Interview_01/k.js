// function key(arr){
//     let n=arr.length
    
//     let non=arr.filter((a)=>{return a!=0})
//     console.log(non)
    
    
//     // for(let i=0;i<n;i++){
//     //     if(arr[i]!==0){
//     //         non.push(arr[i])
//     //     }
//     // }
//     // for(let i=0;i<n;i++){
//     //   if(i<non.length) arr[i]=non[i]
//     //   else arr[i]=0
        
//     // }
    
    
//     console.log(arr) 
// }

// key([0,1,4,0,5,2])


function binary(arr){
    let lar=0
    let cnt=0
    for(let i=0;i<arr.length;i++){
        if(arr[i]===1){
            cnt++
            if(cnt>lar){
                lar=cnt
            }
        }
        else cnt=0
    }
    console.log(lar)
}

binary([1,1,0,0,1,1,1,0])

// function alteCase(str){
//     let result=""
//     for(let i=0;i<str.length;i++){
//         let charCode=str.charCodeAt(i)
//         if(charCode>=97 && charCode<=122){
//             result+=String.fromCharCode(charCode-32)
            
//         }
//         else if(charCode>=65 && charCode<=90){
//             result+=String.fromCharCode(charCode+32)
//         }
//     }
//     console.log(result)
// }

// alteCase("RihiKa"