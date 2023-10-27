import {memo, ReactNode} from 'react';
import {classNames, Mods} from "shared/lib/classNames/classNames";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
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
                    <Nav.Link className={cls.Link} href="/ksyshsnimay">Главная</Nav.Link>
                    <Nav.Link className={cls.Link} href="/video">Видео</Nav.Link>
                    <Nav.Link className={cls.Link} href="/photo">Фото</Nav.Link>
                    <Nav.Link className={cls.Link} href="/contact">Контакты</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
            {children}
        </div>
    );
});