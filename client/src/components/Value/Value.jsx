import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import {
  MdOutlineArrowDropDown,
  MdOutlineArrowDropDownCircle,
} from "react-icons/md";
import data from "../../utils/accordion.jsx";
import "./Value.css";
// Demo styles, see 'Styles' section below for some notes on use.

const Value = () => {
  return (
    <section className="bg-gray-50 py-20">
  <div className="max-w-6xl mx-auto px-6">
    <div className="text-center mb-8">
    <h2 className="text-4xl font-semibold text-gray-900 mb-6">
        What is Climatery?
      </h2>
      <h2 className="text-3xl font-semibold text-gray-900 mb-6">
        A Comprehensive Glocal Data-Driven Machine Learning Model for Multi-Hazard Prediction and Climate Disaster Risk Management
      </h2>
      <p className="text-lg text-gray-700 leading-relaxed mx-auto max-w-4xl">
        Climatery is an ongoing research project focused on revolutionizing disaster prediction and climate risk management through an innovative, large-scale system. By integrating real-time satellite data with advanced data analytics and machine learning, Climetry aims to forecast multi-hazard disasters on a global scale.
      </p>
    </div>
    <div className="bg-white rounded-lg shadow-xl p-10">
      <p className="text-lg text-gray-800 leading-relaxed mb-8">
        This sophisticated system continuously collects and analyzes satellite data from around the world, constructing a comprehensive framework that monitors various climate factors such as precipitation, wind patterns, soil density, and vegetation coverage. By examining these interconnected environmental conditions, Climatery can predict cascading disasters, including drought-induced wildfires followed by landslides from heavy rains.
      </p>
      <p className="text-lg text-gray-800 leading-relaxed">
        As an evolving research project, Climetry is focused on refining its capabilities. Current efforts aim to enhance data integration, expand the range of disaster types monitored, and improve the system’s ability to deliver actionable insights for disaster prevention and resource management. The project represents a significant step forward in global and local disaster preparedness.
      </p>
    </div>
  </div>
</section>

  );
};

export default Value;
