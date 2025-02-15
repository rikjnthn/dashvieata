import Chat from "../chat";

const ChatList = () => {
  return (
    <div className="cursor-pointer">
      <Chat
        profilePictureSrc="/user1.jpg"
        name="Amanda"
        message="You: What product you had like to asked?"
      />
      <Chat
        profilePictureSrc="/user2.jpg"
        name="Jessica"
        message="Thank you! Your t-shirt is wonderfull"
      />
    </div>
  );
};

export default ChatList;
