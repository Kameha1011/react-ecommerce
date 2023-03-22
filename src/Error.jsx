import { Link, useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      <main className="container-fluid vh-100 d-flex justify-content-center align-items-center bg-warning">
        <section className="text-center">
          <h1 className="display-1">Oh no! </h1>
          <h2>An unexpected error has Ocurred</h2>
          <p className="text-muted">{error.status} {error.statusText}</p>
          <Link to={'/'} className="btn btn-dark">Go back to homepage</Link>
        </section>
      </main>
    </>
  )
}

export default Error