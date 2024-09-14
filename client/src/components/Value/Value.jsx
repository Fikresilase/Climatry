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
    <section className="bg-gray-100 py-16">
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">What is Climatery?</h2>
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
            A Comprehensive Glocal Data-Driven Machine Learning Model for Multi-Hazard Prediction and Climate Disaster Risk Management
          </h2>
        <p className="text-lg text-gray-600 mx-auto max-w-4xl">
          Climatery is an ongoing research project focused on revolutionizing disaster prediction. It aims to integrate real-time satellite data with advanced data analytics and machine learning to forecast multi-hazard disasters on a global scale. Traditional models often face challenges in merging global data streams and predicting complex climate phenomena, but Climatery seeks to address these limitations.
        </p>
      </div>
      <div className="bg-white text-center rounded-lg shadow-lg p-8">
        <p className="text-lg text-gray-700 mb-6">
          This innovative system continuously collects and analyzes satellite data from around the world, creating a comprehensive framework that monitors various climate factors, such as precipitation, wind patterns, soil density, and vegetation coverage. By examining these interrelated environmental conditions, Climatery can predict cascading disasters, such as drought-induced wildfires followed by landslides from heavy rains.
        </p>
        <p className="text-lg text-gray-700">
          The project is actively evolving as researchers work to refine its capabilities. Current efforts are focused on enhancing data integration, expanding the range of disaster types monitored, and improving the system’s ability to deliver actionable insights for disaster prevention and resource management.
        </p>
      </div>
    </div>
  </section>
  

  );
};

export default Value;
