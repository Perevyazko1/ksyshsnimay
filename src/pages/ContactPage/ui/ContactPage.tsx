import {memo, ReactNode} from 'react';
import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from "./ContactPage.module.scss"
import contact from "shared/assets/images/contact.png"

interface ContactPageProps {
    className?: string
    children?: ReactNode
}


 const ContactPage = memo((props: ContactPageProps) => {
    const {
        className,
        children,
        ...otherProps
    } = props
    
    const mods: Mods = {
        
    };
    
    return (
        <div
            className={classNames(cls.ContactPage, mods, [className])}
            {...otherProps}
        >

            <div className={cls.BlockInfo}>
                <p><a  href="https://t.me/zachimnotokayy">Телеграм</a></p>
                <p>Почта: ksushsnimay@gmail.com</p>
                <p><a href="https://www.instagram.com/ksushsnimay/" >запрещенная социальная сеть <p>с картинками</p></a></p>
            </div>
            <img className={cls.Poster} src={contact} alt={"poster"}/>

            {children}
        </div>
    );
});

export default ContactPage