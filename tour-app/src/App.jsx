//Importing React and useState from react, styles from styles.css, and Gallery component from Gallery.jsx.
import react, { useState } from 'react'
import Gallery from './components/Gallery.jsx'
import './styles/styles.css'

//Creating the App component which is the main component of the application.
function App() {
const [tours, setTours] = useState([])
const removeTour = (id) => {
  setTours((prevTours) => prevTours.filter((tour) => tour.id !== id))
}
//Running Gallery component which displays a list of tours from an API.
return (
  <main>
    <h1> Our Tours</h1>
    <Gallery tours={tours} setTours={setTours} onRemove={removeTour} />
  </main>
)
}

//Exporting the App component as the default export of the module.
export default App