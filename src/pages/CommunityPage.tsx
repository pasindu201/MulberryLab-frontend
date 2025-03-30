import { use } from "framer-motion/client";
import { useState, useEffect } from "react";

import {
  FaHome,
  FaEnvelope,
  FaBell,
  FaUser,
  FaHeart,
  FaComment,
  FaPlusCircle,
} from "react-icons/fa";

const CommunityPage = () => {
  const [activePage, setActivePage] = useState("home"); // Track active section

  interface ChatMessage {
    id: number;
    message_type: string;
    message: string;
    timestamp: string;
  }

  const [currentChatUser, setCurrentChatUser] = useState<ChatUser | null>(null);

  interface ChatUser {
    id: number;
    name: string;
    avatar: string;
  }

  const [currentChat, setCurrentChat] = useState<ChatMessage[]>([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    setCurrentChatUser(chatUsers[0]);
  });

  useEffect(() => {
    setCurrentChat([
      {
        id: 1,
        message_type: "send",
        message: "Hello!",
        timestamp: "123456789",
      },
      {
        id: 2,
        message_type: "received",
        message: "Hi! How are you?",
        timestamp: "123456789",
      },
    ]);
  }, []);

  // Sample post data
  const posts = [
    {
      id: 1,
      user_name: "Lisa Marie Dias",
      user_id: 1,
      avatar: "assets/default-avatar-profile-icon.jpg",
      content: "Twitter has moved to a 280-character limit!",
      image: "growing.jpg",
      likes: 44,
      comments: 76,
    },
    {
      id: 2,
      user_name: "Arianna Huffington",
      user_id: 2,
      avatar: "assets/default-avatar-profile-icon.jpg",
      content: "Do you do this?",
      image: "insects.png",
      likes: 90,
      comments: 120,
    },
  ];

  // Sample user data
  const allUsers = [
    {
      id: 1,
      name: "John Maeda",
      avatar: "assets/default-avatar-profile-icon.jpg",
    },
    {
      id: 2,
      name: "Guy Kawasaki",
      avatar: "assets/default-avatar-profile-icon.jpg",
    },
    {
      id: 3,
      name: "Diego Rodriguez",
      avatar: "assets/default-avatar-profile-icon.jpg",
    },
  ];

  // Users I have chatted with (only for Messaging tab)
  const chatUsers = [
    {
      id: 1,
      name: "John Maeda",
      avatar: "assets/default-avatar-profile-icon.jpg",
    },
    {
      id: 2,
      name: "Diego Rodriguez",
      avatar: "assets/default-avatar-profile-icon.jpg",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-300 pt-16">
      {/* Left Sidebar - Navigation */}
      <div className="w-full md:w-1/4 md:bg-gray-200 md:shadow-lg md:shadow-gray-600 rounded-lg">
        <nav className="flex flex-row text-xs bg-[#42e242] shadow-md shadow-gray-500">
          <button
            className={`w-1/4 flex flex-col items-center pt-2 pb-1 ${
              activePage === "home"
                ? "bg-green-600 text-white"
                : "text-gray-800 hover:bg-gray-200"
            }`}
            onClick={() => setActivePage("home")}
          >
            <FaHome /> <span>Home</span>
          </button>
          <button
            className={`w-1/4 flex flex-col items-center pt-2 pb-1 ${
              activePage === "messaging"
                ? "bg-green-600 text-white"
                : "text-gray-800 hover:bg-gray-200"
            }`}
            onClick={() => setActivePage("messaging")}
          >
            <FaEnvelope /> <span>Messaging</span>
          </button>
          <button
            className={`w-1/4 flex flex-col items-center pt-2 pb-1 ${
              activePage === "notifications"
                ? "bg-green-600 text-white"
                : "text-gray-800 hover:bg-gray-200"
            }`}
            onClick={() => setActivePage("notifications")}
          >
            <FaBell /> <span>Notifications</span>
          </button>
          <button
            className={`w-1/4 flex flex-col items-center pt-2 pb-1 ${
              activePage === "profile"
                ? "bg-green-600 text-white"
                : "text-gray-800 hover:bg-gray-200"
            }`}
            onClick={() => setActivePage("profile")}
          >
            <FaUser /> <span>Profile</span>
          </button>
        </nav>

        <div className="relative w-full p-4">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg shadow-gray-300 md:shadow-gray-400 pb-4">
            {/* Cover Photo */}
            <div className="relative h-32 bg-gray-300">
              <img
                src="iStock.jpg"
                alt="Cover"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Profile Section (Overlapping Cover) */}
            <div className="flex flex-col items-center pt-10 relative -mt-24">
              {/* Profile Picture */}
              <img
                src="assets/default-avatar-profile-icon.jpg"
                alt="Profile"
                className="w-24 h-24 rounded-full border-4 border-white shadow-md"
              />

              {/* Profile Info */}
              <h2 className="mt-3 text-lg font-semibold text-gray-800">
                Lisa Marie Dias
              </h2>
              <p className="text-sm text-gray-600 text-center">
                Digital Marketing Strategy & Implementation
              </p>

              {/* Stats */}
              <div className="mt-4">
                <p className="text-blue-600 text-sm cursor-pointer hover:underline">
                  44 Who's viewed your profile
                </p>
                <p className="text-blue-600 text-sm cursor-pointer hover:underline">
                  76 Liked of your post
                </p>
              </div>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Log out
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Section - Dynamic Content */}
      <div className="w-full md:w-2/4 md:pr-4 bg-gray-300">
        {activePage === "home" && (
          <>
            {/* Main Content - Posts Section */}
            <div className="w-full p-4 md:p-6">
              {/* Create a Post */}
              <div className="bg-white p-8 rounded-lg shadow-lg mb-6">
                <div className="flex space-x-4">
                  <img
                    src="assets/default-avatar-profile-icon.jpg"
                    alt="User"
                    className="w-10 h-10 rounded-full"
                  />
                  <input
                    type="text"
                    placeholder="Write a post..."
                    className="flex-1 p-2 border rounded-md focus:outline-none"
                  />
                </div>
                <div className="mt-4 flex justify-between text-xs md:text-base">
                  <button className="px-2 md:w-2/6 md:py-2 bg-gray-200 rounded-lg flex items-center space-x-2">
                    <FaPlusCircle className="text-gray-500" />
                    <span>Write an article</span>
                  </button>
                  <button className="md:w-1/6 px-3 md:px-4 py-2 bg-gray-200 rounded-lg">
                    Image
                  </button>
                  <button className="md:w-1/6 px-3 md:px-4 py-2 bg-gray-200 rounded-lg">
                    Video
                  </button>
                  <button className="md:w-1/6 px-3 md:px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    Post
                  </button>
                </div>
              </div>

              {/* Posts Feed */}
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white p-8 rounded-lg shadow-lg mb-6"
                >
                  <div className="flex items-center space-x-3">
                    <img
                      src={post.avatar}
                      alt="avatar"
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <p className="font-semibold">{post.user_name}</p>
                    </div>
                  </div>
                  <p className="mt-2">{post.content}</p>
                  {post.image && (
                    <img
                      src={post.image}
                      alt="post"
                      className="mt-2 w-full rounded-md"
                    />
                  )}
                  <div className="flex justify-between mt-2 px-4">
                    <button className="text-gray-600 hover:text-red-500 flex items-center">
                      <FaHeart className="mr-1" /> {post.likes}
                    </button>
                    <button className="text-gray-600 hover:text-blue-500 flex items-center">
                      <FaComment className="mr-1" /> {post.comments}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {activePage === "messaging" && (
          <div className="w-full p-4 md:px-6 bg-gray-300">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              {/* Chat Header */}
              <div className="flex items-center gap-3 p-3 border-b border-gray-600">
                <img
                  src="assets/default-avatar-profile-icon.jpg"
                  alt="User"
                  className="w-12 h-12 rounded-full"
                />
                <div className="text-white">
                  <p className="font-semibold text-lg">Chat with Khalid</p>
                  <p className="text-xs text-gray-300">1767 Messages</p>
                </div>
              </div>
              <div className="mt-4">
                {currentChat.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.message_type === "send"
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >
                    {message.message_type === "received" && (
                      <img
                        src={"assets/default-avatar-profile-icon.jpg"}
                        alt="User"
                        className="w-8 h-8 rounded-full self-end mr-2"
                      />
                    )}

                    <div
                      className={`p-3 max-w-[75%] rounded-xl text-sm ${
                        message.message_type === "send"
                          ? "bg-green-500 text-white rounded-br-none"
                          : "bg-blue-500 text-white rounded-bl-none"
                      }`}
                    >
                      <p>{message.message}</p>
                      <span className="block text-xs text-white opacity-80 mt-1 text-right">
                        {new Date(
                          parseInt(message.timestamp)
                        ).toLocaleTimeString()}
                      </span>
                    </div>

                    {message.message_type === "send" && (
                      <img
                        src={"assets/default-avatar-profile-icon.jpg"}
                        alt="User"
                        className="w-8 h-8 rounded-full self-end ml-2"
                      />
                    )}
                  </div>
                ))}
              </div>
              {/* Chat Input */}
              <div className="flex items-center bg-gray-600 rounded-xl p-2 mt-2">
                <input
                  type="text"
                  className="flex-grow p-2 bg-transparent text-white placeholder-gray-400 focus:outline-none"
                  placeholder="Type your message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                />
                <button
                  // onClick={handleSendMessage}
                  className="ml-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
                >
                  ➤
                </button>
              </div>
            </div>
          </div>
        )}

        {activePage === "profile" && (
          <div className="w-full p-4 md:px-6 bg-gray-300">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg shadow-gray-300 md:shadow-gray-400 pb-4">
              {/* Cover Photo */}
              <div className="relative h-32 bg-gray-300">
                <img
                  src="iStock.jpg"
                  alt="Cover"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Profile Section (Overlapping Cover) */}
              <div className="flex flex-col items-center pt-10 relative -mt-24">
                {/* Profile Picture */}
                <img
                  src="assets/default-avatar-profile-icon.jpg"
                  alt="Profile"
                  className="w-24 h-24 rounded-full border-4 border-white shadow-md"
                />

                {/* Profile Info */}
                <h2 className="mt-3 text-lg font-semibold text-gray-800">
                  Lisa Marie Dias
                </h2>
                <p className="text-sm text-gray-600 text-center">
                  Digital Marketing Strategy & Implementation
                </p>

                {/* Stats */}
                <div className="mt-4">
                  <p className="text-blue-600 text-sm cursor-pointer hover:underline">
                    44 Who's viewed your profile
                  </p>
                  <p className="text-blue-600 text-sm cursor-pointer hover:underline">
                    76 Liked of your post
                  </p>
                </div>
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Log out
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Right Sidebar - Users List */}
      <div className="fixed right-4 top-20 w-full md:w-1/4 bg-white shadow-lg p-4 rounded-lg">
        <h2 className="text-lg font-bold text-gray-800">People may know</h2>
        <div className="overflow-y-auto max-h-96">
          {(activePage === "messaging" ? chatUsers : allUsers).map((user) => (
            <div
              key={user.id}
              className="flex items-center p-2 cursor-pointer hover:bg-gray-200 rounded-md"
              onClick={() => {
                setCurrentChatUser(user);
                setActivePage("messaging");
                setCurrentChat(currentChat);
              }}
            >
              <img
                src={user.avatar}
                alt="user"
                className="w-10 h-10 rounded-full mr-3"
              />
              <p className="text-gray-800 font-semibold">{user.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;
