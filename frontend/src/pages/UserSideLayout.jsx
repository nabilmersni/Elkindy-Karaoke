import { Box, Modal } from "@mui/material";
import { useState } from "react";

// import UserSideNavBar from "./UserSideNavBar";
const customStyle = `
body{
  // background-color: #f1f9ff;
  background-color: #f5fbff;
  // background-color: white;
}

/* ===== Scrollbar CSS ===== */
/* Firefox */
* {
scrollbar-width: auto;
scrollbar-color: #7586FF #D8E8FF;
}

/* Chrome, Edge, and Safari */
*::-webkit-scrollbar {
width: 16px;
}

*::-webkit-scrollbar-track {
background: #f5f1f6;
}

*::-webkit-scrollbar-thumb {
background-color: #7586FF;
border-radius: 10px;
border: 3px solid #ffffff;
}

`;
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "#070f2bdd",
  boxShadow: 10,
  outline: "none",
};

function UserSideLayout({ children }) {
  const [openModal, setOpenModal] = useState(true);

  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <div className="p-4">
      <style dangerouslySetInnerHTML={{ __html: customStyle }} />
      {/* <UserSideNavBar /> */}

      {import.meta.env.VITE_BACKEND_URL !== "http://localhost:3000" && (
        <Modal
          open={openModal}
          onClose={closeModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            className="w-[90vw] h-[90vh] lg:w-[45rem] lg:h-fit rounded-[2rem] p-[2rem]"
            sx={{
              ...style,
            }}
          >
            <div className="relative h-full">
              <div className="flex gap-[2rem] items-center justify-between">
                <button
                  onClick={closeModal}
                  className="text-white ml-auto font-bold p-2"
                >
                  X
                </button>
              </div>
              <div className="mt-1 flex flex-col items-center justify-center gap-8">
                <div className="flex gap-6">
                  <img className="w-20" src="/img/warning.png" alt="" />
                  <img className="w-20" src="/img/play.png" alt="" />
                </div>
                <p className="text-white sm:text-xl">
                  Hi! I want to inform you that you may encounter some issues
                  when playing your songs or singing along due to certain
                  YouTube restrictions on this deployed version. For the best
                  experience, I recommend using the local version. Simply
                  download or clone the Git project, then run
                  <code className="bg-gray-800 mx-2 text-yellow-500 font-mono px-2 py-1 rounded">
                    npm install
                  </code>
                  followed by
                  <code className="bg-gray-800 mx-2 text-yellow-500 font-mono px-2 py-1 rounded">
                    npm run dev
                  </code>
                  from the project's root directory. And voila, enjoy the full
                  experience!
                </p>
              </div>
            </div>
          </Box>
        </Modal>
      )}

      <div className="container mx-auto w-auto mt-[2rem] px- osverflow-y-scroll h-full">
        {children}
      </div>
    </div>
  );
}

export default UserSideLayout;
