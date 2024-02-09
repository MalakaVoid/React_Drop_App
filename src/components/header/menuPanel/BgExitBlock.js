import { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';


export default function BgExitBlock({active, hideMenu}){
    const transitionRef = useRef(null);
    return (
        <CSSTransition 
        ref={transitionRef}
        in={active}
        timeout={250}
        classNames={'bg-exit'}
        mountOnEnter
        unmountOnExit
        >
            <div onClick={hideMenu} className="bg-exit" style={{
                    width: '100vw',
                    height: '100vh',
                    position: 'fixed',
                    zIndex: 5,
                    top: 0,
                    left: 0,
            }}>

            </div>
        </CSSTransition>
    )
}