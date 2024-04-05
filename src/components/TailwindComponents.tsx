import tw from "tailwind-styled-components";

export const Container = tw.div`
    max-w-[1200px]
    m-auto
`;

export const Section = tw.section<{ $noXPadding: boolean }>`
${(p) => (p.$noXPadding ? "px-0" : "px-4")}
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

export const StyledH1 = tw.h1`
text-3xl 
md:text-4xl 
font-bold
`;

export const StyledH2 = tw.h2`
text-2xl 
font-bold 
mb-4
`;
