import HookImperativeHandle from "./HookImperativeHandle";
import HookUseContext from "./HookUseContext/HookUseContext";
import HookUseEffect from "./HookUseEffect";
import HookUseLayoutEffect from "./HookUseLayoutEffect";
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
      <h1>UseLayoutEffect</h1>
      <HookUseLayoutEffect />
      <h1>ImpreativeHandle</h1>
      <HookImperativeHandle />
      <h1>UseContext</h1>
      <HookUseContext />
    </div>
  )
}

export default App;
