import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import ResidentInfo from './components/ResidentInfo'
import ResidenList from './components/ResidenList'
import LocationsInfo from './components/LocationsInfo'
import Pages from './components/Pages'

function App() {
  const [locations, setLocation] = useState({})
  const randomItem = Math.floor(Math.random() * 126 + 1)
  const [pages, setPages] = useState({})
  const [isLoading, SetIsLoading] = useState(true)


  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/location/${randomItem}`)
      .then(res => setLocation(res.data))
  }, [])


  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/location`)
      .then(res => {
        setPages(res.data.info)
        SetIsLoading(false)
      })

  }, [])

  const [searchLocation, setSearchLocation] = useState("")
  const getLocation = () => {
    axios.get(`https://rickandmortyapi.com/api/location/${searchLocation}`)
      .then(res => {
        setLocation(res.data)
        setSearchLocation("")
        SetIsLoading(false)
      })
  }

  console.log(locations)
  return (
    <div>
      {isLoading ? (
        <div className='App' style={{background:"#263238"}}>
          <img src="./src/public/change.gif" alt="" />
        </div>
      ) : (
        <div className='App'>
          <div className='box'>
            <div className='header'>
              <div className='input'>
                <h1 className='title'>Rick And Morty</h1>
                <input type="text" value={searchLocation} onChange={e => setSearchLocation(e.target.value)} placeholder="Location for ID" />
                <button onClick={getLocation} >Search</button>
              </div>
            </div>
          </div>
          <LocationsInfo locations={locations} />
          <ResidenList locations={locations} />
          <footer>
            <Pages pages={pages} />
          </footer>
        </div>

      )}

    </div>
  )
}

export default App
