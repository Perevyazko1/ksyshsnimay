import React, {memo, ReactNode, useEffect, useState} from 'react';
import {classNames, Mods} from "shared/lib/classNames/classNames";
import {postApi} from "providers/api/RtkService";
import cls from "./PhotoPage.module.scss";
import Skeleton from 'react-loading-skeleton';
import {PageWrapper} from "shared/ui/PageWrapper/PageWrapper";

interface PhotoPageProps {
  className?: string,
  children?: ReactNode
}

const PhotoPage = memo((props: PhotoPageProps) => {

  const { data, isLoading, error } = postApi.useGetDataQuery({ param: "", source: "api-photo/" });
  const [isHovered, setIsHovered] = useState<number | null>(null);
  const [isLoaded, setIsLoaded] = useState<number | null>(null);
  const [loadedIndexes, setLoadedIndexes] = useState<number[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number>(-1);
  const [isAllLoaded, setIsAllLoaded] = useState(false);

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
    setHoveredIndex(-1);
  };

  useEffect(() => {
    if (data && loadedIndexes.length === data.length) {
      setIsAllLoaded(true);
    }
  }, [data, loadedIndexes]);

  const handleImageLoad = (index: number) => {
    setLoadedIndexes(prevIndexes => [...prevIndexes, index]);
  };

  const {
    className,
    children,
    ...otherProps
  } = props;

  const mods: Mods = {

  };

  return (
    <PageWrapper>
      <div
        className={classNames(cls.PhotoPage, mods, [className])}
        {...otherProps}
      >
        <div className={cls.WrapperBlockPhoto}>
          {data && data.map((item, index) => (
            <div
              className={cls.WrapperPhoto}
              key={index}
            >
              {(!isAllLoaded || !loadedIndexes.includes(index)) && <Skeleton className={cls.Photo}  />}
                <img
                  className={isLoaded ?
                      (cls.PhotoNone):
                      ((isHovered === index || hoveredIndex === index) ? cls.Photo : cls.PhotoHovered)
                }
                  onMouseEnter={() => handleRowHover(index)}
                  onMouseLeave={handleRowLeave}
                  onTouchStart={() => handleRowHover(index)}
                  onLoad={() => handleImageLoad(index)}
                  src={item.image}
                  alt={"photo"}
                />
            </div>
          )) }
        </div>
        {children}
      </div>
    </PageWrapper>
  );
});

export default PhotoPage;