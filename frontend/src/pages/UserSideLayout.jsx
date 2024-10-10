// import UserSideNavBar from "./UserSideNavBar";

import Spinner from "../ui/Spinner";

function UserSideLayout({ children }) {
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

  return (
    <div className="p-4">
      <style dangerouslySetInnerHTML={{ __html: customStyle }} />
      {/* <UserSideNavBar /> */}

      <div className="container mx-auto w-auto mt-[2rem] px- osverflow-y-scroll h-full">
        {children}
      </div>
    </div>
  );
}

export default UserSideLayout;
