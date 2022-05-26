import axios from 'axios';
import React, { useState } from 'react'

import { Link, useHistory } from 'react-router-dom';


export const Create = () => {

    const history = useHistory();

    const positions = ['Captain', 'First Mate', 'Quarter Master', 'Boatswain', 'Powder Monkey']


    const [pirateName, setPirateName] = useState('');
    const [image, setImage] = useState('');
    const [treasureChests, setTreasureChests] = useState('');
    const [catchPhrase, setCatchPhrase] = useState('');
    const [pegLeg, setPegLeg] = useState(true);
    const [eyePatch, setEyePatch] = useState(true);
    const [hookHand, sethookHand] = useState(true);
    const [crewPosition, setCrewPosition] = useState('');

    const [errors, setErrors] = useState([]);




    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('button clicked')

        const newPirate = {
            pirateName,
            image,
            treasureChests,
            catchPhrase,
            crewPosition,
            eyePatch,
            pegLeg,
            hookHand

        }

        axios.post('http://localhost:8000/api/pirates', newPirate)
            .then(res => {
                console.log(res.data)
                console.log('CLIENT SUCCESS!!!')
                history.push('/')
            })
            .catch(err => {
                console.log(err)
                console.log('CLIENT ERROR!!!')

                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr)
            })

    }

    return (
        <div>
            {/* <p>{JSON.stringify(pirateName)}</p>
            <p>{JSON.stringify(image)}</p>
            <p>{JSON.stringify(treasureChests)}</p>
            <p>{JSON.stringify(catchPhrase)}</p>
            <p>{JSON.stringify(pegLeg)}</p>
            <p>{JSON.stringify(eyePatch)}</p>
            <p>{JSON.stringify(hookHand)}</p> */}
            <h1>Add Pirate</h1>
            <button><Link to='/'>Crew Board</Link></button>
            <p>
                {errors.map((err, index) => <p style={{ color: "red" }} key={index}>{err}</p>)}
            </p>
            <form onSubmit={handleSubmit}>
                <div style={{ backgroundColor: 'orange', width: '80%' , margin: '0 auto', display: 'flex', justifyContent: 'space-evenly', gap: '20px'}}>


                    <div >
                        <div>
                            <label>
                                Pirate Name:
                                <input onChange={(e) => setPirateName(e.target.value)} value={pirateName} />
                            </label>
                        </div>
                        <div>
                            <label>
                                Image Url:
                                <input onChange={(e) => setImage(e.target.value)} value={image} />
                            </label>
                        </div>
                        <div>
                            <label>
                                # of Treasure Chests:
                                <input type='number' onChange={(e) => setTreasureChests(e.target.value)} value={treasureChests} />
                                <div>

                                </div>
                            </label>
                            <div>
                            </div>
                            <label>
                                Pirate Catch Phrase:
                                <input onChange={(e) => setCatchPhrase(e.target.value)} value={catchPhrase} />
                            </label>
                        </div>
                    </div>


                    <div>
                        <div>
                            Crew Position:
                            <select value={crewPosition} onChange={(e) => setCrewPosition(e.target.value)}>
                                {
                                    positions.map((position, index) => {
                                        return <option key={index} value={position}>{position}</option>
                                    })
                                }
                            </select>

                        </div>
                        <div>
                            <label>
                                Peg Leg:
                                <input type='checkbox' onChange={(e) => setPegLeg(e.target.checked)} checked={pegLeg} />
                            </label>
                        </div>
                        <div>
                            <label>
                                Eye Patch:
                                <input type='checkbox' onChange={(e) => setEyePatch(e.target.checked)} checked={eyePatch} />
                            </label>
                        </div>
                        <div>
                            <label>
                                Hook Hand:
                                <input type='checkbox' onChange={(e) => sethookHand(e.target.checked)} checked={hookHand} />
                            </label>
                        </div>
                    <button>Add Pirate</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Create;