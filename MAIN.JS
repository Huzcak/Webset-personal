// let pengetahuan =[
//     89,90,77,85,84,81,87,84,84,84,84,81,83,88,86
// ]
// let keterampilan =[
//     89,84,83,85,85,81,85,85,81,86,84,81,83,87,86
// ]
// let hasil1 = (pengetahuan[0] + keterampilan[0]) / 2
// let hasil2 = (pengetahuan[1] + keterampilan[1]) / 2
// let hasil3 = (pengetahuan[2] + keterampilan[2]) / 2
// let hasil4 = (pengetahuan[3] + keterampilan[3]) / 2
// let hasil5 = (pengetahuan[4] + keterampilan[4]) / 2
// let hasil6 = (pengetahuan[5] + keterampilan[5]) / 2
// let hasil7 = (pengetahuan[6] + keterampilan[6]) / 2
// let hasil8 = (pengetahuan[7] + keterampilan[7]) / 2
// let hasil9 = (pengetahuan[8] + keterampilan[8]) / 2
// let hasil10 = (pengetahuan[9] + keterampilan[9]) / 2
// let hasil11 = (pengetahuan[10] + keterampilan[10]) / 2
// let hasil12 = (pengetahuan[11] + keterampilan[11]) / 2
// let hasil13 = (pengetahuan[12] + keterampilan[12]) / 2
// let hasil14 = (pengetahuan[13] + keterampilan[13]) / 2
// let hasil15 = (pengetahuan[14] + keterampilan[14]) / 2
 
// console.log("kelompok A")
// console.log(hasil1)
// console.log(hasil2)
// console.log(hasil3)
// console.log(hasil4)
// console.log(hasil5)
// console.log(hasil6)
// console.log("Kelompok B")
// console.log(hasil7)
// console.log(hasil8)
// console.log(hasil9)
// console.log(hasil10)
// console.log("Kelompok C")
// console.log(hasil11)
// console.log(hasil12)
// console.log(hasil13)
// console.log(hasil14)
// console.log(hasil15)


// let pengetahuan = document.getElementById("p")
// let p = pengetahuan
// console.log(p)

function sayGreeting(){
  let  yourName = parseInt(document.getElementById("yourName").value);
  let yourName2 = parseInt(document.getElementById("yourName2").value);
   let hasil = (yourName + yourName2) / 2;
   let hasil2 = document.getElementById('hasil')
   hasil3 = hasil2.innerHTML = "hasil rata rata nilai anda :"+ hasil
}


