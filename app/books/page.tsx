"use client";
import React, { useCallback } from 'react';
import ReactFlow, { useNodesState, useEdgesState, Controls, Background, addEdge } from 'reactflow';
import 'reactflow/dist/style.css';

import { BookImg } from "./components/BookImg";

import homegoing from "../public/assets/homegoing.jpg"
import murakami from "../public/assets/murakami.jpg"
import tomorrow from "../public/assets/tomorrow.jpg"
import demon from "../public/assets/demon.jpg"
import running from "../public/assets/running.jpg"
import catcher from "../public/assets/catcher.jpg"
import intimacies from "../public/assets/intimacies.jpg"
import small from "../public/assets/small.jpg"
import moth from "../public/assets/moth.jpg"


const bookArr = [
  homegoing,
  murakami,
  tomorrow,
  demon,
  running,
  catcher,
  intimacies,
  small,
  moth
];

const Books = () => {
  // Convert bookArr to nodes
  const initialNodes = bookArr.map((book, index) => ({
    id: String(index),
    position: { x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight },
    data: { label: <BookImg book={book} /> }
  }));

  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState([]);

  const onConnect = useCallback((params: any) => setEdges((eds) => addEdge(params, eds)), []);

  return (
    <div style={{ height: '100vh' }}>
      <h1 className="text-center mt-8">Recent reads</h1>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <Controls />
        <Background gap={12} size={1} />
      </ReactFlow>
    </div>
  );
};

export default Books;
function setEdges(arg0: (eds: any) => any): any {
  throw new Error('Function not implemented.');
}

