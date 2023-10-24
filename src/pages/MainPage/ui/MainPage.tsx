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
     console.log(JSON.stringify(data))
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
            {data && data.map((item) => (
              <div>
                  {item.image}
              </div>
            ))}

            {children}
        </div>
    );
});

export default MainPage