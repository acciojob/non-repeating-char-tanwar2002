function firstNonRepeatedChar(str) {
 let map= new Map()
	for(let c of str){
		map.set(c,(map.get(c)||0)+1)
	}
	for(let c of str){
		if(map.get(c)==1){
			return c
		}
	}
	return null
}
// const input = prompt("Enter a string");
// alert(firstNonRepeatedChar(input)); 
