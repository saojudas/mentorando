import React from 'react';

import Lottie from 'react-lottie';

import successData from '../../assets/success.json';

interface SuccessProps {
  height?: number;
  width?: number;
}

const Success: React.FC<SuccessProps> = ({ height, width }) => {
  return (
    <Lottie
      options={{
        loop: false,
        autoplay: true,
        animationData: successData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
      }}
      height={height || 300}
      width={width || 300}
    />
  );
};

export default Success;
