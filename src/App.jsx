import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Nav from './components/main/nav'
import Hero from './components/hero'
import Websites from './components/websites'
import dribbe from '/dribble.png'
import Google from '/google.png'
import Openai from '/openai.png'
import Netlify from '/netlify.png'
import Tailwind from '/tailwind.png'
import Awwwards from '/awwwards.png'
import Github from '/github.png'
import Remix_icon from '/Remixicon.png'
import Color_palettes from '/color_palettes.png'
import Code_pen from '/code_pen.png'
import GoDaddy from '/image.png'
import Plick from '/Plick.png'
import Npm from '/npm.png'
import { name } from 'ejs'

function App() {
  const [count, setCount] = useState(0)
  const webdata = [
    // =========Dribble.com <==================
    {
      name:'Dribble.com',
      link:{
        _1:"https://dribbble.com/"
      },
      img:dribbe,
      des:'Dribble is an online platform for designers to showcase their portfolios, connect with other creatives, and find job opportunities. It serves as a community hub where designers share their work, receive feedback, and stay updated on industry trends. Dribble offers various features such as job postings, design challenges, and networking events, making it a valuable resource for professionals in the design field.',
      theam:'',
      style:'flex-row',
      colorstyle:'bg-[#FAA667]',
      maincolorstyle:'bg-[#7B51C5]/60',
    },
    // =========Google.com >==================
    {
      name:'Google.com',
      link:{
        _1:"https://www.google.com/"
      },
      img:Google,
      des:"Google is a multinational technology company known for its search engine, which processes billions of searches daily. Founded in 1998 by Larry Page and Sergey Brin, Google has expanded its services to include email (Gmail), cloud storage (Google Drive), productivity tools (Google Docs), advertising services, hardware (Pixel phones, Nest devices), and more. It's one of the world's most valuable brands and a dominant force in the tech industry.",
      theam:'',
      style:'flex-row-reverse',
      colorstyle:'bg-[#202124] text-[#FFFFFF]',
      maincolorstyle:'bg-[#202124]/60',
    },
    // =========Chatgpt.com <==================
    {
      name:'OpenAI.com',
      link:{
        _1:"https://chat.openai.com/"
      },
      img:Openai,
      des:'ChatGPT is an artificial intelligence language model developed by OpenAI. It utilizes a deep learning architecture called GPT (Generative Pre-trained Transformer) to understand and generate human-like text based on the input it receives. ChatGPT is trained on vast amounts of text data and can perform a variety of natural language processing tasks, including answering questions, generating creative content, and engaging in conversation.',
      theam:'',
      style:'flex-row',
      colorstyle:'bg-[#060A07] text-[#FDFDFD]',
      maincolorstyle:'bg-[#111514]/60',
    },
    // =========Figma.com >==================
    {
      name:'Figma.com',
      link:{
        _1:"https://www.figma.com/"
      },
      img:'https://cdn.dribbble.com/users/1368014/screenshots/17364085/media/e59e380b07ee5e45e6a39ff16c764854.jpg?resize=1000x750&vertical=center',
      des:"Figma is a web-based design tool used for collaborative interface design and prototyping. It allows multiple designers to work on the same project simultaneously, facilitating real-time collaboration and feedback. Figma features include vector-based drawing tools, prototyping capabilities, and design system management. It's popular among UI/UX designers for its ease of use, versatility, and cloud-based storage, enabling seamless collaboration regardless of team location.",
      theam:'',
      style:'flex-row-reverse',
      colorstyle:'bg-[#594C98] text-[#FDFDFD]',
      maincolorstyle:'bg-[#594C98]/60',
    },
    // ========= AD ~==================
    {
      name:'Plick.netlify.com',
      link:{
        _1:"https://plick.netlify.com"
      },
      img:Plick,
      des:"Netlify is a cloud-based platform that provides web hosting and serverless backend services for static websites and web applications. It offers features like continuous deployment, automated builds, and CDN (Content Delivery Network) integration to ensure fast and reliable performance. Netlify simplifies the development process by allowing developers to deploy their projects directly from Git repositories and manage their entire web infrastructure through an intuitive dashboard.",
      theam:'',
      style:'flex-col',
      colorstyle:'bg-[#F99A7F] text-[#1F1F1F]',
      maincolorstyle:'bg-[#F99A7F]/60',
      target:'_blank',
    },
    // =========Netlify.com <==================
    {
      name:'Netlify.com',
      link:{
        _1:"https://www.netlify.com"
      },
      img:Netlify,
      des:"Netlify is a cloud-based platform that provides web hosting and serverless backend services for static websites and web applications. It offers features like continuous deployment, automated builds, and CDN (Content Delivery Network) integration to ensure fast and reliable performance. Netlify simplifies the development process by allowing developers to deploy their projects directly from Git repositories and manage their entire web infrastructure through an intuitive dashboard.",
      theam:'',
      style:'flex-row',
      colorstyle:'bg-[#1B3390] text-[#FDFDFD]',
      maincolorstyle:'bg-[#1B3390]/60',
    },
    // =========Tailwindcss.com >==================
    {
      name:'Tailwindcss.com',
      link:{
        _1:"https://tailwindcss.com/"
      },
      img:Tailwind,
      des:"Tailwind CSS is a utility-first CSS framework that streamlines the process of building modern web interfaces. It provides a set of pre-designed utility classes that can be applied directly to HTML elements, eliminating the need for writing custom CSS. With Tailwind, developers can rapidly create responsive layouts and design components by applying classes such as spacing, typography, colors, and more. This approach offers flexibility and consistency, making it popular among developers for its efficiency and scalability.",
      theam:'',
      style:'flex-row-reverse',
      colorstyle:'bg-[#07273A] text-[#FDFDFD]',
      maincolorstyle:'bg-[#07273A]/60',
    },
    // =========awwwards.com <==================
    {
      name:'Awwwards.com',
      link:{
        _1:"https://www.awwwards.com/"
      },
      img:Awwwards,
      des:"Awwwards is a professional web design and development competition platform that showcases and recognizes outstanding digital work from around the world. It features a curated collection of websites that demonstrate excellence in design, creativity, and innovation. Awwwards organizes conferences, workshops, and networking events to connect designers, developers, and digital professionals. It serves as a valuable resource for inspiration and learning within the web design community.",
      theam:'',
      style:'flex-row',
      colorstyle:'bg-[#B81E51] text-[#FDFDFD]',
      maincolorstyle:'bg-[#B81E51]/60',
    },
    // =========Github.com >==================
    {
      name:'Github.com',
      link:{
        _1:"https://www.github.com/"
      },
      img:Github,
      des:"GitHub is a web-based platform and collaboration tool used by developers for version control and project management. It allows users to host and review code, manage projects, and collaborate with others through features like pull requests, issues, and wikis. GitHub utilizes Git, a distributed version control system, to track changes to codebases. It's widely used for open-source development, team collaboration, and software development workflows.",
      theam:'',
      style:'flex-row-reverse',
      colorstyle:'bg-[#151B23] text-[#FDFDFD]',
      maincolorstyle:'bg-[#151B23]/60',
    },
    // =========Remix icon.com <==================
    {
      name:'Remix Icon.com',
      link:{
        _1:"https://remixicon.com/"
      },
      img:Remix_icon,
      des:"Remix Icon is a free open-source icon library featuring a vast collection of high-quality icons for use in web projects, applications, and design work. These icons are designed to be visually appealing, versatile, and easily customizable. Remix Icon offers icons in various categories, including social media, interface, business, and more. It's popular among designers and developers for its extensive library and flexible licensing, making it a valuable resource for creating engaging user interfaces.",
      theam:'',
      style:'flex-row',
      colorstyle:'bg-[#2E333B] text-[#FDFDFD]',
      maincolorstyle:'bg-[#2E333B]/60',
    },
    // =========Color Hunt.com >==================
    {
      name:'Color Hunt.co',
      link:{
        _1:"https://colorhunt.co/"
      },
      img:Color_palettes,
      des:"Color Hunt is a platform that provides curated color palettes for designers and developers to use in their projects. It offers a wide range of color combinations created by a community of designers, sorted by popularity and various themes. Users can browse through the palettes, search for specific colors, and even create and share their own color schemes. Color Hunt serves as a valuable resource for inspiration and finding the perfect color palette for design work.",
      theam:'',
      style:'flex-row-reverse',
      colorstyle:'bg-[#A99279] text-[#FDFDFD]',
      maincolorstyle:'bg-[#A99279]/60',
    },
    // =========code pen.com <==================
    {
      name:'Code pen.io',
      link:{
        _1:"https://codepen.io/"
      },
      img:Code_pen,
      des:"Remix Icon is a free open-source icon library featuring a vast collection of high-quality icons for use in web projects, applications, and design work. These icons are designed to be visually appealing, versatile, and easily customizable. Remix Icon offers icons in various categories, including social media, interface, business, and more. It's popular among designers and developers for its extensive library and flexible licensing, making it a valuable resource for creating engaging user interfaces.",
      theam:'',
      style:'flex-row',
      colorstyle:'bg-[#1E1F26] text-[#FDFDFD]',
      maincolorstyle:'bg-[#1E1F26]/60',
    },
    // =========Color Hunt.com  >==================
    {
      name:'Godaddy.com',
      link:{
        _1:"https://www.godaddy.com/en-in"
      },
      img:GoDaddy,
      des:"GoDaddy is a well-known internet domain registrar and web hosting company. It offers domain registration services, allowing individuals and businesses to purchase and manage domain names for their websites. Additionally, GoDaddy provides web hosting solutions, website builders, email hosting, and various other web services. It's known for its user-friendly interface, affordable pricing, and customer support, catering to a wide range of users, from beginners to experienced webmasters.",
      theam:'',
      style:'flex-row-reverse',
      colorstyle:'bg-[#0A3D3B] text-[#FDFDFD]',
      maincolorstyle:'bg-[#0A3D3B]/60',
    },
    // =========npmjs.com <==================
    {
      name:'npmjs.com',
      link:{
        _1:"https://www.npmjs.com/"
      },
      img:'https://cdn.dribbble.com/users/3250878/screenshots/8838116/media/6c5c4fab3525127a56f0c96753b5947f.jpg?resize=1000x750&vertical=center',
      des:"NPM, short for Node Package Manager, is a widely used package manager for JavaScript programming language. It is primarily used to manage dependencies for Node.js projects, allowing developers to easily install, update, and manage third-party libraries and tools. NPM also provides a platform for developers to publish and share their own packages, making it a central hub for the JavaScript ecosystem. It's a crucial tool for modern web development, enabling efficient project management and collaboration.",
      theam:'',
      style:'flex-row',
      colorstyle:'bg-[#A14156] text-[#FDFDFD]',
      maincolorstyle:'bg-[#A14156]/60',
    },

    // =========Biz-growth.com  >==================
    {
      name:'biz-growth.netlify.com',
      link:{
        _1:"https://www.godaddy.com/en-in"
      },
      img:'https://www.pracharexpert.com/assets/images/image/homepage.png',
      des:"GoDaddy is a well-known internet domain registrar and web hosting company. It offers domain registration services, allowing individuals and businesses to purchase and manage domain names for their websites. Additionally, GoDaddy provides web hosting solutions, website builders, email hosting, and various other web services. It's known for its user-friendly interface, affordable pricing, and customer support, catering to a wide range of users, from beginners to experienced webmasters.",
      theam:'',
      style:'flex-row-reverse',
      colorstyle:'bg-[#E5BD54] text-[#FDFDFD]',
      maincolorstyle:'bg-[#E5BD54]/60',
    },

    // =========testing here <==================
    {
      name:'testing',
      link:{},
      style:'hidden',
      mainstyle2:'h-96 bg-red-400 rounded-xl overflow-hidden p-5',
      mainstyle2data:<div className="h-5 bg-yellow-500"></div>,
    },
  ]

  return (
    <>
    <Nav/>
    <Hero/>
    <div className='flex items-center justify-center'><h1 className='text-5xl font-bold uppercase tracking-tight'>Here some websites for </h1></div>
    <div className='mt-7 flex flex-col gap-5 px-5 py-5'>
    {webdata.map((item, index)=>(
      <Websites webdata={item}/>
    ))}
    </div>
    </>
  )
}

export default App
