"use client"

import React from "react"
import { motion } from "framer-motion"

interface TimelineItem {
  date: string
  title: string
  description: string
}

const timelineItems: TimelineItem[] = [
  {
    date: "January 2023",
    title: "Club Founding",
    description: "Our club was officially established, bringing together passionate individuals.",
  },
  {
    date: "March 2023",
    title: "First Workshop",
    description: "We hosted our inaugural workshop on entrepreneurship basics.",
  },
  {
    date: "June 2023",
    title: "Summer Hackathon",
    description: "A 48-hour coding marathon that resulted in innovative projects.",
  },
  {
    date: "September 2023",
    title: "Guest Speaker Series",
    description: "Launched a monthly series featuring successful entrepreneurs and industry leaders.",
  },
  {
    date: "December 2023",
    title: "Annual Pitch Competition",
    description: "Members presented their startup ideas to a panel of judges and investors.",
  },
]

export function ActivityTimeline() {
  return (
    <div className="container mx-auto w-full h-full bg-inherit text-white">
      <div className="relative wrap overflow-hidden p-10 h-full">
        <div className="border-2-2 absolute border-opacity-20 border-gray-300 h-full border left-1/2"></div>
        {timelineItems.map((item, index) => (
          <motion.div
            className={`mb-8 flex justify-between items-center w-full ${
              index % 2 === 0 ? "flex-row-reverse" : "flex-row"
            }`}
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="order-1 w-5/12"></div>
            <motion.div
              className="z-20 flex items-center order-1 bg-gradient-to-br from-gray-900 via-gray-800 to-black shadow-xl w-8 h-8 rounded-full"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <h1 className="mx-auto font-semibold text-lg text-white">{index + 1}</h1>
            </motion.div>
            <motion.div
              className="order-1 bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-lg shadow-xl w-5/12 px-6 py-4"
              whileHover={{ scale: 1.03, boxShadow: "0px 0px 8px rgb(255,255,255)" }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <motion.h3
                className="mb-3 font-bold text-white text-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {item.title}
              </motion.h3>
              <motion.p
                className="text-sm leading-snug tracking-wide text-gray-300 text-opacity-100"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {item.description}
              </motion.p>
              <motion.p
                className="mt-2 text-xs text-gray-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {item.date}
              </motion.p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

