import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';


export const View = () => {

    const { id } = useParams();

    const [pirateName, setPirateName] = useState();
    const [position, setPosition] = useState('');
    const [treasureChests, setTreasureChests] = useState('');
    const [pegLeg, setPegLeg] = useState('');
    const [eyePatch, setEyePatch] = useState();
    const [hookHand, setHookHand] = useState();
    const [catchPhrase, setCatchPhrase] = useState();
    const [image, setImage] = useState('');



    useEffect(() => {
        axios.get('http://localhost:8000/api/pirates/' + id)
            .then(res => {
                console.log(res.data)
                setPirateName(res.data.pirateName)
                setPosition(res.data.crewPosition)
                setTreasureChests(res.data.treasureChests)
                setPegLeg(res.data.pegLeg)
                setEyePatch(res.data.eyePatch)
                setHookHand(res.data.hookHand)
                setCatchPhrase(res.data.catchPhrase)
                setImage(res.data.image)
            })
            .catch(err => console.log(err))
    }, [id])

    return (
        <div>
            {/* <p>{JSON.stringify(pegLeg)}</p>
            <p>{JSON.stringify(image)}</p> */}
            <h1 style={{backgroundColor: 'brown'}}>{pirateName}</h1>
            
            <div style={{margin: '0 auto', display: 'flex', backgroundColor: 'orange', justifyContent: 'center'}}>

                <div>
                    <img src={image} style={{ width: '200px', height: '200px' }} />
                    <h2> Catch Phrse: {catchPhrase}</h2>
                </div>
                <div>
                    <h3>About</h3>
                    <p>Position: {position}</p>
                    <p>Treasures: {treasureChests}</p>
                    <div>
                        <label> Peg Leg: {pegLeg ? 'yes' : 'no'}
                            {/* <input type='checkbox' onChange={(e) => setPegLeg(e.target.checked)} checked={pegLeg} /> */}
                        </label>
                    </div>
                    <div>
                        <label> Eye Patch: {eyePatch ? 'yes' : 'no'}
                            {/* <input type='checkbox' onChange={(e) => setEyePatch(e.target.checked)} checked={eyePatch} /> */}
                        </label>
                    </div>
                    <label> Hook Hand: {hookHand ? 'yes' : 'no'}
                        {/* <input type='checkbox' onChange={(e) => setHookHand(e.target.checked)} checked={hookHand} /> */}
                    </label>
                    {/* <p>checkbox: {pegLeg}</p> */}
                    {/* <p>if {pegLeg ?  "yes" : 'no'}</p> */}
                </div>
            </div>
        </div>
    )
}

export default View;