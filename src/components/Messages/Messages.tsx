import { WebsocketContext } from "../../_common/websocketContext";
import styles from "./Messages.module.css";
import { useContext, useEffect, useState } from "react";

type msg = { id: string; msg: string; author: string };

export const Messages = () => {
	const [messages, setMessages] = useState<msg[]>([]);
	const socket = useContext(WebsocketContext);

	useEffect(() => {
		socket.on("onMessage", (data: msg) => {
			setMessages((state) => [...state, data]);
		});
		return () => {
			socket.off("connect");
			socket.off("onMessage");
		};
	}, [socket]);

	return (
		<ul className={styles.list}>
			{(messages.length &&
				messages.map(({ id, msg, author }) => (
					<li className={styles.listItem} key={id}>
						<span className={styles.author}>{author}</span>: {msg}
					</li>
				))) ||
				"No Messages"}
		</ul>
	);
};
