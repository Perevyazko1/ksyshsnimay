import {memo, ReactNode} from 'react';
import {classNames, Mods} from "shared/lib/classNames/classNames";
import {NavBarCustom} from "../../../widgets/NavBarCustom/NavBarCustom";
import {BottomBlock} from "../BottomBlock/BottomBlock";

interface PageWrapperProps {
    className?: string
    children?: ReactNode
}


export const PageWrapper = memo((props: PageWrapperProps) => {
    const {
        className,
        children,
        ...otherProps
    } = props

    const mods: Mods = {

    };

    return (
        <div
            className={classNames('', mods, [className])}
            {...otherProps}
        >
            <NavBarCustom/>
            {children}
            <BottomBlock/>
        </div>
    );
});