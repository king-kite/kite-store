import { MDBIcon } from "mdb-react-ui-kit";

const createRating = (n) => {
  const no = n < 0 ? 0 : n > 5 ? 5 : n;
  let rating = [...Array(no)].map((e, i) => (
    <li key={i}>
      <MDBIcon color="warning" icon="star" />
    </li>
  ));
  const nl = 5 - rating.length;
  if (rating < 5)
    rating.push(
      [...Array(nl)].map((e, i) => (
        <li key={i + nl}>
          <MDBIcon far color="warning" icon="star" />
        </li>
      ))
    );
  return rating;
};

export default createRating;
