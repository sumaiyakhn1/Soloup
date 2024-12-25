// // components/FadeInSection.js
// import React from 'react';
// import { useInView } from '../myComponents/Hooks/observe';

// const FadeInSection = ({ children }) => {
//   const [ref, isInView] = useInView({ threshold: 0.1 });

//   return (
//     <div
//       ref={ref}
//       className={`transform transition-all duration-700 ${
//         isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
//       }`}
//     >
//       {children}
//     </div>
//   );
// };

// export default FadeInSection;
