import {memo, ReactNode} from 'react';
import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from "./BottomBlock.module.scss"

interface BottomBlockProps {
    className?: string
    children?: ReactNode
}


export const BottomBlock = memo((props: BottomBlockProps) => {
    const {
        className,
        children,
        ...otherProps
    } = props

    const mods: Mods = {

    };

    return (
        <div
            className={classNames(cls.BottomBlock, mods, [className])}
            {...otherProps}
        >
            <div className={cls.BlockInfo}>
                <a href="https://perevyazko1.github.io">Copyright © Perevyazko Andrey</a>
            </div>
            {children}
        </div>
    );
});