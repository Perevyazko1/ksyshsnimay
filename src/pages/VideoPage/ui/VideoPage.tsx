import React, {memo, ReactNode, useEffect, useRef, useState} from 'react';
import {classNames, Mods} from "shared/lib/classNames/classNames";
import AudioPlayer from "../../../features/player/player";
import {postApi} from "../../../providers/api/RtkService";
import cls from "./VideoPage.module.scss";
import {PageWrapper} from "../../../shared/ui/PageWrapper/PageWrapper";
import {Loader} from "../../../shared/ui/Loader/Loader";
import Skeleton from "react-loading-skeleton";
import ReactPlayer from "react-player";

interface VideoPageProps {
    className?: string
    children?: ReactNode
}


const VideoPage = memo((props: VideoPageProps) => {
    const {data, isLoading, error} = postApi.useGetDataQuery({param:"",source:"api-video/"})
    const [isHovered, setIsHovered] = useState<number | null>(null);
    const [showLoader, setShowLoader] = useState(false);
    const [loadedVideos, setLoadedVideos] = useState<boolean[]>([]);

    const handleVideoLoad = (index: number) => {
  setLoadedVideos(prevState => {
    const updatedVideos = [...prevState];
    updatedVideos[index] = true;
    return updatedVideos;
  });
}

useEffect(() => {
  const handleVideoLoad = (index: number) => {
    setLoadedVideos(prevState => {
      const updatedVideos = [...prevState];
      updatedVideos[index] = true;
      return updatedVideos;
    });
  };

  videoRefs.current.forEach((videoRef, index) => {
    videoRef.addEventListener('loadeddata', () => handleVideoLoad(index));
  });

  return () => {
    videoRefs.current.forEach((videoRef, index) => {
      videoRef.removeEventListener('loadeddata', () => handleVideoLoad(index));
    });
  };
}, []);
    const allVideosLoaded = loadedVideos.every(videoLoaded => videoLoaded);


    const videoRefs = useRef<HTMLVideoElement[]>([]);

  const handleMouseEnter = (index: number) => {
    if (videoRefs.current[index]) {
      const video = videoRefs.current[index];
      if (video) {
        video.muted = true;
        video.play();
      }
    }
  };

  const handleMouseLeave = (index: number) => {
    if (videoRefs.current[index]) {
      const video = videoRefs.current[index];
      if (video) {
        video.muted = false;
        video.currentTime=0
      }
    }
  };

  useEffect(()=>{
      setTimeout(() => {
            setShowLoader(true);
        }, 500);

  },[])




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
                className={classNames(cls.VideoPage, mods, [className])}
                {...otherProps}
            >
                {showLoader && !data &&
                    <Loader/>
                }
                <div className={cls.WrapperBlockVideo}>
                    {data && data.map((item, index) => (
                  <div key={index}
                       className={cls.WrapperVideo}>
                      {!allVideosLoaded && <Skeleton className={cls.Video}  />}
                      {/*<video*/}
                      {/*    className={cls.Video}*/}

                      {/*    ref={(el) => {*/}
                      {/*    if (el) videoRefs.current[index] = el;*/}
                      {/*  }}*/}
                      {/*    onMouseEnter={() => handleMouseEnter(index)}*/}
                      {/*    onMouseLeave={() => handleMouseLeave(index)}*/}
                      {/*    controls preload="metadata"*/}
                      {/*>*/}
                      {/*    <source  src={`${item.video}#t=0.1`} type='video/mp4; codecs=hevc,mp4a.40.2"'/>*/}
                      {/*</video>*/}
                      <ReactPlayer
                        url={item.video}
                        controls={true}
                        height={'100%'}
                        width={'100%'}
                      />
                  </div>
                ))}
                </div>


                {children}
            </div>
        </PageWrapper>
    );
});
export default VideoPage