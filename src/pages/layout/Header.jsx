import React from 'react'

export const Header = ({ setSidebarHandler }) => {
    return (
        <button onClick={() => setSidebarHandler(prev => !prev)}>Open</button>
    )
}
