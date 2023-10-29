import {memo, ReactNode, useState} from 'react';
import {classNames, Mods} from "shared/lib/classNames/classNames";
import {postApi} from "../../../providers/api/RtkService";
import cls from "./PhotoPage.module.scss"
import {useWindowWidth} from "shared/hooks/useWindowWidth/useWindowWidth";
import Skeleton from 'react-loading-skeleton';
import {PageWrapper} from "../../../shared/ui/PageWrapper/PageWrapper";

interface PhotoPageProps {
    className?: string
    children?: ReactNode
}


const PhotoPage = memo((props: PhotoPageProps) => {

    const {data, isLoading, error} = postApi.useGetDataQuery({param:"",source:"api-photo/"})
    const [isHovered, setIsHovered] = useState<number | null>(null);
    const [isLoaded, setIsLoaded] = useState<number | null>(null);
    const [loadedIndexes, setLoadedIndexes] = useState<number[]>([]);
    const pageWidth = useWindowWidth();


      const [hoveredIndex, setHoveredIndex] = useState<number>(-1);

const handleRowHover = (index: number) => {
  if ('ontouchstart' in window) {
    if (index !== -1) {
      setHoveredIndex(index);
    } else {
      setHoveredIndex(-1);
    }
  } else {
    setHoveredIndex(index);
  }
};

const handleRowLeave = () => {
    // Обработка покидания курсора с элемента на десктопных устройствах
    setHoveredIndex(-1);
};


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
                className={classNames(cls.PhotoPage, mods, [className])}
                {...otherProps}
            >
                <div className={cls.WrapperBlockPhoto}>
                                {data? data.map((item,index) => (
                    <div
                        className={cls.WrapperPhoto}
                        key={index}
                    >

                        {/*{loadedIndexes.includes(index)?*/}


                            <img
                              className={(isHovered === index || hoveredIndex === index) ? cls.Photo : cls.PhotoHovered}
                              onMouseEnter={() => handleRowHover(index)}
                              onMouseLeave={handleRowLeave}
                              onTouchStart={() => handleRowHover(index)}
                              onLoad={() => setLoadedIndexes(prevIndexes => [...prevIndexes, index])}
                              src={item.image}
                            />
                            {/*// : <Skeleton width={313} height={393} />}*/}


                    </div>
                )):<Skeleton width={313} height={393} />}
                </div>

                {children}
            </div>
        </PageWrapper>
    );
});

export default PhotoPage