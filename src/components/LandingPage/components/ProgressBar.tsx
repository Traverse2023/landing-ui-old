const ProgressBar = () => {
    return (
        <main>
            <progress id="progress-bar" className="progress-one" max="100">
              <span className="progress-container">
                <span className="progress-bar"></span>
              </span>
            </progress>
        </main>
    )
}

export default ProgressBar