import {memo, ReactNode} from 'react';
import {classNames, Mods} from "shared/lib/classNames/classNames";
import AudioPlayer from "../../../features/player/player";
import {postApi} from "../../../providers/api/RtkService";

interface VideoPageProps {
    className?: string
    children?: ReactNode
}


const VideoPage = memo((props: VideoPageProps) => {
    const {data, isLoading, error} = postApi.useGetDataQuery({param:"",source:"api-video"})

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
            {data && data.map((item) => (
              <div>
                  {item.video}
              </div>
            ))}

            {children}
        </div>
    );
});
export default VideoPage