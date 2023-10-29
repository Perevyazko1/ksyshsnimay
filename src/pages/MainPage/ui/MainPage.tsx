import React, {memo, ReactNode, useEffect, useState} from 'react';
import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from "./MainPage.module.scss"
import {postApi} from "providers/api/RtkService";
import {PageWrapper} from "shared/ui/PageWrapper/PageWrapper";
import Skeleton from "react-loading-skeleton";

interface MainPageProps {
    className?: string
    children?: ReactNode
}


 const MainPage = memo((props: MainPageProps) => {

    const {data, isLoading, error} = postApi.useGetDataQuery({param:"",source:"api-collage/"})
    const [loadedIndexes, setLoadedIndexes] = useState<number[]>([]);
    const [isAllLoaded, setIsAllLoaded] = useState(false);

    const handleImageLoad = (index: number) => {
        console.log(index)
        setLoadedIndexes(prevIndexes => [...prevIndexes, index]);
    };
      useEffect(() => {
    if (data && loadedIndexes.length === data.length) {
      setIsAllLoaded(true);
    }
  }, [data, loadedIndexes]);




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
                {data && data.map((item, index) => (
                    <div>
                        {(!isAllLoaded || !loadedIndexes.includes(index)) && <Skeleton className={cls.CollageSkeleton} />}
                          <img
                              key={index}
                              src={item.image}
                              className={!isAllLoaded ? (cls.CollageNone):(cls.Collage)}
                              onLoad={() => handleImageLoad(index)}
                              alt={"collage"}/>
                    </div>
                ))}
                {children}
            </div>
        </PageWrapper>
    );
});

export default MainPage