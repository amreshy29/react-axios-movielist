import React from "react";

export default function MovieTile(props) {
  const movie_title = props.movieTile.map((movie, i) => {
    return <MovieRow key={i} movie_row={movie} />;
  });
  const renderHead = () => {
    return (
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
    );
  };
  return (
    <div className="App">
      <table className="table">
        {renderHead()}
        <tbody>{movie_title}</tbody>
      </table>
    </div>
  );
}

function MovieRow({ movie_row }) {
  // console.log(movie_row);
  return (
    <tr key={movie_row.movie_title}>
      <td>{movie_row.movie_title}</td>
      <td>{movie_row.director_name}</td>
      <td>{movie_row.actor_1_name}</td>
      <td>{movie_row.actor_2_name}</td>
    </tr>
  );
}
