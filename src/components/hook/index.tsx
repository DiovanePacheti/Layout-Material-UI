import { useLayoutEffect, useState} from 'react';

export default function useWindowPosition(id: any){
    const [animation, setAnimation] = useState<boolean>(false);

    useLayoutEffect(() =>{
        function updatePosition(){
            const offetSetHeight = window.document.getElementById(id) ? window.document.getElementById(id)?.offsetHeight : null
            console.log('windpageOffset',window.pageYOffset,offetSetHeight)
            if(offetSetHeight){
                if(window.pageYOffset > offetSetHeight * 0.7 ){
                    setAnimation(true)
                }
            }
        }
        window.addEventListener('scroll',updatePosition);
        updatePosition();
        return() => window.removeEventListener('scroll',updatePosition);
    },[id]);
    return animation;
}