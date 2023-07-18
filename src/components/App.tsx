import { WebsocketProvider, socket } from "../_common/websocketContext.tsx";
import styles from "./App.module.css";
import { Messages } from "./Messages/Messages.tsx";
import { Input } from "./input/Input.tsx";

function App() {
	return (
		<WebsocketProvider value={socket}>
			<div className={styles.container}>
				<div className={styles.chat}>
					<Messages />
					<Input />
				</div>
			</div>
		</WebsocketProvider>
	);
}

export default App;
