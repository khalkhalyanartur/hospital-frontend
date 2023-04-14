const url = 'http://localhost:5000';
const regExpPassword = (/(?=.*\d)[a-zA-Z0-9]{6,}/);
const event = ["login"];

const textAppointments = [
  {
    id: 1,
    title: "Имя"
  }, 
  {
    id: 2,
    title: "Врач"
  }, 
  {
    id: 3,
    title: "Дата"
  }, 
  {
    id: 4,
    title: "Жалобы"
  },
  {
    id: 5,
    title: ""
  }
];

const doctors = [
  "Евгений Олегович Комаровский",
  "Геннадий Петрович Малахов",
  "Андрей Владимирович Курпатов",
  "Геннадий Григорьевич Онищенко "
]

export {url, regExpPassword, event, textAppointments, doctors}
