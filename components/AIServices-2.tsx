// "use client";
// import { cn } from "@/lib/utils";
// import React from "react";
// import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
// import {
//     IconBoxAlignRightFilled,
//     IconClipboardCopy,
//     IconFileBroken,
//     IconSignature,
//     IconTableColumn,
// } from "@tabler/icons-react";
// import { motion } from "framer-motion";
// import Image from "next/image";

// const BentoGridThirdDemo: React.FC = () => {
//     return (
//         <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
//             {items.map((item, i) => (
//                 <BentoGridItem
//                     key={i}
//                     title={item.title}
//                     description={item.description}
//                     header={item.header}
//                     className={cn("[&>p:text-lg]", item.className)}
//                     icon={item.icon}
//                 />
//             ))}
//         </BentoGrid>
//     );
// }

// const Skeleton: React.FC = () => (
//     <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
// );

// const SkeletonOne: React.FC = () => {
//     const variants = {
//         initial: {
//             x: 0,
//         },
//         animate: {
//             x: 10,
//             rotate: 5,
//             transition: {
//                 duration: 0.2,
//             },
//         },
//     };
//     const variantsSecond = {
//         initial: {
//             x: 0,
//         },
//         animate: {
//             x: -10,
//             rotate: -5,
//             transition: {
//                 duration: 0.2,
//             },
//         },
//     };

//     return (
//         <motion.div
//             initial="initial"
//             whileHover="animate"
//             className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
//         >
//             <motion.div
//                 variants={variants}
//                 className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white dark:bg-black"
//             >
//                 <div className="h-6 w-6 rounded-full bg-gradient-to-r from-green-400 to-green-600 flex-shrink-0" />
//                 <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
//             </motion.div>
//             <motion.div
//                 variants={variantsSecond}
//                 className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
//             >
//                 <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
//                 <div className="h-6 w-6 rounded-full bg-gradient-to-r from-green-300 to-green-500 flex-shrink-0" />
//             </motion.div>
//             <motion.div
//                 variants={variants}
//                 className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white dark:bg-black"
//             >
//                 <div className="h-6 w-6 rounded-full bg-gradient-to-r from-green-400 to-green-600 flex-shrink-0" />
//                 <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
//             </motion.div>
//         </motion.div>
//     );
// };

// const SkeletonTwo: React.FC = () => {
//     const variants = {
//         initial: {
//             width: 0,
//         },
//         animate: {
//             width: "100%",
//             transition: {
//                 duration: 0.2,
//             },
//         },
//         hover: {
//             width: ["0%", "100%"],
//             transition: {
//                 duration: 2,
//             },
//         },
//     };
//     const arr = new Array(6).fill(0);
//     return (
//         <motion.div
//             initial="initial"
//             animate="animate"
//             whileHover="hover"
//             className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
//         >
//             {arr.map((_, i) => (
//                 <motion.div
//                     key={`skeleton-two-${i}`}
//                     variants={variants}
//                     style={{
//                         maxWidth: `${Math.random() * (100 - 40) + 40}%`,
//                     }}
//                     className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-neutral-100 dark:bg-black w-full h-4"
//                 ></motion.div>
//             ))}
//         </motion.div>
//     );
// };

// const SkeletonThree: React.FC = () => {
//     const variants = {
//         initial: {
//             backgroundPosition: "0 50%",
//         },
//         animate: {
//             backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
//         },
//     };
//     return (
//         <motion.div
//             initial="initial"
//             animate="animate"
//             variants={variants}
//             transition={{
//                 duration: 5,
//                 repeat: Infinity,
//                 repeatType: "reverse",
//             }}
//             className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
//             style={{
//                 background:
//                     "linear-gradient(-45deg, #199e75, #0f8c68, #0c7056, #0c5945)",
//                 backgroundSize: "400% 400%",
//             }}
//         >
//             <motion.div className="h-full w-full rounded-lg"></motion.div>
//         </motion.div>
//     );
// };

// const SkeletonFour: React.FC = () => {
//     const first = {
//         initial: {
//             x: 20,
//             rotate: -5,
//         },
//         hover: {
//             x: 0,
//             rotate: 0,
//         },
//     };
//     const second = {
//         initial: {
//             x: -20,
//             rotate: 5,
//         },
//         hover: {
//             x: 0,
//             rotate: 0,
//         },
//     };
//     return (
//         <motion.div
//             initial="initial"
//             animate="animate"
//             whileHover="hover"
//             className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
//         >
//             <motion.div
//                 variants={first}
//                 className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
//             >
//                 <Image
//                     src="https://images.unsplash.com/photo-1717579502736-7e28e27eef64?q=80&w=3987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                     alt="Data analysis"
//                     height={100}
//                     width={100}
//                     className="rounded-full h-10 w-10"
//                 />
//                 <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
//                     Analyze historical data
//                 </p>
//                 <p className="border border-green-500 bg-green-100 dark:bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
//                     Step 1
//                 </p>
//             </motion.div>
//             <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
//                 <Image
//                     src="https://images.unsplash.com/photo-1693252258249-5ef8b8b1a0ed?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                     alt="AI processing"
//                     height={100}
//                     width={100}
//                     className="rounded-full h-10 w-10"
//                 />
//                 <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
//                     Apply AI algorithms
//                 </p>
//                 <p className="border border-green-500 bg-green-100 dark:bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
//                     Step 2
//                 </p>
//             </motion.div>
//             <motion.div
//                 variants={second}
//                 className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
//             >
//                 <Image
//                     src="https://images.unsplash.com/photo-1703750960156-b8e765f5543c?q=80&w=3880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                     alt="Strategic decision"
//                     height={100}
//                     width={100}
//                     className="rounded-full h-10 w-10"
//                 />
//                 <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
//                     Make informed decisions
//                 </p>
//                 <p className="border border-green-500 bg-green-100 dark:bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
//                     Step 3
//                 </p>
//             </motion.div>
//         </motion.div>
//     );
// };

// const SkeletonFive: React.FC = () => {
//     const variants = {
//         initial: {
//             x: 0,
//         },
//         animate: {
//             x: 10,
//             rotate: 5,
//             transition: {
//                 duration: 0.2,
//             },
//         },
//     };
//     const variantsSecond = {
//         initial: {
//             x: 0,
//         },
//         animate: {
//             x: -10,
//             rotate: -5,
//             transition: {
//                 duration: 0.2,
//             },
//         },
//     };

//     return (
//         <motion.div
//             initial="initial"
//             whileHover="animate"
//             className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
//         >
//             <motion.div
//                 variants={variants}
//                 className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2 items-start space-x-2 bg-white dark:bg-black"
//             >
//                 <Image
//                     src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=100&h=100&fit=crop&crop=faces"
//                     alt="Automation"
//                     height={100}
//                     width={100}
//                     className="rounded-full h-10 w-10"
//                 />
//                 <p className="text-xs text-neutral-500">
//                     Our AI-driven automation solutions can streamline your business processes,
//                     reducing manual work and increasing efficiency...
//                 </p>
//             </motion.div>
//             <motion.div
//                 variants={variantsSecond}
//                 className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
//             >
//                 <p className="text-xs text-neutral-500">Boost productivity with AI.</p>
//                 <div className="h-6 w-6 rounded-full bg-gradient-to-r from-green-400 to-purple-600 flex-shrink-0" />
//             </motion.div>
//         </motion.div>
//     );
// };

// const items = [
//     {
//         title: "AI-Powered Business Analytics",
//         description: (
//             <span className="text-sm">
//                 Harness the power of AI to gain <span className="text-blue-500">actionable insights</span> from your business data.
//             </span>
//         ),
//         header: <SkeletonOne />,
//         className: "md:col-span-1",
//         icon: <IconClipboardCopy className="h-4 w-4 text-blue-500" />,
//     },
//     {
//         title: "Automated Customer Service",
//         description: (
//             <span className="text-sm">
//                 Implement AI chatbots to handle <span className="text-green-500">customer inquiries 24/7</span>.
//             </span>
//         ),
//         header: <SkeletonTwo />,
//         className: "md:col-span-1",
//         icon: <IconFileBroken className="h-4 w-4 text-green-500" />,
//     },
//     {
//         title: "Predictive Marketing",
//         description: (
//             <span className="text-sm">
//                 Use AI to <span className="text-purple-500">predict customer behavior</span> and optimize your marketing campaigns.
//             </span>
//         ),
//         header: <SkeletonThree />,
//         className: "md:col-span-1",
//         icon: <IconSignature className="h-4 w-4 text-purple-500" />,
//     },
//     {
//         title: "AI-Enhanced Decision Making",
//         description: (
//             <span className="text-sm">
//                 Leverage AI algorithms to support <span className="bg-gradient-to-r from-blue-400 to-green-500 bg-clip-text text-transparent">strategic business decisions</span>.
//             </span>
//         ),
//         header: <SkeletonFour />,
//         className: "md:col-span-2",
//         icon: <IconTableColumn className="h-4 w-4 text-blue-400" />,
//     },
//     {
//         title: "Intelligent Process Automation",
//         description: (
//             <span className="text-sm">
//                 Streamline your business processes with <span className="bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-transparent">AI-driven automation solutions</span>.
//             </span>
//         ),
//         header: <SkeletonFive />,
//         className: "md:col-span-1",
//         icon: <IconBoxAlignRightFilled className="h-4 w-4 text-green-400" />,
//     },
// ];

// export default BentoGridThirdDemo;