import Image from 'next/image';
import InteractiveCard from './InteractiveCard';

export default function ProductCard ({ hostName, imgSrc }:{hostName:string, 
imgSrc:string}) {

    

    return (


        <InteractiveCard contentName={hostName}>

            <div className= "w-full h-[70%] relative rounded-t-lg">
            <Image src={imgSrc}
                alt='Product Picture'
                fill={true}
                className= 'object-cover round-t-lg'
                />
            </div>
            <div className= "w-full h-[30%] p-[10px]">{hostName}</div>
            
        </InteractiveCard>
    );
}