import { UiView } from "@/components";
import { IconButton } from "react-native-paper";

function OAuthMethods() {
  return (
    <UiView
      style={{
        display: "flex",
        flexDirection: "row",
        gap: 20,
        justifyContent: "space-between",
      }}
    >
      <IconButton
        icon={"facebook"}
        size={30}
        style={{ borderWidth: 0.5, borderRadius: 5 }}
      />
      <IconButton
        icon={"google"}
        size={30}
        style={{ borderWidth: 0.5, borderRadius: 5 }}
      />
      <IconButton
        icon={"linkedin"}
        size={30}
        style={{ borderWidth: 0.5, borderRadius: 5 }}
      />
    </UiView>
  );
}

export default OAuthMethods;
