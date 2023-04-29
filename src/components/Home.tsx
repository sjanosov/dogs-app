import Button from '@mui/material/Button';

function Home() {

  return (
    <>
      <main>
        <div className="welcome-page">
          <div className="wp-content">
            <div>
              <h1>
                Nobody can fully understand the meaning of love unless he’s owned a dog.
              </h1>
              <h2>Find Your Furry Friend at Our Adoption Page</h2>
            </div>
            <Button href="/adoption" variant="contained">
              ADOPT A DOG
            </Button>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home