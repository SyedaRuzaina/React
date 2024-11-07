import React from 'react'
import { Link } from 'react-router-dom'


const Docs = () => {
  return (
    <>
   

   <div className="flex">
     
      <aside className="w-64 bg-gray-50 border-r p-4 text-gray-700 font-sans">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Quick search..."
            className="w-full px-3 py-2 rounded border"
          />
        </div>      
        <nav>
          <h3 className="text-sm font-semibold mb-2 ">Documentation</h3>
          <ul className="text-blue-600 leading-loose">
            <li> <Link to={'/components'} href="">Components</Link></li>
            <li><a href="">Templates</a></li>
            <li><a href="">Screencasts</a></li>
            <li><a href="">Playground</a></li>
            <li><a href="">Resources</a></li>
            <li><a href="">Community</a></li>
          </ul>
          <div className="mt-8">
            <h4 className="text-sm font-semibold">Getting Started</h4>
            <ul className="mt-2 leading-loose">
              <li><a href="">Installation</a></li>
              <li><a href="">Editor Setup</a></li>
              <li><a href="">Using with Preprocessors</a></li>
              <li><a href="">Optimizing for Production</a></li>
              <li><a href="">Browser Support</a></li>
              <li><a href="">Upgrade Guide</a></li>
            </ul>
          </div>
          <div className="mt-8">
            <h4 className="text-sm font-semibold">Core Concepts</h4>
            <ul className="mt-2 leading-loose">
              <li><a href="">Utility-First Fundamentals</a></li>
              <li><a href="">Hover, Focus, and Other States</a></li>
              <li><a href="">Responsive Design</a></li>
              <li><a href="">Dark Mode</a></li>
              <li><a href="">Reusing Styles</a></li>
              <li><a href="">Adding Custom Styles</a></li>
              <li><a href="">Functions & Directives</a></li>
            </ul>
          </div>
          <div className="mt-8">
            <h4 className="text-sm font-semibold">Customization</h4>
            <ul className="mt-2 leading-loose">
              <li><a href="">Configuration</a></li>
              <li><a href="">Content</a></li>
              <li><a href="">Theme</a></li>
              <li><a href="">Screens</a></li>
              <li><a href="">Colors</a></li>
              <li><a href="">Spacing</a></li>
              <li><a href="">Plugins</a></li>
              <li><a href="">Presets</a></li>
            </ul>
          </div>
          <div className="mt-8">
            <h4 className="text-sm font-semibold">Base styles</h4>
            <ul className="mt-2 leading-loose">
              <li><a href="">Preflight</a></li>
              
            </ul>
          </div>
          <div className="mt-8">
            <h4 className="text-sm font-semibold">Layout</h4>
            <ul className="mt-2 leading-loose">
              <li><a href="">Aspect Ratio</a></li>
              <li><a href="">Container</a></li>
              <li><a href="">Columns</a></li>
              <li><a href="">Break After</a></li>
              <li><a href="">Break Before</a></li>
              <li><a href="">Break Inside</a></li>
              <li><a href="">Box Decoration Break</a></li>
              <li><a href="">Box Sizing</a></li>
            </ul>
          </div>
          
          
        </nav>
      </aside>

    
      <main className="flex-1 p-5 font-sans text-gray-800 bg-white">
        <h1 className="text-xl text-blue-600">Installation</h1>
        <h2 className="text-4xl font-extrabold mt-1">Get started with Tailwind CSS</h2>
        <p className="mt-4 text-gray-700">
          Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles, and then writing them to a static CSS file.
        </p>
        <p className="mt-2 text-gray-700">It's fast, flexible, and reliable — with zero-runtime.</p>

        <h3 className="text-xl font-bold mt-6">Installation</h3>

        <div className="flex items-center space-x-6 border-b mt-3 mb-4">
          <button className="border-b-2 pb-2 text-black-600 hover:border-blue-600">Tailwind CLI</button>
          <button className="border-b-2 pb-2 text-black-600 hover:border-blue-600">Using PostCSS</button>
          <button className="border-b-2 pb-2 text-black-600 hover:border-blue-600">Framework Guides</button>
          <button className="border-b-2 pb-2 text-black-600 hover:border-blue-600">Play CDN</button>
        </div>

        <p className=" w-3/4 text-gray-700">
          The simplest and fastest way to get up and running with Tailwind CSS from scratch is with the Tailwind CLI tool. The CLI is also available as a standalone executable
          if you want to use it without installing Node.js.
        </p>

        <div className=" flex flex-row justify-between mt-8">
          <div>
          <h4 className="text-lg font-semibold">1. Install Tailwind CSS</h4>
          <p className="mt-2">
            Install <code className="bg-gray-100 px-1 rounded">tailwindcss</code> via npm, and create your <code className="bg-gray-100 px-1 rounded">tailwind.config.js</code> file.
          </p>
          </div>
          <div className="w-1/2 bg-gray-900 text-blue-100 p-4 rounded mt-4">
            <pre>npm install -D tailwindcss</pre>
            <pre>npx tailwindcss init</pre>
          </div>
        </div>

        <div className="flex flex-row justify-between mt-8">
          <div>
          <h4 className="text-lg font-semibold">2. Configure your template paths</h4>
          <p className="mt-2">
            Add the paths to all of your template files in your <code className="bg-gray-100 px-1 rounded">tailwind.config.js</code> file.
          </p>
          </div>
          <div className="w-1/2 bg-gray-900 text-blue-100 p-4 rounded mt-4">
            <pre>{` /** @type {import('tailwindcss').Config} */
                      module.exports = {
                        content: ["./src/**/*.{html,js}"],
                        theme: {
                          extend: {},
                        },
                        plugins: [],
                      }`}
            </pre>
          </div>
        </div>
        <div className=" flex flex-row justify-between mt-8">
          <div>
          <h4 className="text-lg font-semibold">3. Add the Tailwind directives to your CSS</h4>
          <p className="mt-2">
          Add the <code className="bg-gray-100 px-1 rounded">@tailwind</code> directives for each of Tailwind’s layers to your main CSS file.
          </p>
          </div>
          <div className="w-1/2 bg-gray-900 text-blue-100 p-4 rounded mt-4">
            <pre>@tailwind base;</pre>
            <pre>@tailwind components;</pre>
            <pre>@tailwind utilities;</pre>
          </div>
        </div>
        <div className=" flex flex-row justify-between mt-8">
          <div>
          <h4 className="text-lg font-semibold">4. Start the Tailwind CLI build process</h4>
          <p className="mt-2">
          Run the CLI tool to scan your template files for classes and build your CSS.
          </p>
          </div>
          <div className="w-1/2 bg-gray-900 text-blue-100 p-4 rounded mt-4">
           <p> npx tailwindcss -i ./src/input.css -o ./src/output.css --watch</p>
          </div>
        </div>
        <div className=" flex flex-row justify-between mt-8">
          <div>
          <h4 className="text-lg font-semibold">5. Start using Tailwind in your HTML</h4>
          <p className="mt-2">
          Add your compiled CSS file to the <code> head </code>  and start using Tailwind’s utility classes to style your content.
          </p>
          </div>
          <div className="w-1/2 bg-gray-900 text-blue-100 p-4 rounded mt-4">
              <pre>html</pre>
              <pre>head</pre>
              <pre>meta charset="UTF-8"</pre>
              <pre>meta name="viewport" content="width=device-width, initial-scale=1.0"</pre>
              <pre>link href="./output.css" rel="stylesheet"</pre>
              <pre>/head</pre>
              <pre>h1 class="text-3xl font-bold underline"</pre>
              <pre> Hello world!</pre>
              <pre>/h1</pre>
              <pre>/body</pre>
              <pre>/html</pre>


          </div>
        </div>

        <div className="mt-4 flex flex-col justify-start">
            <h2 className="text-2xl font-semibold mb-2">What to read next</h2>
            <p className="text-gray-600 mb-8">
                Get familiar with some of the core concepts that make Tailwind CSS different from writing traditional CSS.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 flex-shrink-0 rounded-full bg-blue-100 flex items-center justify-center">
                       
                        <span className="text-blue-500"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                      </svg>
                      </span>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">Utility-First Fundamentals</h3>
                        <p className="text-gray-600">
                            Using a utility-first workflow to build complex components from a constrained set of primitive utilities.
                        </p>
                    </div>
                </div>

                <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 flex-shrink-0 rounded-full bg-blue-100 flex items-center justify-center">
                       
                        <span className="text-blue-500"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                      </svg>
                      </span>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">Responsive Design</h3>
                        <p className="text-gray-600">
                            Build fully responsive user interfaces that adapt to any screen size using responsive modifiers.
                        </p>
                    </div>
                </div>

                <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 flex-shrink-0 rounded-full bg-blue-100 flex items-center justify-center">
                       
                        <span className="text-blue-500"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59" />
                      </svg>
                      </span>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">Hover, Focus & Other States</h3>
                        <p className="text-gray-600">
                            Style elements in interactive states like hover, focus, and more using conditional modifiers.
                        </p>
                    </div>
                </div>

                <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 flex-shrink-0 rounded-full bg-blue-100 flex items-center justify-center">
                    
                        <span className="text-blue-500"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                      </svg>
                      </span>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">Dark Mode</h3>
                        <p className="text-gray-600">
                            Optimize your site for dark mode directly in your HTML using the dark mode modifier.
                        </p>
                    </div>
                </div>
                <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 flex-shrink-0 rounded-full bg-blue-100 flex items-center justify-center">
                    
                        <span className="text-blue-500"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                      </svg>
                      </span>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">Reusing Styles</h3>
                        <p className="text-gray-600">
                           Manage duplication and keep your projects maintainable by creating reusable abstractions.
                        </p>
                    </div>
                </div>
                <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 flex-shrink-0 rounded-full bg-blue-100 flex items-center justify-center">
                    
                        <span className="text-blue-500"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 0 0 .658-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58v0Z" />
                      </svg>
                      </span>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">Customizing the Framework</h3>
                        <p className="text-gray-600">
                          Customize the framework to match your brand and extend it with your own custom styles.
                        </p>
                    </div>
                </div>
            </div>
        </div>

      </main>
    </div>
 
    
    
    </>
  )
}

export default Docs

