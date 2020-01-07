import React, { Component } from 'react'
import Sidebar from './Sidebar'

export default class ChatContainer extends Component {
	constructor (props) {
		super(props);

		this.state = {};
	}

    render() {
			const { user, logout } = this.props

        return (
            <div className='container'>
							<SideBar
								logout = {logout}
								chats = {chats}
								user = {user}
								activeChat = {activeChat}
								setActiveChat = {this.setActiveChat}
							/>
                
            </div>
        )
    }
}
