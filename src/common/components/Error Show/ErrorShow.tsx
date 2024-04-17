
const ErrorShow = ({ error }) => {
    if (!error || !error.data) {
        return null; // If error object or data is missing, return null
      }
    return (
        <div>
          <h1>Error <span>{error.status}</span></h1>
          <div>
            <p>
              {error.data.message || "Unknown error event"}
            </p>
            {error.data.errorMessages.map(errorMessage => (
              <p key={errorMessage.path}>
                <strong>{errorMessage.path}: </strong>{errorMessage.message}
              </p>
            ))}
          </div>
        </div>
      );
};

export default ErrorShow;