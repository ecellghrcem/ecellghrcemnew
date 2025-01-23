"use client";

import React, { useState, useCallback } from "react";
import {
  Linkedin,
  Mail,
  Code,
  Megaphone,
  Palette,
  Calendar,
  PenTool,
  DollarSign,
  Users,
  Github,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { Teams, TeamMember } from "../../libs/team-data";
import Particles from "react-particles";
import { type Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { tsParticles } from "@tsparticles/engine";

const teamIcons: { [key in keyof Teams]: JSX.Element } = {
  Core: <Users className="w-6 h-6" />,
  Tech: <Code className="w-6 h-6" />,
  Design: <Palette className="w-6 h-6" />,
  Finance: <DollarSign className="w-6 h-6" />,
  "Public Relations": <Megaphone className="w-6 h-6" />,
  "Event Management": <Calendar className="w-6 h-6" />,
  Content: <PenTool className="w-6 h-6" />,
};

interface TeamClientProps {
  initialTeams: Teams;
}

export default function TeamClient({ initialTeams }: TeamClientProps) {
  const [activeTeam, setActiveTeam] = useState<keyof Teams>("Core");
  const [teams] = useState<Teams>(initialTeams);
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(tsParticles);
  }, []);

  return (
    <div className="min-h-screen pt-16 text-white relative overflow-hidden">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "#000000",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />

      <section className="py-20 relative z-10">
        <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <motion.h1
            className="mb-6 text-4xl font-bold"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            Our {activeTeam} Team
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", delay: 0.2 }}
          >
            Meet the passionate individuals behind E-CELL 📈
          </motion.p>
        </div>
      </section>

      <section className="py-16 relative z-10">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <motion.nav
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", delay: 0.4 }}
          >
            {(Object.keys(teams) as Array<keyof Teams>).map((teamName) => (
              <motion.button
                key={teamName}
                onClick={() => setActiveTeam(teamName)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center space-x-2 ${
                  activeTeam === teamName
                    ? "bg-orange-500 text-white shadow-lg scale-105"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white hover:scale-105"
                }`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                {teamIcons[teamName]}
                <span>{teamName}</span>
              </motion.button>
            ))}
          </motion.nav>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTeam}
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
            >
              {teams[activeTeam].map((member: TeamMember, index: number) => (
                <motion.div
                  key={member.id}
                  className="overflow-hidden bg-gray-800 shadow-xl rounded-xl mx-auto w-full max-w-[280px]"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                >
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="object-cover w-full h-64"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-900 to-transparent"></div>
                    <div className="absolute text-white bottom-4 left-4">
                      <motion.h3
                        className="mb-1 text-2xl font-bold"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        {member.name}
                      </motion.h3>
                      <motion.p
                        className="font-medium text-gray-300"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      >
                        {member.role}
                      </motion.p>
                    </div>
                  </div>
                  <div className="p-6">
                    <motion.p
                      className="mb-4 text-gray-300"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      {member.bio}
                    </motion.p>
                    <motion.div
                      className="flex space-x-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      {member.github && (
                        <motion.a
                          href={member.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Github className="h-5 w-5" />
                        </motion.a>
                      )}
                      {member.linkedin && (
                        <motion.a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Linkedin className="h-5 w-5" />
                        </motion.a>
                      )}
                      {member.mail && (
                        <motion.a
                          href={`mailto:${member.mail}`}
                          className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Mail className="h-5 w-5" />
                        </motion.a>
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
