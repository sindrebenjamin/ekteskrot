import tw from "tailwind-styled-components";

export const Container = tw.div`
    max-w-[1200px]
    m-auto
`;

export const Section = tw.section`
px-4 
py-12
sm:px-6


`;

export const Textarea = tw.textarea`
placeholder-gray-400
rounded-sm
border
border-gray-300
p-3
focus:outline-none
focus:border-amber-500
`;

export const Input = tw.input`
placeholder-gray-400
rounded-sm
border
border-gray-300
p-3
focus:outline-none
focus:border-amber-500
`;
