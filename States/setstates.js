import { useState } from "react";
import { AppContext } from "./states";

function setContext({ children }) {
  const [account, setAccount] = useState();
  return (
    <AppContext.Provider values={{ account, setAccount }}>
      {children}
    </AppContext.Provider>
  );
}

export default setContext;
