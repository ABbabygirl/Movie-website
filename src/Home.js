
import React, { useState, useEffect } from 'react'
import "./style.css"
import movieTrailer from 'movie-trailer'
import YouTube from 'react-youtube'


function Home() {

  // let a = 67;

  // let [a, b] = useState(67)



 
  // const movies = [
  //   { image: "./../mad web.webp", title: "Grimm", id: "1", description: "csdychndj" },
  //   { image: "./../landscape.avif", title: "The 100", id: "2", description: "lmfmjjfjf" },
  //   { image: "./../netf.png.png", title: "My lovely liar", id: "3", description: "driikxemw" },
  //   { image: "./../netflix 2.jpg", title: "The Mother", id: "4", description: "iwkozwdj" },
  //   { image: "./../landscape 2.avif", title: "Twinkling watermelon", id: "5", description: "mzbuuqhoe" },
  //   { image: "./../COVER.jpg", title: "Madame Web", id: "5", description: "mzbuuqhoe" },

  // ]

  // function greet(Taiwo){
  //   alert("Hello")
  // }
  // function calc(first, second) {
  //   alert(first + second)
  // function calc(){
  //   alert(Math.random() *1000)
  // }
  // function checkAge(){
  //   // alert(Math.round}
  //   if(age >= 18){
  //   alert("you can drive")
  // }else{
  //   alert("you can't drive")
  // }

  // function getData(){
  //   let text = document.querySelector("input").value;
  //   alert(text)
  // }


  const [movies, setMovies] = useState([])
  const [movieId, setMovieId] = useState("")

  useEffect( () => {
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=ddd60679d81504b5b5b5eb7206d72948")
    .then((res) => res.json())
    .then((res) => setMovies(res.results))
    .catch((err) => console.log(err))

  }, [])

    


// useEffect(() => {
//   document.getElementById("btn").onclick = function(){
//     document.getElementById("test").style.backgroundColor = "red"
//   }
// }, [])

  // function changeNumber() {
  //   // a = 100;
  //   b(100)
  // }


// function handleClick(){
//   alert("hello")
// }
function handleClick(title){
  // alert(title)
  movieTrailer(title)
  // .then((res) => console.log(res))
  .then((res) => {
    let vidId = res.split("=")[1]
    // console.log(vidId[1]);

    setMovieId(vidId)


  })
}

const opt = {
      playerVars: {
        autoplay: 1,
        // controls: 0,
        // showinfo: 0,
        // rel: 0,
        // modestbranding: 1,
        // disablekb: 1,
        // iv_load_policy: 3,
        // wmode: "transparent",
      }
}

  return (



    <div className= "" id="test">

      <div className="banner">
        <div>
          <h4>The Marvels</h4>

          <div>
            <button className="btn btn-outline-secondary my-2 my-sm-0">Watch Now</button>
            <button className="btn btn-outline-secondary my-2 my-sm-0">Save For Later</button>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            commodi repudiandae, voluptas et iusto itaque!
          </p>
        </div>
      </div>



      {/* <h3>{a}</h3> */}
      {/* <button id="btn">click to change</button> */}

      <main className="bg-dark p-5">
        <div className="container">
          <h5 className="text-white mb-5 ">Trending</h5>

          <div className="movie-poster d-flex ">

            {/* <div>
              <img src={movies[0].image} alt="poster-img" />
            </div> */}

            {movies.map(each => (

              <img onClick={ () =>handleClick(each.original_title)} src={ "https://image.tmdb.org/t/p/w500/" + each.poster_path} alt="poster-image" />
            )

            )

            }
          </div>

        <div className='player'>

           <YouTube
            videoId = {movieId}
            opts = {opt}
            />

        </div>

        </div>


      </main>



      {/* <button onClick={greet(Taiwo)}>Search</button> */}
      {/* <button onClick={() => calc(12, 2)}>Search</button> */}
      {/* <button onClick={calc()}>search</button> */}
      {/* <button onClick={checkAge()}>search</button> */}
      {/* <input type="text" onChange={(m) => console.log(m.target.value)} />
    <button onClick={getData}>SEARCH</button

      <h1>Hello World</h1> */}

    </div>
  )
}

export default Home