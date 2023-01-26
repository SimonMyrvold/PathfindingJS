import React from "react";
import Sketch from "react-p5";
import { useState } from 'react';

let nodes = []; // array to hold the nodes
let connections = []; // array to hold the connections between nodes
let numNodes = 50; // Number of nodes to create

export default (props) => {
    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(700, 400).parent(document.getElementById('Gitt'));
        for (let i = 0; i < numNodes; i++) {
            nodes[i] = new Node(p5.random(p5.width), p5.random(p5.height));
        }
        for (let i = 0; i < nodes.length; i++) {
            let connectedNodes = 0;
            while (connectedNodes < 1) {
                let randomNode = p5.floor(p5.random(nodes.length));
                if (randomNode != i && !connections.some(conn => (conn.node1 == nodes[i] && conn.node2 == nodes[randomNode]) || (conn.node2 == nodes[i] && conn.node1 == nodes[randomNode]))) {
                    connections.push(new Connection(nodes[i], nodes[randomNode]));
                    connectedNodes++;
                }
            }
        }
    };

    const draw = (p5) => {
        p5.background(148,163,184);
        for (let i = 0; i < connections.length; i++) {
            p5.line(connections[i].node1.x, connections[i].node1.y, connections[i].node2.x, connections[i].node2.y);
        }
        for (let i = 0; i < nodes.length; i++) {
            p5.ellipse(nodes[i].x, nodes[i].y, 20, 20);
            if (nodes[i].selected) {
                nodes[i].x = p5.mouseX;
                nodes[i].y = p5.mouseY;
            }
        }

    };

    class Node {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.selected = false;
        }
    }

    class Connection {
        constructor(node1, node2) {
            this.node1 = node1;
            this.node2 = node2;
        }
    }

    p5.mousePressed = () => {
        for (let i = 0; i < nodes.length; i++) {
            let d = p5.dist(p5.mouseX, p5.mouseY, nodes[i].x, nodes[i].y);
            if (d < 10) {
                nodes[i].selected = true;
            }
        }
    }

    p5.mouseReleased = () => {
        for (let i = 0; i < nodes.length; i++) {
            nodes[i].selected = false;
        }
    }

    return <Sketch setup={setup} draw={draw} />;

};