import { useSelector } from "react-redux";
import { TextInput, Button } from "flowbite-react";

const DashProfile = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="max-w-lg mx-auto p-3 w-full">
      <h1 className="my-7 text-center font-semibold text-3xl">Profile</h1>
      <form className="flex flex-col gap-4">
        <div className="w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full">
          <img
            src={currentUser.profilePicture}
            alt="user"
            className="rounded-full w-full h-full object-cover border-8 border-[lightgray]"
          />
        </div>
        <TextInput
          type="text"
          placeholder="username"
          id="username"
          defaultValue={currentUser.username}
        />
        <TextInput
          type="email"
          placeholder="name@company.com"
          id="email"
          defaultValue={currentUser.email}
        />
        <TextInput type="password" placeholder="password" id="password" />
        <Button type="submit" gradientDuoTone="purpleToBlue" outline>
          update
        </Button>
      </form>
      <div className="text-red-500 flex justify-between mt-5">
        <span className="cursor-pointer">Delete Account</span>
        <span className="cursor-pointer">SignOut</span>
      </div>
    </div>
  );
};

export default DashProfile;
