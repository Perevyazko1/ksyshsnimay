import {memo, ReactNode} from 'react';
import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from "./MainPage.module.scss"
import {postApi} from "../../../providers/api/RtkService";
import {PageWrapper} from "../../../shared/ui/PageWrapper/PageWrapper";

interface MainPageProps {
    className?: string
    children?: ReactNode
}


 const MainPage = memo((props: MainPageProps) => {

     const {data, isLoading, error} = postApi.useGetDataQuery({param:"",source:"api-collage/"})

    const {
        className,
        children,
        ...otherProps
    } = props

    const mods: Mods = {

    };

    return (
        <PageWrapper>
            <div
                className={classNames(cls.MainPage, mods, [className])}
                {...otherProps}
            >
                {data && data.map((item) => (
                      <img key={item.image} src={item.image} className={cls.Collage} alt={"collage"}/>
                ))}
                {children}
            </div>
        </PageWrapper>
    );
});

export default MainPage