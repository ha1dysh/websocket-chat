import { useState } from "react";
import styles from "./Input.module.css";
import { socket } from "../../_common/websocketContext";

type formFields = {
	message: HTMLInputElement;
};

export const Input = () => {
	const [username, setUsername] = useState("Anonymous");
	const [message, setMessage] = useState("");

	const submitForm: React.FormEventHandler<HTMLFormElement & formFields> = (
		e
	) => {
		e.preventDefault();
		const msg = { msg: message, author: username };
		socket.emit("newMessage", msg);
		setMessage("");
	};

	return (
		<form onSubmit={submitForm} className={styles.form}>
			<div>
				<input
					className={styles.input}
					name='message'
					type='text'
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<input
					className={styles.input}
					name='message'
					type='text'
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>
			</div>
			<button className={styles.button}>Send</button>
		</form>
	);
};
