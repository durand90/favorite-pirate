import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom'




export const Display = () => {



    const [pirates, setPirates] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/pirates')
            .then(res => {
                console.log(res.data)
                setPirates(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    const deletePirate = (deleteIdx) => {
        console.log('delete working')

        axios.delete('http://localhost:8000/api/pirates/' + deleteIdx)
            .then(res => {
                console.log(res.data)
                setPirates(pirates.filter((pirate) => pirate._id !== deleteIdx));
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <div style={{ backgroundImage: 'url("https://i.pinimg.com/originals/0c/97/0c/0c970c8b7986fdb4243c98126c6f9bd0.jpg")', margin:'0 auto' }}>

                {/* <p>{JSON.stringify(pirates)}</p> */}
                <h1 style={{ backgroundColor: 'brown' }}>Favorite Pirate</h1>
                <button><Link to='/pirate/create'>Add Pirate</Link></button>

                {
                    pirates.map((pirate, index) => {
                        return (
                            <div style={{
                                backgroundColor: 'blue', width: '400px', height: '200px', margin: '0 auto',
                                
                            }}
                                key={pirate._id}>
                                <p style={{color: 'white'}}>{pirate.pirateName}</p>
                                <div style={{backgroundColor: 'green'}}>
                                    <img
                                        style={{ width: '200px', heigth: '40px' }}
                                        src={pirate.image}
                                    />
                                    <div>
                                        <button style={{ backgroundColor: 'yellow', color: 'blue' }}><Link to={'/pirate/view/' + pirate._id}>view pirate</Link></button>
                                        <button style={{ backgroundColor: 'red', color: 'white' }} onClick={() => deletePirate(pirate._id)}>walk the plank</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>

        </div>

    )
}

export default Display;