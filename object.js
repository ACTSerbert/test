let name =  "Almaz";
const second_name = name;

console.log(second_name);

name = "Ramis";
console.log(second_name);


const movie = {
    name: "Зеркалка",
    showed_at: 2008,
    time: 90,
}

const second_movie = movie;

console.log("Movie:", movie, "\n", "Second movie:", second_movie);
movie.name = "Доктор"


console.log("Second movie еще раз", second_movie);





// переменная хранит не сам обект а ссылку на него
