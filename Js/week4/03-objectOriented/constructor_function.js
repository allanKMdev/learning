function Movie(title, releaseDate) {
    this.title = title;
    this.releaseDate = releaseDate;
    this.Movie = function() {
      return `The movie ${this.title} was released on ${this.releaseDate}.`;
    };
  }
  
  const tetrisMovie = new Movie("Tetris", "Thursday, July 20");
  
  console.log(tetrisMovie.Movie()); 