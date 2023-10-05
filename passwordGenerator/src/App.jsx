import { useState, useCallback } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = `QWERTYUIOPASDFGHJKLKZXCVBNMqwertyuiopasdfghjklzxcvbnm`;
    if (numberAllowed) str += `0123456789`;
    if (characterAllowed) str += `!@#$%^&*./\|`;

    for (let i = 1; i <= length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass = str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, characterAllowed, setPassword]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4  text-gray-900 bg-sky-200 mt-16">
        <h1 className="text-center my-3">Password Generator </h1>
        <div className=" flex shadow rounded-lg overflow-hidden justify-center mb-2">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 bg-white"
            placeholder="Password"
            readOnly
          />
          <button className=" text-white bg-blue-500 py-1 px-3">Cpoy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className='flex items-center'>
            <input
              type="range"
              min={8}
              max={30}
              value={length}
              className=" cursor-pointer mx-1"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>
          <div>
            <input
              type="checkbox"
              value={numberAllowed}
              className="cursor-pointer mx-1"
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed((previousValue) => !previousValue)
              }}
            />
            <label>Numnbers</label>
          </div>
          <div>
            <input
              type="checkbox"
              value={characterAllowed}
              className=" cursor-pointer mx-1"
              defaultChecked={characterAllowed}
              onChange={() => {
                setCharacterAllowed((previousValue) => !previousValue)
              }}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
