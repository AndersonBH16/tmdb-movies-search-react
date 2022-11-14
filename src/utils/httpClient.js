const API = "https://api.themoviedb.org/3";

export function get(path){
    return fetch(API + path, {
          headers:{
            Authorization: 
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNTgzZGRlYmVmODljMDczNDFkY2I2YzAxNzliMWMxMyIsInN1YiI6IjYzNzFiYTUxZTljMGRjMDA5OGEyZDFlYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XSVvRFxkgi-8kFW1SdQUoF0t6RFXDjE1pfePAmYGWMI",
            "Content-Type":
              "application/json;charset=utf-8"
          },
        })
          .then((result) => result.json())
}