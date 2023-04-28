let minus_1 = document.querySelector(".minus")
let plus_1 = document.querySelector(".plus")
let number_1 = document.querySelector(".number")

let str_1 = document.querySelector(".clasica")
let str_close_1 = document.querySelector("#str_1_cl")
let block_str_1 = document.querySelector(".types")
//block_str_1.style.display = "none"
// str_close_1.style.display = "none"


let answer_1 = document.querySelector(".text_o")
answer_1.style.display = "none"


let answer_2 = document.querySelector(".two")
answer_2.style.display = "none"


let answer_3 = document.querySelector(".tree")
answer_3.style.display = "none"

let block_str_2 = document.querySelector(".offices_calc")
//block_str_2.style.display = "none"
let str_2 = document.querySelector(".offices")
let str_close_2 = document.querySelector("#str_2_cl")


let block_str_3 = document.querySelector(".list")
//block_str_3.style.display = "none"
let str_3 = document.querySelector(".but_dop_flat")
let strel = document.querySelector("#str_3")
let str_close_3 = document.querySelector("#str_3_cl")


let but_close = document.querySelector(".but_close")

but_close.addEventListener("click", function() {
	answer_1.style.display = "none"
})

let but_close_2 = document.querySelector(".cl")

but_close_2.addEventListener("click", function() {
	answer_2.style.display = "none"
})


let but_close_3 = document.querySelector(".cl2")

but_close_3.addEventListener("click", function() {
	answer_3.style.display = "none"
})


let vop = document.querySelector("#vop")
vop.addEventListener("click", function() {
	answer_1.classList.add("block")
		answer_1.style.display = "block"
})

let vop2 = document.querySelector("#vop_2")
vop2.addEventListener("click", function() {
	answer_1.style.display = "block"
})

let vop3 = document.querySelector("#vop_3")
vop3.addEventListener("click", function() {
	answer_1.style.display = "block"
})

let vop4 = document.querySelector("#vop_4")
vop4.addEventListener("click", function() {
answer_2.classList.add("block")
	answer_2.style.display = "block"
})

let vop5 = document.querySelector("#vop_5")
vop5.addEventListener("click", function() {
	answer_2.style.display = "block"
})

let vop6 = document.querySelector("#vop_6")
vop6.addEventListener("click", function() {
	answer_2.style.display = "block"
})

let vop7 = document.querySelector("#vop_7")
vop7.addEventListener("click", function() {
	answer_3.style.display = "block"
	answer_3.classList.add("block")
})

minus_1.addEventListener("click", function() {
	number_1.innerHTML -= "1"
})

plus_1.addEventListener("click", function() {
	number_1.innerHTML = +number_1.innerHTML + 1
})

str_1.addEventListener("click", function() {
	block_str_1.classList.toggle("block")
	/* str_close_1.style.display = "block"
	str_1.style.display = "none" */
})
str_close_1.addEventListener("click", function() {
	block_str_1.style.display = "none"
	str_close_1.style.display = "none"
	str_1.style.display = "block"
})





str_2.addEventListener("click", function() {
	block_str_2.classList.toggle("block")
	/* str_close_2.style.display = "block"
	str_2.style.display = "none" */
})
str_close_2.addEventListener("click", function() {
	block_str_2.style.display = "none"
	str_close_2.style.display = "none"
	str_2.style.display = "block"
})




str_3.addEventListener("click", function() {
	block_str_3.classList.toggle("block")
	console.log(1)
	/* str_close_3.style.display = "block"
	strel.style.display = "none" */
})
/* str_close_3.addEventListener("", function() {
	block_str_3.style.display = "none"
	str_close_3.style.display = "none"
	str_3.style.display = "block"
})
 */
