//your JS code here. If required.
let btn = document.querySelector("input")
let sel = document.querySelector("#colorSelect")
let opts = document.querySelectorAll("option")
btn.addEventListener("click", () => {
	//console.log("Clicked")
	for(let v of opts){
		if(sel.value == v.innerText){
			sel.removeChild(v)
			break
		}
	}
})

