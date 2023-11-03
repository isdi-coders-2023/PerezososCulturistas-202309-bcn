import { PropsWithChildren, useMemo, useState } from "react";
import UiContext from "./UiContext";

const UiContextWrapper = ({
  children,
}: PropsWithChildren): React.ReactElement => {
  const [isLoading, setIsLoading] = useState(false);

  const uiProvider = useMemo(
    () => ({ isLoading, setIsLoading }),
    [isLoading, setIsLoading],
  );

  return <UiContext.Provider value={uiProvider}>{children}</UiContext.Provider>;
};

export default UiContextWrapper;
