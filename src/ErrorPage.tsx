import { Link } from "react-router-dom"

const ErrorPage = () => {
  return (
    <main id="errorPage">
      <h1>
        404 Page not found
      </h1>
      <Link to="/">Go back to main</Link>
    </main>
  )
}

export default ErrorPage