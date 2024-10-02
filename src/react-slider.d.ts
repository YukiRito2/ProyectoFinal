declare module 'react-slider' {
    import * as React from 'react';
  
    interface SliderProps {
      value: number;
      onChange: (value: number) => void;
      max?: number;
      min?: number;
      step?: number;
      className?: string;
      thumbClassName?: string;
      trackClassName?: string;
      renderThumb?: (props: any, state: any) => React.ReactNode;
    }
  
    const ReactSlider: React.FC<SliderProps>;
  
    export default ReactSlider;
  }
  