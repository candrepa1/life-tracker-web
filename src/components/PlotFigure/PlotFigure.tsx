import { plot, PlotOptions } from "@observablehq/plot";
import { useEffect, useRef } from "react";

const PlotFigure = ({ options }: { options: PlotOptions }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (options) {
      const plotElement = plot(options);
      if (containerRef.current) {
        containerRef.current.append(plotElement);
      }

      return () => plotElement.remove();
    }
  }, [options]);

  return <div ref={containerRef} />;
};

export default PlotFigure;
