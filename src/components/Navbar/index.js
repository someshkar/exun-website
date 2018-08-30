import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Container from '../Container'

import logo from './logo.png'

const links = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'About',
    href: '/about',
  },
  {
    title: 'Alumni',
    href: '/alumni',
  },
  {
    title: 'Members',
    href: '/members',
  },
  {
    title: 'faculty',
    href: '/faculty',
  },
  {
    title: 'Archive',
    href: '/archive',
  },
  {
    title: 'lnexun',
    href: '//lnexun.com',
    external: true,
  },
]

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Cross = styled.div`
  display: none;
  @media screen and (max-width: 920px) {
    display: block;
    font-size: 3rem;
    line-height: 0;
    margin-top: -10rem;
    margin-bottom: 10rem;
  }
`

const Hamburger = styled.div`
  display: none;
  @media screen and (max-width: 920px) {
    display: block;
    flex: 1;
    text-align: right;
  }
`

const Nav = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;

  @media screen and (max-width: 920px) {
    display: none;
    ${props =>
      props.active
        ? `
    display: block;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(255, 255, 255, 0.9);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1;
    `
        : null};
  }
`

const Links = styled.ul`
  list-style-type: none;
  margin: 0;
  cursor: default;
  text-align: center;
`

const LinksItem = styled.li`
  padding: 0;
  margin: 0;
  display: inline-block;
  margin-left: 10px;
  font-size: 1.35rem;
  letter-spacing: 1px;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    color: #2977f5;
  }

  @media screen and (max-width: 920px) {
    display: block;
    margin-bottom: 1em;
  }
`

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
    }
    this.toggle = this.toggle.bind(this)
  }
  toggle() {
    this.setState(prevState => ({
      active: !prevState.active,
    }))
  }
  render() {
    return (
      <Container>
        <Wrapper>
          <img height="60" src={logo} alt="" />
          <Hamburger onClick={this.toggle}>☰</Hamburger>
          <Nav active={this.state.active}>
            <Cross onClick={this.toggle}>✕</Cross>
            <Links>
              {links.map(link => (
                <LinksItem key={link.href}>
                  {link.external ? (
                    <a href={link.href}>{link.title}</a>
                  ) : (
                    <Link to={link.href}>{link.title}</Link>
                  )}
                </LinksItem>
              ))}
            </Links>
          </Nav>
        </Wrapper>
      </Container>
    )
  }
}

export default Navbar