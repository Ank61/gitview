import "./App.css";
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import JS from "./images/js.png";
import TS from "./images/ts.png";
import Python from "./images/python.png";
import Go from "./images/go.png";
import Scala from "./images/scala.png";
import Php from "./images/php.png";
import Ruby from "./images/ruby.png";
import CPP from "./images/cpp.png";
import C from "./images/c.png";

import { useEffect } from "react";

const totalCount = {
  cSharp: "17498794",
  js: "20270922",
  ts: "6311425",
  ruby: "2858226",
  php: "4678301",
  cpp: "4760820",
  c: "3044024",
  go: "1565563",
  python: "14216972",
  scala: "242668",
  shell: "2215892",
};

function App() {
  // useEffect(() => {
  //   async function fetchData() {
  //     let repos = [];
  //     let url = `https://api.github.com/search/repositories?q=language:${encodeURIComponent(
  //       "c#"
  //     )}&per_page=100`;
  //     let headers = {
  //       Accept: "application/vnd.github.v3+json",
  //     };
  //     const response = await fetch(url, { headers });
  //     const data = await response.json();
  //     repos = repos.concat(data.items);
  //     console.log("REpos", repos);
  //   }
  //   fetchData();
  // }, []);

  return (
    <div className="bg-sky-200 min-h-screen">
      <Header />
      <Sidebar />
      <div className="p-4 sm:ml-64 bg-sky-200">
        <div className="p-4 ml-8 rounded-lg dark:border-gray-700 mt-14 mr-8">
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="flex items-center justify-center rounded bg-gray-50 h-auto dark:bg-gray-800 shadow-md p-3">
              <div className="flex justify-between ">
                <img src={JS} className="Image" alt="logo" />
                <div className="flex flex-col font-sans mt-3">
                  <span className="font-bold text-xl ">JavaScript</span>
                  <span className="font-medium ">
                    Repositories :{" "}
                    <span className="text-sm">{totalCount.js}</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center rounded bg-gray-50 h-auto dark:bg-gray-800 shadow-md p-3 p-3">
              <div className="flex justify-between ">
                <img src={TS} className="Image" alt="logo" />
                <div className="flex flex-col font-sans mt-3">
                  <span className="font-bold text-xl ">TypeScript</span>
                  <span className="font-medium ">
                    Repositories :{" "}
                    <span className="text-sm">{totalCount.ts}</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center rounded bg-gray-50 h-auto dark:bg-gray-800 shadow-md p-3">
              <div className="flex justify-between ">
                <img src={Scala} className="scala" alt="logo" />
                <div className="flex flex-col font-sans mt-3">
                  <span className="font-bold text-xl ">Scala</span>
                  <span className="font-medium ">
                    Repositories :{" "}
                    <span className="text-sm">{totalCount.scala}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="flex items-center justify-center rounded bg-gray-50 h-auto dark:bg-gray-800 shadow-md p-3">
              <div className="flex justify-between ">
                <img src={Python} className="python" alt="logo" />
                <div className="flex flex-col font-sans mt-3">
                  <span className="font-bold text-xl ">Python</span>
                  <span className="font-medium ">
                    Repositories :{" "}
                    <span className="text-sm">{totalCount.python}</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center rounded bg-gray-50 h-auto dark:bg-gray-800 shadow-md p-3">
              <div className="flex justify-between ">
                <img src={C} className="Image" alt="logo" />
                <div className="flex flex-col font-sans mt-3">
                  <span className="font-bold text-xl ">C</span>
                  <span className="font-medium ">
                    Repositories :{" "}
                    <span className="text-sm">{totalCount.c}</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center rounded bg-gray-50 h-auto dark:bg-gray-800 shadow-md p-3">
              <div className="flex justify-between ">
                <img src={Ruby} className="ruby" alt="logo" />
                <div className="flex flex-col font-sans mt-3">
                  <span className="font-bold text-xl ">Ruby</span>
                  <span className="font-medium ">
                    Repositories :{" "}
                    <span className="text-sm">{totalCount.ruby}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 ">
            <div className="flex items-center justify-center rounded bg-gray-50 h-auto dark:bg-gray-800 shadow-md p-3 ">
              <div className="flex justify-between ">
                <img src={CPP} className="Image" alt="logo" />
                <div className="flex flex-col font-sans mt-3">
                  <span className="font-bold text-xl ">C++</span>
                  <span className="font-medium ">
                    Repositories :{" "}
                    <span className="text-sm">{totalCount.cpp}</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center rounded bg-gray-50 h-auto dark:bg-gray-800 shadow-md p-3">
              <div className="flex justify-between ">
                <img src={Php} className="Image" alt="logo" />
                <div className="flex flex-col font-sans mt-3">
                  <span className="font-bold text-xl ">PHP</span>
                  <span className="font-medium ">
                    Repositories :{" "}
                    <span className="text-sm">{totalCount.php}</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center rounded bg-gray-50 h-auto dark:bg-gray-800 shadow-md p-3">
              <div className="flex justify-between ">
                <img src={Go} className="go" alt="logo" />
                <div className="flex flex-col font-sans mt-3">
                  <span className="font-bold text-xl ">Go</span>
                  <span className="font-medium ">
                    Repositories :{" "}
                    <span className="text-sm">{totalCount.go}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
