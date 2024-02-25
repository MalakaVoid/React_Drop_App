import { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
// ADD Z_INDEX TO BG-EXIT CLASS

export default function BgExitBlock({active, hideMenu}){
    const transitionRef = useRef(null);
    return (
        <CSSTransition 
        ref={transitionRef}
        in={active}
        timeout={0}
        classNames={'bg-exit'}
        mountOnEnter
        unmountOnExit
        >
            <div onClick={hideMenu} className="bg-exit w-screen h-screen fixed top-0 left-0 bg-[#00000050]" >

            </div>
        </CSSTransition>
    )
}