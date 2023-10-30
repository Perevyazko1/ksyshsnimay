import React, {memo, ReactNode, useEffect, useRef, useState} from 'react';
import {classNames, Mods} from "shared/lib/classNames/classNames";
import AudioPlayer from "../../../features/player/player";
import {postApi} from "../../../providers/api/RtkService";
import cls from "./VideoPage.module.scss";
import {PageWrapper} from "../../../shared/ui/PageWrapper/PageWrapper";
import {Loader} from "../../../shared/ui/Loader/Loader";

interface VideoPageProps {
    className?: string
    children?: ReactNode
}


const VideoPage = memo((props: VideoPageProps) => {
    const {data, isLoading, error} = postApi.useGetDataQuery({param:"",source:"api-video/"})
    const [isHovered, setIsHovered] = useState<number | null>(null);
    const [showLoader, setShowLoader] = useState(false);

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
                {data && data.map((item, index) => (
                  <div key={index}
                       className={cls.WrapperVideo}>
                      <video
                          className={cls.Video}
                          src={item.video}
                          ref={(el) => {
                          if (el) videoRefs.current[index] = el;
                        }}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                      />
                  </div>
                ))}

                {children}
            </div>
        </PageWrapper>
    );
});
export default VideoPage