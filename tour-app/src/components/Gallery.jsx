//Gallery.jsx (Tour List Component)

//Imports React and TourCard component.
import React, { useState } from 'react'
import TourCard from './TourCard,jsx'

//Creates the Gallery component which displays a list of tours from an API.
const Gallery = ({ tours, setTours, onRemove }) => {

    //State to manage loading and error states.
    const [loading, setLoading] = useState(true)

    //Error state is set to null so that it checks for an error during the fetch process.
    const [error, setError] = useState(null)

    //Function to fetch tours from the API.
    const fetchTours = async () =>{
        try {

            //Fetches data from the API and sets the tours state.
            const response = await fetch('https://course-api.com/react-tours-project')
            const data = await response.json()
            setTours(data)
            setLoading(false)

    //If there is an error, set the error state to true.
    } catch (error) {
        //Console logs any errors.
        console.error('Error fetching tours:', error)
        setError(true)
        setLoading(false)
     }
    }

    //Function to remove a tour from the list.
    useEffect(() => {
        fetchTours()
    }, [])

    //If there is an error, display the apprporiate error message.
    if(error) {
        return <h3>Something Went Wrong</h3>
    }

    if(loading) {
        return <h3>Loading...</h3>
    }

    if (tours.length === 0) {
        return <h3>No Tours Left</h3>
    }

    //If there are tours, map through the tours and display each TourCard component.
    return (
        <section className='gallery'>
            {tours.map((tour) => (
                <TourCard key={tour.id} {...tour} onRemove={onRemove} />
            ))}
        </section>
    )
}

//Exporting the Gallery component.
export default Gallery