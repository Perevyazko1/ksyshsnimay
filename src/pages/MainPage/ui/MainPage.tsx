import {memo, ReactNode} from 'react';
import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from "./MainPage.module.scss"

interface MainPageProps {
    className?: string
    children?: ReactNode
}


 const MainPage = memo((props: MainPageProps) => {
    const {
        className,
        children,
        ...otherProps
    } = props

    const mods: Mods = {

    };

    return (
        <div
            className={classNames(cls.MainPage, mods, [className])}
            {...otherProps}
        >
            <div className={cls.Brand}>Проверка Брэнд</div>
            <div className={cls.Link}>Проверка ссылок</div>
            {children}
        </div>
    );
});

export default MainPage