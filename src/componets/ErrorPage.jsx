const ErrorPage = (props) => {
    const error = props.errorMessages;
    return (
        <>
            <div className="errorMessage">
                <img src="images/errorIcon.webp" alt=""/>
                <center><h1>{error}</h1></center>
            </div>
        </>
    );
}
export default ErrorPage