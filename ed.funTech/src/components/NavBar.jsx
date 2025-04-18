import React from "react";
import { Menu } from "@headlessui/react";
import { motion } from "framer-motion";
import { FiLogIn, FiLogOut, FiUser } from "react-icons/fi";

const NavBar = ({ user, onLogin, onLogout }) => {
  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-30 p-4 flex justify-between items-center backdrop-blur-lg bg-space-900/80"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      {/* Logo */}
      <div className="text-blue-400 font-bold text-2xl">Ed.FunTech</div>

      {/* Middle Navigation - Explore Courses and Career Schools */}
      <div className="flex space-x-8">
        {/* Explore Courses Dropdown */}
        <Menu as="div" className="relative">
           <Menu.Button className="text-white text-lg hover:text-blue-400 transition-colors px-6 py-2 min-w-[160px] text-center">
            Explore Courses &#9662;
          </Menu.Button>
          <Menu.Items className="absolute bg-gray-800 text-white rounded-lg mt-2 p-2 shadow-lg">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="https://www.bing.com/aclk?ld=e8wIXjoLPYmApDzM6JKpawSjVUCUyY3xvV7kdEsoo8y-LwZULTvcm7KFxIfEyxzqkELxruqm8X-rmg6YDv8iv3CtS5xCXX-JMKlq0RZavhsr-B2-f4TavXkeV1fZOduTgOpiGLFjdqKTHPnBfIpFRDwR8TkXO_RmBLUBWOQk6-b8hDuo_bLMddGIKuaXZmqaDzr71Ujg&u=aHR0cHMlM2ElMmYlMmZ3d3cudWRlbXkuY29tJTJmY291cnNlJTJmdGhlLWRhdGEtYW5hbHlzdC1jb3Vyc2UtY29tcGxldGUtZGF0YS1hbmFseXN0LWJvb3RjYW1wJTJmJTNmdXRtX3NvdXJjZSUzZGJpbmclMjZ1dG1fbWVkaXVtJTNkdWRlbXlhZHMlMjZ1dG1fY2FtcGFpZ24lM2RCRy1TZWFyY2hfS2V5d29yZF9CZXRhX1Byb2ZfbGEuRU5fY2MuSW5kaWElMjZjYW1wYWlnbnR5cGUlM2RTZWFyY2glMjZwb3J0Zm9saW8lM2RCaW5nLUluZGlhJTI2bGFuZ3VhZ2UlM2RFTiUyNnByb2R1Y3QlM2RDb3Vyc2UlMjZ0ZXN0JTNkJTI2YXVkaWVuY2UlM2RLZXl3b3JkJTI2dG9waWMlM2REYXRhX0FuYWx5c2lzJTI2cHJpb3JpdHklM2RCZXRhJTI2dXRtX2NvbnRlbnQlM2RkZWFsNDU4NCUyNnV0bV90ZXJtJTNkXy5fYWdfMTMxMjgxOTI3Mjg2MDQzMl8uX2FkX18uX2t3X2RhdGElMjUyMGFuYWx5dGljcyUyNTIwY291cnNlc18uX2RlX2NfLl9kbV9fLl9wbF9fLl90aV9rd2QtODIwNTIzMjUxMTI2MjUlM2Fsb2MtOTBfLl9saV8xNTc3NzNfLl9wZF9fLl8lMjZtYXRjaHR5cGUlM2RwJTI2bXNjbGtpZCUzZDhhYWMwOTRhMGI5YjFhOGQyMmEzNjE0YmVlZDllYzll&rlid=8aac094a0b9b1a8d22a3614beed9ec9e"
                  className={`block px-4 py-2 ${active ? "bg-gray-700" : ""}`}
                >
                  Data Analytics
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="https://www.udemy.com/course/learn-digital-marketing-course/?srsltid=AfmBOoo4m4kF1j8Fl1fsQK_jdWdeWrKSrKMWEYN-WEkh-8GqR69CSuZf"
                  className={`block px-4 py-2 ${active ? "bg-gray-700" : ""}`}
                >
                  Digital Marketing
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="https://www.udemy.com/course/learn-digital-marketing-course/?srsltid=AfmBOoo4m4kF1j8Fl1fsQK_jdWdeWrKSrKMWEYN-WEkh-8GqR69CSuZf"
                  className={`block px-4 py-2 ${active ? "bg-gray-700" : ""}`}
                >
                  Web Development
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="https://www.udemy.com/courses/development/mobile-apps/?srsltid=AfmBOoqWNlbihe9oKhkkcpqJGHTCyfqYbe_WHxm4WZSxGEfOiomXkNld"
                  className={`block px-4 py-2 ${active ? "bg-gray-700" : ""}`}
                >
                  App Development
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="https://www.udemy.com/courses/development/mobile-apps/?srsltid=AfmBOoqWNlbihe9oKhkkcpqJGHTCyfqYbe_WHxm4WZSxGEfOiomXkNld"
                  className={`block px-4 py-2 ${active ? "bg-gray-700" : ""}`}
                >
                  Cybersecurity
                </a>
              )}
            </Menu.Item>
          </Menu.Items>
        </Menu>

        {/* Career Schools Dropdown */}
        <Menu as="div" className="relative">
        <Menu.Button className="text-white text-lg hover:text-blue-400 transition-colors px-6 py-2 min-w-[160px] text-center">

            Career Schools &#9662;
          </Menu.Button>
          <Menu.Items className="absolute bg-gray-800 text-white rounded-lg mt-2 p-2 shadow-lg">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#delhi"
                  className={`block px-4 py-2 ${active ? "bg-gray-700" : ""}`}
                >
                  Delhi
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#jaipur"
                  className={`block px-4 py-2 ${active ? "bg-gray-700" : ""}`}
                >
                  Jaipur
                </a>
              )}
            </Menu.Item>
          </Menu.Items>
        </Menu>
      </div>

      {/* Login/Logout Button */}
      {user ? (
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2 text-white">
            <FiUser /> {user.name}
          </span>
          <button
            onClick={onLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-red-600 transition-colors"
          >
            <FiLogOut /> Logout
          </button>
        </div>
      ) : (
        <button
          onClick={onLogin}
          className="bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-2 rounded-full flex items-center gap-2 text-white hover:from-cyan-500 hover:to-blue-600 transition-colors"
        >
          <FiLogIn /> Login
        </button>
      )}
    </motion.nav>
  );
};

export default NavBar;