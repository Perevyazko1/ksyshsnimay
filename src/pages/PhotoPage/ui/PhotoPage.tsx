import {memo, ReactNode} from 'react';
import {classNames, Mods} from "shared/lib/classNames/classNames";
import {postApi} from "../../../providers/api/RtkService";

interface PhotoPageProps {
    className?: string
    children?: ReactNode
}


const PhotoPage = memo((props: PhotoPageProps) => {

    const {data, isLoading, error} = postApi.useGetDataQuery({param:"",source:"api-photo"})

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
                  {item.image}
              </div>
            ))}

            {children}
        </div>
    );
});

export default PhotoPage