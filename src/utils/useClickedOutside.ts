import { useEffect } from "react";

export default function useClickedOutside(elementRef: React.RefObject<HTMLElement>, onClickOutside: () => void){

    useEffect(()=>{
        function handleClickOutside(event: PointerEvent) {
            if (!elementRef.current?.contains(event.target as Node)){
                onClickOutside();
            }
        }
    
        document.addEventListener("pointerdown", handleClickOutside);
        return () => document.removeEventListener("pointerdown", handleClickOutside);
    }, [elementRef, onClickOutside]);
    
}