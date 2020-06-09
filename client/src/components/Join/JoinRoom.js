import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Join.css';
const Sentencer = require('sentencer');

const JoinRoom = ({ history }) => {
    const [room, setRoom] = useState('');

    const joinRoom = () => {
        // const randomRoom = Sentencer.make("{{ adjective }}-{{ noun }}");
        // history.push(`/room/${randomRoom}`);
        let trimmedRoom = room.trim();
        if (trimmedRoom.length > 0) {
            history.push(`/room/${trimmedRoom}`);
        }
    };
    const setRandomRoom = () => {
        const randomRoom = Sentencer.make("{{ adjective }}-{{ noun }}");
        setRoom(randomRoom);
    }
    // const handleKeyPress = e => {
    //     if (e.key === 'Enter') {
    //         joinRoom();
    //     }
    // }
    // const browseRooms = () => {
    //     history.push(`/browse`);
    // }
    return (
        <div className='joinOuterContainer two-col'>
            {/* <div className='header two-col-child'>
                Watch Party
            </div> */}
            <div className='joinInnerContainer two-col-child'>
                <h1 className='heading'>Join or Create a Room</h1>
                <div className='inputButtonContainer'>
                    <input
                        placeholder='🡆 Generate a Random Room Name 🡆'
                        className='joinInput'
                        type='text'
                        maxLength='50'
                        value={room}
                        onChange={(event) => setRoom(event.target.value)}
                        // onKeyPress={(event) => handleKeyPress(event)}
                        disabled
                    />
                    <button autoFocus onClick={setRandomRoom}><FontAwesomeIcon icon="random" /></button>
                </div>
                <button
                    className='button mt-20'
                    onClick={joinRoom}
                >
                    Join Party
                </button>
                {/* <p>or</p>
                <h1 className='heading'>Browse Rooms</h1>
                <button
                    className='button'
                    onClick={() => browseRooms()}
                >
                    Browse Rooms
                </button> */}
            </div>
        </div>
    )
}

export default JoinRoom;