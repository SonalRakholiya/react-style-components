import { Transition } from "react-transition-group"

export const TransitionFadeStyle = () => {
  const duration = 300;
  const [inProp, setInProp] = useState(false);

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  }

  const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };

  <Transition in={inProp} timeout={duration}>

{state => (
      <div style={{
        ...defaultStyle,
        ...transitionStyles[state]
      }}>
        I'm a fade Transition!
      </div>
    )}
  </Transition>
}
