let aboutMe = ["Muxammadaziz", "15", "Farg'ona", "Oquvchi"];
let aboutMeObject = {
  ism: "Muxammadaziz",
  yosh: "15",
  yashashJoy: "Farg'ona",
  ish: "Oquvchi",
  tillar: ["rus tili", "ingiliz tili", "o'zbek tili"],
  oqishlar: ["it", "ingiliz tili", "maktab"],
  Qiziqishlar: ["oqish", "biznes", "treyding", "futbol", "onlayn oyinlar"],
};

let meObject = {
  familya: "Alijonov",
  ism: "Muxammadaziz",
  yosh: "14",
  yashashJoy: "Farg'ona",
  hobby: "SPORT,IT, Ingliz-tili, saytlar,onlayn oyinlar,",
  oqishJoy: "40-maktab,Najot Ta'lim",
};



const newPerson={
  name:"Muxammadaziz",
  age:"14",
  sayName:function(){
    console.log("Mening ismim" + this.name);
  },
  sayAge:function(){
    console.log("Men" + this.age + "yoshdaman");
  },
  sayAll:Function(){
  this.sayName();
    this.sayAge();
  }
}