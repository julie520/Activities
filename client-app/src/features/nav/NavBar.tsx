import React from 'react'
import { Menu, Container, Button } from 'semantic-ui-react'

const NavBar = () => {
    return (
        <Menu fixed="top" inverted>
            <Container>
                <Menu.Item >
                    <img src="/assets/logo.png" alt="logo" style={{marginRight: '1em'}} />
                    Meetup
                </Menu.Item>
                <Menu.Item name='Activities' />
                <Menu.Item>
                    <Button positive content='Create Activity' />
                </Menu.Item>
            </Container>
        </Menu>
    )
}

export default NavBar
