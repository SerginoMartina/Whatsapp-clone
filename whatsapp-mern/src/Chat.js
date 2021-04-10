import React, { useState } from 'react';
import {Avatar, IconButton} from '@material-ui/core'
import { AttachFile, SearchOutlined, MoreVert, InsertEmoticon } from '@material-ui/icons';
import MicIcon  from '@material-ui/icons/Mic';
import axios from './axios';

import "./Chat.css"

function Chat({ messages }) {
    const [input, setInput] = useState("");

    const sendMessage = async (e) => {
        e.preventDefault();

        await axios.post("/messages/new", { 
            "message": input,
            "name": "DEMO APP",
            "timestamp": "Just now!",
            "received": false,
        });

        setInput('');
    };

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar />


                <div className="chat__headerInfo">
                    <h3>iDA Chat</h3>
                    <p>Last seen at ..</p>
                </div>

                <div className="chat__headerRight">
                    <IconButton>
                    <SearchOutlined />
                    </IconButton>
                    <IconButton>
                    <AttachFile />
                    </IconButton>
                    <IconButton>
                    <MoreVert />
                    </IconButton>
                </div>
            </div>

            <div className="chat__body">
                {messages.map((message) => (

                    // eslint-disable-next-line
                <p className="chat__message">
                    <span className="chat__name">{message.name}</span>
                    {message.message}
                    <span className="chat__timestamp">{message.timestamp}</span>
                    </p>

                ))}
            </div>

            <div className="chat__footer">
                <InsertEmoticon />
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)} placeholder="Schrijf hier jouw bericht" type="text" />
                    <button onclick={sendMessage} type="submit"></button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat
