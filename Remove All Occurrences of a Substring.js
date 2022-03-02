//1910. Remove All Occurrences of a Substring

var removeOccurrences = function(s, part) {
	let h = s;
	let c = true
	while (c){
	let count = 0;
	for(let i=0; i<=h.length-(part.length); i++){
		let str = "";
		for(let j=0; j<part.length; j++){
			str += h[i+j];
		}
		if(str==part){
			let starting = h.substr(0,i);
			let ending = h.substr(i+part.length,h.length);
			h=starting+ending;
			count++;
			break;
		}

	}
	if(count==0){
		c=false;
	}
}

return h
	
};
console.log(removeOccurrences("daabcbaabcbc", "abc"));