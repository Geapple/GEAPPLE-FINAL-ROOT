import { useChat } from "../lib/useChat";
const { messages, sendMessage } = useChat("v62-global");

// in your input onSubmit:
sendMessage(inputText, "geappleadmin");