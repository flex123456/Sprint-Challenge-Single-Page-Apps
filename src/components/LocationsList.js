import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LocationCard from './LocationCard'

export default function LocationsList() {
const [locs, setLocs] = useState([])
      console.log(locs)
  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get('https://rickandmortyapi.com/api/location')
          .then(res => {
              setLocs(res.data.results)
            
            }) 
          .catch(err => console.log(err))
  }, [])

  return <section className='character-list grid-view'>
        {locs.map(loc => <LocationCard data={loc}/>)} 
      
    </section>

}