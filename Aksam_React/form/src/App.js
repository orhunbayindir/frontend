import { useContext, useEffect } from "react";

import MainLayout from "../../../Sabah_React/note-app/src/components/MainLayout";

import { getPermissions } from "../../../Sabah_React/note-app/reducer/services/permission";
import PermissionContext from "../../../Sabah_React/note-app/src/context/PermissionContext";

function App() {
  const { setPermissions } = useContext(PermissionContext);

  useEffect(() => {
    getPermissions().then((response) => {
      setPermissions(response.filter((p) => p.value).map((p) => p.name));
    });
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <MainLayout />
    </div>
  );
}

export default App;
