'use client'
import React, { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './ui/accordian';
import { usePathname } from 'next/navigation';





interface SidebarItem {
  id: number;
  title: string;
  path?: string; // Optional for parent items
  children?: SidebarItem[]; // Optional for nested items
}

interface SidebarSection {
  id: number;
  title: string;
  children: SidebarItem[];
}

interface SidebarProps {
  content: SidebarSection[];
}


const sidebarVariants = {
  open: { width: '300px', opacity: 1, x: 0 },
  closed: { width: '0px', opacity: 0, x: '-100%' },
};

export default function Sidebar({ content }: SidebarProps) {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);
  const pathname = usePathname();
  const sidebarRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setSidebarOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="flex py-4">
      {/* Toggle Button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen ? true : false)}
        className="fixed left-2 top-18 z-50 p-2 bg-gray-800 text-white border-black rounded-lg shadow-lg"
      >
        {sidebarOpen ? '✕' : '☰'}
      </button>

      {/* Sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            ref={sidebarRef}
            initial="closed"
            animate="open"
            exit="closed"
            variants={sidebarVariants}
            className="fixed left-0 top-17 h-screen bg-gray-900 text-white w-[300px] p-4 overflow-y-auto"
          >
            <h2 className="text-xl font-bold mb-4">Workflows</h2>
            <Accordion type="multiple">
              {content.map((section) => (
                <SidebarSectionComponent
                  key={section.id}
                  section={section}
                  pathname={pathname}
                />
              ))}
            </Accordion>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface SidebarSectionComponentProps {
  section: SidebarSection;
  pathname: ReturnType<typeof usePathname>;
}

function SidebarSectionComponent({ section, pathname }: SidebarSectionComponentProps) {
  return (
    <AccordionItem key={section.id} value={section.id}>
      <AccordionTrigger className="flex justify-between items-center w-full p-2 hover:bg-gray-700 rounded-lg">
        <span>{section.title}</span>
        <span>▼</span>
      </AccordionTrigger>
      <AccordionContent className="pl-4">
        {section.children.map((item) => (
          <Link
            key={item.id}
            to={item.path || '#'}
            className={`block p-2 hover:bg-gray-700 rounded-lg ${
              location.pathname === item.path ? 'bg-blue-600' : ''
            }`}
          >
            {item.title}
          </Link>
        ))}
      </AccordionContent>
    </AccordionItem>
  );
}