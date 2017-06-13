// PELEA entre Superman y Goku

let vidaSuperman = 50
let vidaGoku = 50

const MIN_POWER = 5
const MAX_POWER = 12

const siganVivos = () => vidaSuperman > 0 && vidaGoku > 0 

const golpe = () => Math.round(Math.random() * (MAX_POWER - MIN_POWER) + MIN_POWER)

let round = 0

while(siganVivos()){

	round ++
	console.log(`Raund ${round}`)

	let golpeSuperman = golpe()
	let golpeGoku = golpe()

	if(golpeSuperman > golpeGoku){
		console.log(`Superman golpeó con ${golpeSuperman} a Goku`)
		vidaGoku -= golpeSuperman 
	} else{
		console.log(`Gokú golpeó con ${golpeGoku} a Superman`)
		vidaSuperman -= golpeGoku 
	}
}

if (vidaSuperman > vidaGoku){
	console.log(`Superman ha ganado !`)
} else{
	console.log(`Gokú ha ganado !`)
}