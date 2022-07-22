import { FluentProvider, webLightTheme, Button } from '@fluentui/react-components'
import { AccessTimeFilled, Album24Regular, Airplane24Regular } from "@fluentui/react-icons";

function App() {
  return (
    <FluentProvider theme={webLightTheme}>
      <Button>I am a Button</Button>
      <AccessTimeFilled />
      <Album24Regular/>
      <Airplane24Regular/>
    </FluentProvider>
  );
}

export default App;
