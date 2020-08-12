import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { select } from "d3";
import useResizeObserver from 'helpers/useResizeObserver';
//import { Container } from './box.css';

function Circle(data) {
  const svgRef = useRef();
  const wrapperRef = useRef();
  const dimensions = useResizeObserver(wrapperRef);

  useEffect(() => {
  // d3 stuff goes here
  const svg = select(svgRef.current);
  const { width, height } =
    dimensions || wrapperRef.current.getBoundingClientRect();

  svg
    .append("circle")
    .attr("cx", 150)
    .attr("cy", 30)
    .attr("r", 20);

  }, [data, dimensions])

  return (
    <div ref={wrapperRef} style={{ marginBottom: "2rem" }}>
      <svg ref={svgRef} />
    </div>
  )
}

Circle.propTypes = {
  data: PropTypes.node.isRequired,
};

export default Circle;
