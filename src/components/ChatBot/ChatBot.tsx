import React, { useState, useEffect, useRef, MutableRefObject } from "react";
import ChatBotIMG from "../../assets/chatbot.jpg";
import FadeIn from "react-fade-in";
import "./ChatBot.scss";
import axios from "axios";

const ChatBot: React.FC = () => {
  const scrollRef: MutableRefObject<HTMLParagraphElement | null> = useRef(null);
  //   const userChat = JSON.parse(sessionStorage.getItem("user_chat"));
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { sender: "bot", message: "Hi there! 👋, how can I help you?" },
  ]);
  const [inputMessage, setInputMessage] = useState<string>("");

  const handleSendMessage = () => {
    const userMessage = inputMessage;
    console.log(JSON.stringify({ text: inputMessage }));
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    if (userMessage) {
      setInputMessage("");
      axios
        .post(
          "http://13.235.224.44/reply",
          JSON.stringify({ text: userMessage }),
          config
        )
        .then((res) => {
          console.log(res);
          const replyData = res.data;
          const fetchedMessages = JSON.parse(
            sessionStorage.getItem("user_chat")!
          );
          const newMessages = [
            ...fetchedMessages,
            { sender: "bot", message: replyData.reply },
          ];
          sessionStorage.setItem("user_chat", JSON.stringify(newMessages));
          setTimeout(() => {
            setMessages(newMessages);
          }, 1000);
          //   setInputMessage("");
        })
        .catch((error) => console.log(error));
    } else {
      window.alert("Please enter some message!");
    }
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      {/* {isVisible ? (
        <FadeIn transitionDuration={100}> */}
      <div
        className={`black-overlay ${isVisible ? "visible" : ""}`}
        onClick={() => setIsVisible(false)}
      ></div>
      {/* </FadeIn>
      ) : null} */}
      <div className="chatbot">
        {isVisible ? (
          <FadeIn transitionDuration={1000}>
            <div className={`chat_form ${isVisible ? "visible" : ""}`}>
              <div className="chat__top">
                <img src={ChatBotIMG} alt="" />
                <div className="chat__top_right">
                  <h4>ChumlyAI</h4>
                  <p>Hi there! 👋</p>
                </div>
              </div>
              <div className="chat__body">
                {messages.map((message: ChatMessage, index: number) => (
                  <p
                    ref={scrollRef}
                    key={index}
                    className={`message ${
                      message.sender === "bot" ? "message_bot" : "message_user"
                    }`}
                  >
                    {message.message}
                  </p>
                ))}
              </div>
              <div className="chat__bottom">
                <div className="chat__bottom_box">
                  <textarea
                    //   type="text"
                    rows={1}
                    name="message"
                    id="message"
                    placeholder="Message"
                    className="chat__bottom_input"
                    value={inputMessage}
                    onChange={(e) => {
                      setInputMessage(e.target.value);
                    }}
                    // onKeyDown={(e) => {
                    //   if (e.key === "Enter") {
                    //     handleSendMessage();
                    //   }
                    // }}
                  />
                  <i
                    className="fa-solid fa-paper-plane chat__bottom_send-icon"
                    onClick={() => {
                      if (inputMessage) {
                        const newMessages = [
                          ...messages,
                          { sender: "user", message: inputMessage },
                        ];
                        sessionStorage.setItem(
                          "user_chat",
                          JSON.stringify(newMessages)
                        );
                        const fetchedMessages = JSON.parse(
                          sessionStorage.getItem("user_chat")!
                        );
                        setMessages(fetchedMessages);
                        handleSendMessage();
                      } else {
                        window.alert("Please enter some message!");
                      }
                    }}
                  ></i>
                </div>
              </div>
            </div>
          </FadeIn>
        ) : null}
        <button
          className={`chatbot_btn ${isVisible ? "cross" : ""}`}
          onClick={() => {
            if (!isVisible) {
              const fetchedMessages = JSON.parse(
                sessionStorage.getItem("user_chat")!
              );
              setMessages(fetchedMessages);
            }
            setIsVisible(!isVisible);
          }}
        >
          {!isVisible ? (
            <i className="fa-solid fa-comment-dots"></i>
          ) : (
            <i className="fa-solid fa-xmark"></i>
          )}
        </button>
      </div>
    </>
  );
};

export default ChatBot;
