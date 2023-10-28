import {memo, ReactNode} from 'react';
import {classNames, Mods} from "shared/lib/classNames/classNames";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from "react-router-dom";

import cls from "./NavBar.module.scss"

interface NavBarProps {
    className?: string
    children?: ReactNode
}


export const NavBarCustom = memo((props: NavBarProps) => {
    const {
        className,
        children,
        ...otherProps
    } = props

    const mods: Mods = {

    };

    return (
        <div
            className={classNames(cls.NavBarCustom, mods, [className])}
            {...otherProps}
        >
            <Navbar  collapseOnSelect expand="lg" className="bg-body-tertiary">
              <Container>
                <Navbar.Brand className={cls.Brand} href="#home">KSYSHSNIMAY</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className={cls.ContainerLink}>
                      {/* eslint-disable-next-line react/jsx-no-undef */}
                    <Link className={cls.Link} to="/ksyshsnimay">Главная</Link>
                    <Link className={cls.Link} to="/video">Видео</Link>
                    <Link className={cls.Link} to="/photo">Фото</Link>
                    <Link className={cls.Link} to="/contact">Контакты</Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
            {children}
        </div>
    );
});