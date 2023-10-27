import {memo, ReactNode} from 'react';
import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from "./MainPage.module.scss"
import {postApi} from "../../../providers/api/RtkService";

interface MainPageProps {
    className?: string
    children?: ReactNode
}


 const MainPage = memo((props: MainPageProps) => {

     const {data, isLoading, error} = postApi.useGetDataQuery({param:"",source:"api-collage"})
     console.log(data,error)
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
            {data && data.map((item) => (
                  <img key={item.image} src={item.image} className={cls.Collage} alt={"collage"}/>
            ))}

            {children}
        </div>
    );
});

export default MainPage