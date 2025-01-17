import { useState } from "react";
import "./App.css";

function App() {
  const [colour1, setColour1] = useState("black");
  const [colour2, setColour2] = useState("black");
  const [colour3, setColour3] = useState("black");
  const [colour4, setColour4] = useState("black");
  const [colour5, setColour5] = useState("black");
  const [colour6, setColour6] = useState("black");

  return (
    <>
      <h1
        className="ml-96 mb-10 flex justify-center w-96 text-3xl bg-green-600 p-5 rounded-3xl "
        style={{ border: "4px solid white" }}
      >
        Colour Changer Project
      </h1>
      <div
        className="w-full h-auto flex justify-center shadow-lg flex-wrap gap-5 bg-black rounded-3xl p-10 border-3 border-black"
        style={{ border: "solid white 6px" }}
      >
        <div
          className="w-72 h-72 duration-150 rounded-3xl flex flex-col py-5"
          style={{ backgroundColor: colour1, border: "3px solid white" }}
        >
          <h1
            className="ml-4 flex flex-wrap justify-center"
            style={{ fontSize: "2rem" }}
          >
            Hello,Thanks for changing colour
          </h1>
          <div className="mt-auto flex flex-wrap justify-center inset-x-1 px-1">
            <div
              className="flex flex-wrap justify-center gap-2 shadow-lg bg-white px-3 py-2 rounded-3xl"
              style={{ border: "2px solid black" }}
            >
              <button
                onClick={() => setColour1("red")}
                className="outline-none px-3 py-1 rounded-full shadow-lg text-black"
                style={{ backgroundColor: "red" }}
              >
                Red
              </button>
              <button
                onClick={() => setColour1("green")}
                className="outline-none px-3 py-1 rounded-full shadow-lg text-black"
                style={{ backgroundColor: "green" }}
              >
                Green
              </button>
              <button
                onClick={() => setColour1("yellow")}
                className="outline-none px-3 py-1 rounded-full shadow-lg text-black"
                style={{ backgroundColor: "yellow" }}
              >
                Yellow
              </button>
              <button
                onClick={() => setColour1("blue")}
                className="outline-none px-3 py-1 rounded-full shadow-lg text-black"
                style={{ backgroundColor: "blue" }}
              >
                Blue
              </button>
              <button
                onClick={() => setColour1("purple")}
                className="outline-none px-3 py-1 rounded-full shadow-lg text-black"
                style={{ backgroundColor: "purple" }}
              >
                Purple
              </button>
              <button
                onClick={() => setColour1("orange")}
                className="outline-none px-3 py-1 rounded-full shadow-lg text-black"
                style={{ backgroundColor: "orange" }}
              >
                Orange
              </button>
            </div>
          </div>
        </div>

        <div
          className="w-72 h-72 duration-150 rounded-3xl flex flex-col py-5"
          style={{ backgroundColor: colour2, border: "3px solid white" }}
        >
          <h1
            className="ml-4 flex flex-wrap justify-center"
            style={{ fontSize: "2rem" }}
          >
            Hello,Thanks for changing colour
          </h1>
          <div className="mt-auto flex flex-wrap justify-center inset-x-1 px-1">
            <div
              className="flex flex-wrap justify-center gap-2 shadow-lg bg-white px-3 py-2 rounded-3xl"
              style={{ border: "2px solid black" }}
            >
              <button
                onClick={() => setColour2("red")}
                className="outline-none px-3 py-1 rounded-full shadow-lg text-black"
                style={{ backgroundColor: "red" }}
              >
                Red
              </button>
              <button
                onClick={() => setColour2("green")}
                className="outline-none px-3 py-1 rounded-full shadow-lg text-black"
                style={{ backgroundColor: "green" }}
              >
                Green
              </button>
              <button
                onClick={() => setColour2("yellow")}
                className="outline-none px-3 py-1 rounded-full shadow-lg text-black"
                style={{ backgroundColor: "yellow" }}
              >
                Yellow
              </button>
              <button
                onClick={() => setColour2("blue")}
                className="outline-none px-3 py-1 rounded-full shadow-lg text-black"
                style={{ backgroundColor: "blue" }}
              >
                Blue
              </button>
              <button
                onClick={() => setColour2("purple")}
                className="outline-none px-3 py-1 rounded-full shadow-lg text-black"
                style={{ backgroundColor: "purple" }}
              >
                Purple
              </button>
              <button
                onClick={() => setColour2("orange")}
                className="outline-none px-3 py-1 rounded-full shadow-lg text-black"
                style={{ backgroundColor: "orange" }}
              >
                Orange
              </button>
            </div>
          </div>
        </div>

        <div
          className="w-72 h-72 duration-150 rounded-3xl flex flex-col py-5"
          style={{ backgroundColor: colour3, border: "3px solid white" }}
        >
          <h1
            className="ml-4 flex flex-wrap justify-center"
            style={{ fontSize: "2rem" }}
          >
            Hello,Thanks for changing colour
          </h1>
          <div className="mt-auto flex flex-wrap justify-center inset-x-1 px-1">
            <div
              className="flex flex-wrap justify-center gap-2 shadow-lg bg-white px-3 py-2 rounded-3xl"
              style={{ border: "2px solid black" }}
            >
              <button
                onClick={() => setColour3("red")}
                className="outline-none px-3 py-1 rounded-full shadow-lg text-black"
                style={{ backgroundColor: "red" }}
              >
                Red
              </button>
              <button
                onClick={() => setColour3("green")}
                className="outline-none px-3 py-1 rounded-full shadow-lg text-black"
                style={{ backgroundColor: "green" }}
              >
                Green
              </button>
              <button
                onClick={() => setColour3("yellow")}
                className="outline-none px-3 py-1 rounded-full shadow-lg text-black"
                style={{ backgroundColor: "yellow" }}
              >
                Yellow
              </button>
              <button
                onClick={() => setColour3("blue")}
                className="outline-none px-3 py-1 rounded-full shadow-lg text-black"
                style={{ backgroundColor: "blue" }}
              >
                Blue
              </button>
              <button
                onClick={() => setColour3("purple")}
                className="outline-none px-3 py-1 rounded-full shadow-lg text-black"
                style={{ backgroundColor: "purple" }}
              >
                Purple
              </button>
              <button
                onClick={() => setColour3("orange")}
                className="outline-none px-3 py-1 rounded-full shadow-lg text-black"
                style={{ backgroundColor: "orange" }}
              >
                Orange
              </button>
            </div>
          </div>
        </div>

        <div
          className="w-72 h-72 duration-150 rounded-3xl flex flex-col py-5"
          style={{ backgroundColor: colour4, border: "3px solid white" }}
        >
          <h1
            className="ml-4 flex flex-wrap justify-center"
            style={{ fontSize: "2rem" }}
          >
            Hello,Thanks for changing colour
          </h1>
          <div className="mt-auto flex flex-wrap justify-center inset-x-1 px-1">
            <div
              className="flex flex-wrap justify-center gap-2 shadow-lg bg-white px-3 py-2 rounded-3xl"
              style={{ border: "2px solid black" }}
            >
              <button
                onClick={() => setColour4("red")}
                className="outline-none px-3 py-1 rounded-full shadow-lg text-black"
                style={{ backgroundColor: "red" }}
              >
                Red
              </button>
              <button
                onClick={() => setColour4("green")}
                className="outline-none px-3 py-1 rounded-full shadow-lg text-black"
                style={{ backgroundColor: "green" }}
              >
                Green
              </button>
              <button
                onClick={() => setColour4("yellow")}
                className="outline-none px-3 py-1 rounded-full shadow-lg text-black"
                style={{ backgroundColor: "yellow" }}
              >
                Yellow
              </button>
              <button
                onClick={() => setColour4("blue")}
                className="outline-none px-3 py-1 rounded-full shadow-lg text-black"
                style={{ backgroundColor: "blue" }}
              >
                Blue
              </button>
              <button
                onClick={() => setColour4("purple")}
                className="outline-none px-3 py-1 rounded-full shadow-lg text-black"
                style={{ backgroundColor: "purple" }}
              >
                Purple
              </button>
              <button
                onClick={() => setColour4("orange")}
                className="outline-none px-3 py-1 rounded-full shadow-lg text-black"
                style={{ backgroundColor: "orange" }}
              >
                Orange
              </button>
            </div>
          </div>
        </div>

        <div
          className="w-72 h-72 duration-150 rounded-3xl flex flex-col py-5"
          style={{ backgroundColor: colour5, border: "3px solid white" }}
        >
          <h1
            className="ml-4 flex flex-wrap justify-center"
            style={{ fontSize: "2rem" }}
          >
            Hello,Thanks for changing colour
          </h1>
          <div className="mt-auto flex flex-wrap justify-center inset-x-1 px-1">
            <div
              className="flex flex-wrap justify-center gap-2 shadow-lg bg-white px-3 py-2 rounded-3xl"
              style={{ border: "2px solid black" }}
            >
              <button
                onClick={() => setColour5("red")}
                className="outline-none px-3 py-1 rounded-full shadow-lg text-black"
                style={{ backgroundColor: "red" }}
              >
                Red
              </button>
              <button
                onClick={() => setColour5("green")}
                className="outline-none px-3 py-1 rounded-full shadow-lg text-black"
                style={{ backgroundColor: "green" }}
              >
                Green
              </button>
              <button
                onClick={() => setColour5("yellow")}
                className="outline-none px-3 py-1 rounded-full shadow-lg text-black"
                style={{ backgroundColor: "yellow" }}
              >
                Yellow
              </button>
              <button
                onClick={() => setColour5("blue")}
                className="outline-none px-3 py-1 rounded-full shadow-lg text-black"
                style={{ backgroundColor: "blue" }}
              >
                Blue
              </button>
              <button
                onClick={() => setColour5("purple")}
                className="outline-none px-3 py-1 rounded-full shadow-lg text-black"
                style={{ backgroundColor: "purple" }}
              >
                Purple
              </button>
              <button
                onClick={() => setColour5("orange")}
                className="outline-none px-3 py-1 rounded-full shadow-lg text-black"
                style={{ backgroundColor: "orange" }}
              >
                Orange
              </button>
            </div>
          </div>
        </div>

        <div
          className="w-72 h-72 duration-150 rounded-3xl flex flex-col py-5"
          style={{ backgroundColor: colour6, border: "3px solid white" }}
        >
          <h1
            className="ml-4 flex flex-wrap justify-center"
            style={{ fontSize: "2rem" }}
          >
            Hello,Thanks for changing colour
          </h1>
          <div className="mt-auto flex flex-wrap justify-center inset-x-1 px-1">
            <div
              className="flex flex-wrap justify-center gap-2 shadow-lg bg-white px-3 py-2 rounded-3xl"
              style={{ border: "2px solid black" }}
            >
              <button
                onClick={() => setColour6("red")}
                className="outline-none px-3 py-1 rounded-full shadow-lg text-black"
                style={{ backgroundColor: "red" }}
              >
                Red
              </button>
              <button
                onClick={() => setColour6("green")}
                className="outline-none px-3 py-1 rounded-full shadow-lg text-black"
                style={{ backgroundColor: "green" }}
              >
                Green
              </button>
              <button
                onClick={() => setColour6("yellow")}
                className="outline-none px-3 py-1 rounded-full shadow-lg text-black"
                style={{ backgroundColor: "yellow" }}
              >
                Yellow
              </button>
              <button
                onClick={() => setColour6("blue")}
                className="outline-none px-3 py-1 rounded-full shadow-lg text-black"
                style={{ backgroundColor: "blue" }}
              >
                Blue
              </button>
              <button
                onClick={() => setColour6("purple")}
                className="outline-none px-3 py-1 rounded-full shadow-lg text-black"
                style={{ backgroundColor: "purple" }}
              >
                Purple
              </button>
              <button
                onClick={() => setColour6("orange")}
                className="outline-none px-3 py-1 rounded-full shadow-lg text-black"
                style={{ backgroundColor: "orange" }}
              >
                Orange
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
