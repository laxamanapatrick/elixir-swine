import React from 'react'
import { useRoutes } from 'react-router-dom'
import { Layout } from '../pages/layout/Layout'
import { UserManagement } from '../pages/user-management'
import { UserAccount } from '../pages/user-management/user-account/User-Account'
import { UserRole } from '../pages/user-management/user-role/User-Role'

function Routing() {
    let routing = useRoutes([
        {
            path: '/',
            element: <Layout />,
            children: [
                {
                    path: 'user-management',
                    element: <UserManagement />,
                    children: [
                        {
                            path: 'user-account',
                            element: <UserAccount />
                        },
                        {
                            path: 'user-role',
                            element: <UserRole />
                        }
                    ]
                }
            ]
        },



    ])
    return routing
}

export default Routing
