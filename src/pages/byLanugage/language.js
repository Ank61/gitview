
import Sidebar from "../../components/sidebar";
import Header from "../../components/header";
import JS from "../../images/js.png";
import TS from "../../images/ts.png";
import Python from "../../images/python.png";
import Go from "../../images/go.png";
import Scala from "../../images/scala.png";
import Php from "../../images/php.png";
import Ruby from "../../images/ruby.png";
import CPP from "../../images/cpp.png";
import C from "../../images/c.png";
import { motion } from "framer-motion";
import "../../App.css"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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

function Language() {
    const [languageInput, setLanguageInput] = useState("")
    useEffect(() => {
        // async function fetchData() {
        //   let repos = [];
        //   let url = `https://api.github.com/search/repositories?q=language:${encodeURIComponent(
        //     "c#"
        //   )}&per_page=100`;
        //   let headers = {
        //     Accept: "application/vnd.github.v3+json",
        //   };
        //   const response = await fetch(url, { headers });
        //   const data = await response.json();
        //   repos = repos.concat(data.items);
        //   console.log("REpos", repos);
        // }
        // fetchData();
    }, []);

    return (
        <div className="bg-sky-100 min-h-screen">
            <Sidebar />
            <div className="p-4 sm:ml-64 bg-sky-100">
                <div className="p-4 ml-12 xl:ml-32 rounded-lg dark:border-gray-700 mt-3 mr-8">
                    <motion.h1
                        // animate={{ x: -60 }}
                        // transition={{ type: "spring", duration: 1.5 }}
                        class="flex justify-center items-center mb-6  text-xl font-bold text-gray-900 dark:text-white md:text-5xl lg:text-4xl"
                    >
                        <span class="mr-4 font-sans">
                            Find Open Source Repositories by
                        </span>
                        <span className="text-transparent font-sans bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 pb-1">
                            Language</span>
                    </motion.h1>
                    <label
                        class="mx-auto mt-16 mb-16 relative bg-white min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-md focus-within:border-gray-300"
                        for="search-bar"
                    >
                        <input
                            id="search-bar"
                            spellcheck="false"
                            placeholder="Search repository by language"
                            class="px-8 py-4 w-full rounded-md flex-1 outline-none bg-white font-sans"
                            value={languageInput}
                            onChange={(e) => setLanguageInput(e.target.value)}
                        />
                        <button class="w-full md:w-auto px-3.5 py-2.5 bg-black border-black text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-2xl transition-all disabled:opacity-70">
                            <div class="relative">
                                <div class="flex items-center justify-center h-3 w-3 absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 transition-all">
                                    <svg
                                        class="opacity-0 animate-spin w-full h-full"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle
                                            class="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            stroke-width="4"
                                        ></circle>
                                        <path
                                            class="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                        ></path>
                                    </svg>
                                </div>

                                <div class="flex items-center transition-all opacity-1 valid:">
                                    <span class="font-semibold whitespace-nowrap truncate mx-auto">
                                        Search
                                    </span>
                                </div>
                            </div>
                        </button>
                    </label>
                    <div className="grid grid-cols-3 gap-4 mb-4">
                        <motion.div
                            className="flex items-center justify-center rounded bg-gray-50 h-auto dark:bg-gray-800 shadow-md p-3 cursor-pointer "
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Link to="/repositories/javascript">
                                <div className="flex justify-between xl:mr-10">
                                    <img src={JS} className="Image" alt="logo" />
                                    <div className="flex flex-col font-sans mt-3 xl:mt-7">
                                        <span className="font-bold text-xl ">JavaScript</span>
                                        <span className="font-medium xl:mt-5">
                                            Repositories :{" "}
                                            <span className="text-sm">{totalCount.js}</span>
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                        <motion.div
                            className="flex items-center justify-center rounded bg-gray-50 h-auto dark:bg-gray-800 shadow-md p-3 cursor-pointer p-3"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <div className="flex justify-between xl:mr-10">
                                <img src={TS} className="Image" alt="logo" />
                                <div className="flex flex-col font-sans mt-3">
                                    <span className="font-bold text-xl ">TypeScript</span>
                                    <span className="font-medium xl:mt-5">
                                        Repositories :{" "}
                                        <span className="text-sm">{totalCount.ts}</span>
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            className="flex items-center justify-center rounded bg-gray-50 h-auto dark:bg-gray-800 shadow-md p-3 cursor-pointer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <div className="flex justify-between xl:mr-10">
                                <img src={Scala} className="scala" alt="logo" />
                                <div className="flex flex-col font-sans mt-3 xl:mt-7">
                                    <span className="font-bold text-xl ">Scala</span>
                                    <span className="font-medium xl:mt-5">
                                        Repositories :{" "}
                                        <span className="text-sm">{totalCount.scala}</span>
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 mb-4">
                        <motion.div
                            className="flex items-center justify-center rounded bg-gray-50 h-auto dark:bg-gray-800 shadow-md p-3 cursor-pointer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <div className="flex justify-between xl:mr-10">
                                <img src={Python} className="python" alt="logo" />
                                <div className="flex flex-col font-sans mt-3 xl:mt-7">
                                    <span className="font-bold text-xl ">Python</span>
                                    <span className="font-medium xl:mt-5">
                                        Repositories :{" "}
                                        <span className="text-sm">{totalCount.python}</span>
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            className="flex items-center justify-center rounded bg-gray-50 h-auto dark:bg-gray-800 shadow-md p-3 cursor-pointer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <div className="flex justify-between xl:mr-10">
                                <img src={C} className="Image" alt="logo" />
                                <div className="flex flex-col font-sans mt-3 xl:mt-7">
                                    <span className="font-bold text-xl ">C</span>
                                    <span className="font-medium xl:mt-5">
                                        Repositories :{" "}
                                        <span className="text-sm">{totalCount.c}</span>
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            className="flex items-center justify-center rounded bg-gray-50 h-auto dark:bg-gray-800 shadow-md p-3 cursor-pointer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <div className="flex justify-between xl:mr-10">
                                <img src={Ruby} className="ruby" alt="logo" />
                                <div className="flex flex-col font-sans mt-3">
                                    <span className="font-bold text-xl ">Ruby</span>
                                    <span className="font-medium xl:mt-5 ">
                                        Repositories :{" "}
                                        <span className="text-sm">{totalCount.ruby}</span>
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 ">
                        <motion.div
                            className="flex items-center justify-center rounded bg-gray-50 h-auto dark:bg-gray-800 shadow-md p-3 cursor-pointer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <div className="flex justify-between xl:mr-10">
                                <img src={CPP} className="Image" alt="logo" />
                                <div className="flex flex-col font-sans mt-3 xl:mt-7">
                                    <span className="font-bold text-xl ">C++</span>
                                    <span className="font-medium xl:mt-5">
                                        Repositories :{" "}
                                        <span className="text-sm">{totalCount.cpp}</span>
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            className="flex items-center justify-center rounded bg-gray-50 h-auto dark:bg-gray-800 shadow-md p-3 cursor-pointer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <div className="flex justify-between xl:mr-10">
                                <img src={Php} className="Image" alt="logo" />
                                <div className="flex flex-col font-sans mt-3">
                                    <span className="font-bold text-xl ">PHP</span>
                                    <span className="font-medium xl:mt-5 ">
                                        Repositories :{" "}
                                        <span className="text-sm">{totalCount.php}</span>
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            className="flex items-center justify-center rounded bg-gray-50 h-auto dark:bg-gray-800 shadow-md p-3 cursor-pointer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <div className="flex justify-between xl:mr-10">
                                <img src={Go} className="go" alt="logo" />
                                <div className="flex flex-col font-sans mt-3">
                                    <span className="font-bold text-xl ">Go</span>
                                    <span className="font-medium xl:mt-5">
                                        Repositories :{" "}
                                        <span className="text-sm">{totalCount.go}</span>
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Language;
