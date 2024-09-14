import axios from "axios";

export const rickmortyAPIinstanse = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
});

// fetch("hgtppfajioafjoiajsfioaf", {
//   method: "POST",
//   body: JSON.stringify({ username: "test00", password: "fjiosajfaoifa" }),
// })
//   .then((res) => res.json())
//   .then((data) => {})
//   .catch((error) => {});

// axios
//   .post(
//     "hgtppfajioafjoiajsfioaf",
//     {
//       username: "test00",
//       password: "fjiosajfaoifa",
//     },
//     {}
//   )
//   .then((data) => {})
//   .catch((error) => {});
