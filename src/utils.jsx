export function isLast(oldResolveList, onResolve){
    let resolveList = [...oldResolveList]; 
    console.log("isListRunning",resolveList);
    for(var i = 0; i < oldResolveList.length; i++){
        
        if (!resolveList[i]){
            if (i == resolveList.length-1){

                resolveList[i] = !resolveList[i]; 
                onResolve(resolveList); 
                return true
            }else{
                resolveList[i] = !resolveList[i]
                onResolve(resolveList); 
                return false
            }
        }
    }
}