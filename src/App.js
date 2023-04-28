import HookUseEffect from "./HookUseEffect";
import HookUseReducer from "./HookUseReducer";
import HookUseRef from "./HookUseRef";
import HookUseState from "./HookUseState";

function App() {

  return(
    <div>
      <h1>UseStateHook</h1>
      <HookUseState />
      <h1>UseReducerHook</h1>
      <HookUseReducer />
      <h1>UseEffectHook</h1>
      <HookUseEffect />
      <h1>UseRefHook</h1>
      <HookUseRef />
    </div>
  )
}

export default App;
