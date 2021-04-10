import React from 'react';
import "./Sidebar.css";

import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import {Avatar, IconButton} from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import SearchOutlined from "@material-ui/icons/SearchOutlined"

import SidebarChat from './SidebarChat';

function sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                    <Avatar src="data:image/jpeg;base64,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"></Avatar>
                <div className="sidebar__headerRight">
                    <IconButton>
                    <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                    <ChatIcon />
                    </IconButton>
                    <IconButton>
                    <MoreVertIcon />
                    </IconButton>
                </div>
            </div>

            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined />
                    <input placeholder="Search or start new chat" type="text"></input>
                </div>
            </div>

            <div className="sidebar__chats">
                <SidebarChat />
            </div>
        </div>
    )
}

export default sidebar
