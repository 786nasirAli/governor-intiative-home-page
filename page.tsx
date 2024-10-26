import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div>
     <header className="bg-blue-900 text-white py-2">
       <div className="container mx-auto flex justify-between items-center">
         <img
           alt="Sindh Governor Logo"
           className="h-20"
           height="20"
           src="/image/logo.png"
           width="70"
           style={{
             position: "relative",
             top: "0",
             transform: "translateY(50%)",
           }}
         />

         <div className="text-2xl font-extrabold text-blue-200">
           Tuition Free Education Program on Latest Technologies
         </div>
         <nav className="space-x-4">
           <a className="hover:underline" href="#">
             Home
           </a>
           <a className="hover:underline" href="#">
             Apply
           </a>
           <a className="hover:underline" href="#">
             Jobs
           </a>
           <a className="hover:underline" href="#">
             Result
           </a>
           <div className="inline-block relative">
             <button className="hover:underline">Courses</button>
             <div className="absolute hidden text-gray-700 pt-1">
               <a
                 className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                 href="#"
               >
                 Course 1
               </a>
               <a
                 className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                 href="#"
               >
                 Course 2
               </a>
             </div>
           </div>
         </nav>
       </div>
     </header>

     <main className="container mx-auto mt-8">
       <div className="flex">
         <div className="w-2/3">
           <h1 className="text-6xl font-bold text-blue-900">Governor Sindh</h1>
           <h2 className="text-5xl text-gray-700">Kamran Khan Tessori</h2>
           <h3 className="text-6xl font-bold text-blue-500 mt-4">
             <img src=" relative z-0 w-full overflow-hidden bg-opacity-75 bg-[url('/bg_house.jpg')] bg-cover __className_092cb9" alt="" />
             Certified Cloud Applied Generative AI Engineer (GenEng)
           </h3>
           <p className="text-xl text-gray-700 mt-2">
             Earn up to $5,000 / month
           </p>
           <p className="text-xl text-gray-700 mt-2">
             Now admissions are open in Hyderabad
           </p>
         </div>
         <div className="w-10/10">
           <img
             alt="Governor Sindh Kamran Khan Tessori"
             className="rounded-lg"
             height="1000"
             src="/image/g1.png"
             width="1000px"
           />
         </div>
       </div>
     </main>

     {/* Paragraph section */}
     <h1 className="text-4xl font-bold text-blue-950 justify-center">
       Certified Cloud Applied Generative AI Engineer (GenEng) and Solopreneur
     </h1>
     <h1 className="text-4xl font-bold text-blue-950 justify-center p-0">
       Developing Billion-Dollar Valued Developers and Solopreneurs
     </h1>
     <br />
     <p className="text-blue-950 text-2xl">
       The pace of technological change is accelerating, big players like
       Microsoft, Amazon, Google, and OpenAI are winning by providing
       infrastructure, large AI foundation models, frameworks, 3D Metaverse
       experiences, and massive distribution networks. Solopreneurs trained in
       this program will win by automating work typically outsourced to
       employees, by directly connecting to customers by eliminating the
       middleman, and by developing vertical metaverses, thus paving the way
       for the first billion-dollar valued solopreneur businesses. This program
       has the objective to train this new breed of billion-dollar
       solopreneurs. These solopreneurs will adopt the ultra-lean business
       model and work independently and will not need to hire employees or
       other team members.
     </p>

     {/* Gallery Section */}
     <section className="text-gray-600 body-font">
       <div className="container px-5 py-24 mx-auto">
         <div className="flex flex-col"></div>
         <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
           <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
             <div className="rounded-lg h-64 overflow-hidden">
               <img
                 alt="content"
                 className="object-cover object-center h-full w-full"
                 src="/image/g2.jpg"
               />
             </div>
           </div>
           <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
             <div className="rounded-lg h-64 overflow-hidden">
               <img
                 alt="content"
                 className="object-cover object-center h-full w-full"
                 src="/image/g3.jpg"
               />
             </div>
           </div>
           <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
             <div className="rounded-lg h-64 overflow-hidden">
               <img
                 alt="content"
                 className="object-cover object-center h-full w-full"
                 src="/image/g4.jpg"
               />
             </div>
           </div>
         </div>
       </div>

       <div className="flex flex-wrap -mx-4 -mb-10 text-center">
         <div className="sm:w-1/2 mb-10 px-4">
           <div className="rounded-lg h-64 overflow-hidden">
             <img
               alt="content"
               className="object-cover object-center h-full w-full"
               src="/image/g4.jpg"
             />
           </div>
         </div>
         <div className="sm:w-1/2 mb-10 px-4">
           <div className="rounded-lg h-64 overflow-hidden">
             <img
               alt="content"
               className="object-cover object-center h-full w-full"
               src="/image/g5.jpg"
             />
           </div>
         </div>
       </div>
     </section>

     <br />
     <h1 className="text-blue-950 text-4xl font-extrabold">
       Core Courses Sequence
     </h1>

     {/* Core Courses Section */}
     <div className="xl:w-[1300px] lg:w-[90%] w-[95%] m-auto mt-10 mb-10">
       <h1 className="lg:text-4xl sm:text-4xl text-2xl sm:text-left text-center text-main font-extrabold mt-10">
         Core Courses Sequence
       </h1>

       <div className="grid xl-lg:grid-cols-4 sm:grid-cols-3 grid-cols-1 xl-lg:gap-10 gap-5 mt-10">
         <a
           className="hover:scale-105 duration-200 transition-all"
           href="/compulsory/1"
         >
           <div className="overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold">
             <div>
               <img
                 alt="programming fundamentals"
                 loading="lazy"
                 width="450"
                 height="300"
                 decoding="async"
                 data-nimg="1"
                 className="object-cover w-full"
                 style={{ color: "transparent" }}
                 src="/image/g7.jpg"
               />
             </div>
             <div className="px-4 flex justify-center items-center h-[70px]">
               <span>Programming Fundamentals</span>
             </div>
           </div>
         </a>

         <a
           className="hover:scale-105 duration-200 transition-all"
           href="/compulsory/2"
         >
           <div className="overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold">
             <div>
               <img
                 alt="nextjs"
                 loading="lazy"
                 width="450"
                 height="300"
                 decoding="async"
                 data-nimg="1"
                 className="object-cover w-full"
                 style={{ color: "transparent" }}
                 src="/image/g8.jpg"
               />
             </div>
             <div className="px-4 flex justify-center items-center h-[70px]">
               <span>Web2 Using NextJS</span>
             </div>
           </div>
         </a>

         <a
           className="hover:scale-105 duration-200 transition-all"
           href="/compulsory/3"
         >
           <div className="overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold">
             <div>
               <img
                 alt="nextjs"
                 loading="lazy"
                 width="450"
                 height="300"
                 decoding="async"
                 data-nimg="1"
                 className="object-cover w-full"
                 style={{ color: "transparent" }}
                 src="/image/g10.jpg"
               />
             </div>
             <div className="px-4 flex justify-center items-center h-[70px]">
               <span>Earn as You Learn</span>
             </div>
           </div>
         </a>
       </div>
     </div>
     <div className="xl:w-[1300px] lg:w-[90%] w-[95%] m-auto mt-20 mb-10">
       <h1 className="lg:text-4xl sm:text-4xl text-2xl sm:text-left text-center text-main font-extrabold mt-10">
         Advanced Courses
       </h1>
       <div className="grid xl-lg:grid-cols-4 sm:grid-cols-3 grid-cols-1 xl-lg:gap-10 gap-5 mt-10">
         <a
           className="hover:scale-105 duration-200 transition-all"
           href="/tracks/ai/4"
         >
           <div className=" overflow-hidden h-fit  box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold ">
             <div>
               <img
                 alt="Artificial Intelligence"
                 loading="lazy"
                 width="450"
                 height="300"
                 decoding="async"
                 data-nimg="1"
                 className="  object-cover w-full"
                 style={{ color: "transparent" }}
                 src="/image/g10.jpg"
               />
             </div>
             <div className="px-4 flex justify-center items-center   h-[70px]">
               <text>Artificial Intelligence</text>
             </div>
           </div>
         </a>
         <a
           className="hover:scale-105 duration-200 transition-all"
           href="/tracks/wmd/4"
         >
           <div className=" overflow-hidden h-fit  box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold ">
             <div>
               <img
                 alt="Web 3 and Metaverse"
                 loading="lazy"
                 width="450"
                 height="300"
                 decoding="async"
                 data-nimg="1"
                 className="  object-cover w-full"
                 style={{ color: "transparent" }}
                 src="/image/g11.jpg"
               />
             </div>
             <div className="px-4 flex justify-center items-center   h-[70px]">
               <text>Web 3 and Metaverse</text>
             </div>
           </div>
         </a>
         <a
           className="hover:scale-105 duration-200 transition-all"
           href="/tracks/cnc/4"
         >
           <div className=" overflow-hidden h-fit  box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold ">
             <div>
               <img
                 alt="Cloud-Native Computing"
                 loading="lazy"
                 width="450"
                 height="300"
                 decoding="async"
                 data-nimg="1"
                 className="  object-cover w-full"
                 style={{ color: "transparent" }}
                 src="/image/g12.jpg"
               />
             </div>
             <div className="px-4 flex justify-center items-center   h-[70px]">
               <text>Cloud-Native Computing</text>
             </div>
           </div>
         </a>
         <a
           className="hover:scale-105 duration-200 transition-all"
           href="/tracks/iot/4"
         >
           <div className=" overflow-hidden h-fit  box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold ">
             <div>
               <img
                 alt="Ambient Computing and IoT"
                 loading="lazy"
                 width="450"
                 height="300"
                 decoding="async"
                 data-nimg="1"
                 className="  object-cover w-full"
                 style={{ color: "transparent" }}
                 src="/image/g13.jpg"
               />
             </div>
             <div className="px-4 flex justify-center items-center   h-[70px]">
               <text>Ambient Computing and IoT</text>
             </div>
           </div>
         </a>
         <a
           className="hover:scale-105 duration-200 transition-all"
           href="/tracks/gbs/4"
         >
           <div className=" overflow-hidden h-fit  box_shadow rounded-lg flex flex-col  justify-center items-center text-center text-zinc-600 text-lg font-bold ">
             <div>
               <img
                 alt="Genomics and Bioinformatics"
                 loading="lazy"
                 width="450"
                 height="300"
                 decoding="async"
                 data-nimg="1"
                 className="  object-cover w-full"
                 style={{ color: "transparent" }}
                 src="/image/g14.jpg"
               />
             </div>
             <div className="px-4 flex justify-center items-center   h-[70px]">
               <text>Genomics and Bioinformatics</text>
             </div>
           </div>
         </a>
         <a
           className="hover:scale-105 duration-200 transition-all"
           href="/tracks/npa/4"
         >
           <div className=" overflow-hidden h-fit  box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold ">
             <div>
               <img
                 alt="Network Programmability and Automation"
                 loading="lazy"
                 width="450"
                 height="300"
                 decoding="async"
                 data-nimg="1"
                 className="  object-cover w-full"
                 style={{ color: "transparent" }}
                 src="/image/g15.jpg"
               />
             </div>
             <div className="px-4 flex justify-center items-center   h-[70px]">
               <text>Network Programmability and Automation</text>
             </div>
           </div>
         </a>
       </div>
     </div>
     <div className="mt-20 w-full bg-zinc-100 print:hidden">
       <div className="m-auto w-[95%] py-20 lg:w-[90%] xl:w-[1300px]">
         <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
           <div className="text-zinc-800">
             <h1 className="text-xl font-bold">Core Courses</h1>
             <div className="mt-5 flex flex-col gap-3 text-sm md:text-base">
               <a className="truncate" href="/compulsory/1">
                 Programming Fundamentals
               </a>
               <a className="truncate" href="/compulsory/2">
                 Web2 Using NextJS
               </a>
               <a className="truncate" href="/compulsory/3">
                 Earn as You Learn
               </a>
             </div>
           </div>
           <div className="text-zinc-800">
             <h1 className="text-xl font-bold">Advanced Courses</h1>
             <div className="mt-5 flex flex-col gap-3 text-sm md:text-base">
               <a className="" href="/tracks/wmd/4">
                 Web 3 and Metaverse
               </a>
               <a className="" href="/tracks/cnc/4">
                 Cloud-Native Computing
               </a>
               <a className="" href="/tracks/ai/4">
                 Artificial Intelligence (AI) and Deep Learning
               </a>
               <a className="" href="/tracks/iot/4">
                 Ambient Computing and IoT
               </a>
               <a className="" href="/tracks/gbs/4">
                 Genomics and Bioinformatics
               </a>
               <a className="" href="/tracks/npa/4">
                 Network Programmability and Automation
               </a>
             </div>
           </div>
           <div className="text-zinc-800">
             <h1 className="text-xl font-bold">Social Links</h1>
             <div className="my-5 flex gap-3  md:text-sm">
               <a
                 target="_blank"
                 className="flex h-8 w-8 items-center justify-center rounded-full bg-[#4267B2] text-white"
                 href="https://www.facebook.com/TeamKTessori"
               >
                 <svg
                   stroke="currentColor"
                   fill="currentColor"
                   stroke-width="0"
                   viewBox="0 0 320 512"
                   className="h-5 w-5"
                   height="1em"
                   width="1em"
                   xmlns="/image/facebook.jpg"
                 >
                   <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                 </svg>
               </a>
               <a
                 target="_blank"
                 className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FF0000] text-white"
                 href="https://www.youtube.com/@KamranTessorikk"
               >
                 <svg
                   stroke="currentColor"
                   fill="currentColor"
                   stroke-width="0"
                   viewBox="0 0 576 512"
                   className="h-5 w-5"
                   height="1em"
                   width="1em"
                   xmlns="/image/youtube.jpg"
                 >
                   <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                 </svg>
               </a>
               <a
                 target="_blank"
                 className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1DA1F2] text-white"
                 href="https://twitter.com/KamranTessoriPk"
               >
                 <svg
                   stroke="currentColor"
                   fill="currentColor"
                   stroke-width="0"
                   viewBox="0 0 512 512"
                   className="h-5 w-5"
                   height="1em"
                   width="1em"
                   xmlns="/image/twiter.jpg"
                 >
                   <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                 </svg>
               </a>
               <a
                 target="_blank"
                 className="instagram flex h-8 w-8 items-center justify-center rounded-full text-white"
                 href="https://instagram.com/KamranTessoriPk"
               >
                 <svg
                   stroke="currentColor"
                   fill="currentColor"
                   stroke-width="0"
                   viewBox="0 0 448 512"
                   className="h-5 w-5"
                   height="1em"
                   width="1em"
                   xmlns="/image/instagram.jpg"
                 >
                   <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                 </svg>
               </a>
               <a
                 target="_blank"
                 className="flex h-8 w-8 items-center justify-center rounded-full bg-[#171515] text-white"
                 href="https://tiktok.com/@KamranTessoriPk"
               >
                 <svg
                   stroke="currentColor"
                   fill="currentColor"
                   stroke-width="0"
                   viewBox="0 0 448 512"
                   className="h-5 w-5"
                   height="1em"
                   width="1em"
                   xmlns="/image/tiktok.jpg"
                 >
                   <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"></path>
                 </svg>
               </a>
             </div>
             <a
               className="mt-4 flex items-center py-1 text-main underline"
               target="_blank"
               href="mailto:education@governorsindh.com"
             >
               <div className="mr-3 h-6 w-6">
                 <svg
                   stroke="currentColor"
                   fill="currentColor"
                   stroke-width="0"
                   viewBox="0 0 1024 1024"
                   className="h-6 w-6 text-main"
                   height="1em"
                   width="1em"
                   xmlns="/image/msg.jpg"
                 >
                   <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"></path>
                 </svg>
               </div>
               education@governorsindh.com
             </a>
           </div>
         </div>
       </div>
     </div>
   </div>
    </div>
  );
}
