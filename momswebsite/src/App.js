import styles from "./App.css"


function App() {
  return (
    <div id="masterOuterContainer" className={styles.masterOuterContainer}> 
      <div id="innerPage" className={styles.innerSomethingElse}>
        <header>
          <title>Simply Stated</title>
          <link rel="icon" href="/finalLogoDark.png" />
          <link
            // rel="stylesheet"
            // href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
            // integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
            // crossorigin="anonymous"
          />
        </header>
        <div id="masterNavBar" className={styles.masterNavBar}>
          <ul>

            <li><img src="/finalLogoDark.png" alt="Logo" width="100"></img></li>
            <li>Home</li>
            <li>Portfolio</li>
            <li>Services</li>
            <li>Schedule</li>
            <li>About</li>
            <li><img src="/linkedIn.png" alt="LinkedInLogo" width="100"></img></li> 
          </ul>
          <h1>
            Give your home the meaning it deserves.
          </h1>
          <h3>
            We help transform your space into the space of your dreams, and are with you every step of the way.
          </h3>
          <p>
            This is where the button will go.
          </p>
        </div>
        <div id="masterMainPanel" className={styles.masterMainPanel}>
        </div>
      </div>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap");
        html,
        body {
          height: 100%;
          margin: 0;
          // border: 5px solid green;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          font-family: "Nunito", sans-serif;
          background-color: #50605E;
          background-image: "/mainPanelBackground.png";
          overflow: auto;
        }
      `}</style>
    </div>
  );
}

export default App;
