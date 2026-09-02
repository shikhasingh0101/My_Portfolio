 "use client";

import { motion } from "framer-motion";
import { ArrowDown, BrainCircuit, Database, Globe2, Server } from "lucide-react";

const nodes = [
  { title: "USER", icon: Globe2 },
  { title: "FRONTEND", icon: Globe2 },
  { title: "API", icon: Server },
  { title: "DATABASE", icon: Database },
  { title: "ML MODEL", icon: BrainCircuit },
  { title: "INSIGHT", icon: BrainCircuit },
];

export default function AboutSystem() {
  return (
    <div className="system-map">
      {nodes.map((node, i) => {
        const Icon = node.icon;
        return (
          <div className="system-row" key={node.title}>
            <motion.div className="system-node" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * .08 }}>
              <Icon size={15} />
              <span>{node.title}</span>
            </motion.div>
            {i < nodes.length - 1 && <motion.div className="system-arrow" initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ delay: i * .08 + .1 }}><ArrowDown size={15} /></motion.div>}
          </div>
        );
      })}
    </div>
  );
}
