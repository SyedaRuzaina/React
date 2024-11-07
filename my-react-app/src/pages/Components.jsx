import React from 'react'
import Mypage from './MyPage'


const About = (props) => {
    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 p-8 font-sans text-gray-900">
   
      <header className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-blue-600">tailwind<span className="font-light">UI</span></h1>
        <button className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded">Get all-access</button>
      </header>

     
      <main className="max-w-3xl p-5 items-center">
        <p className="text-sm text-blue-500 mb-2">By the makers of Tailwind CSS</p>
        <h2 className="text-4xl font-bold mb-4">Beautiful UI components, crafted with Tailwind CSS.</h2>
        <div className="flex justify-center space-x-4 mb-6">
          <span className="flex items-center space-x-1">
            <i className="fab fa-html5 text-lg"></i>
            <span>HTML</span>
          </span>
          <span className="flex items-center space-x-1">
            <i className="fab fa-react text-lg"></i>
            <span>React</span>
          </span>
          <span className="flex items-center space-x-1">
            <i className="fab fa-vuejs text-lg"></i>
            <span>Vue</span>
          </span>
        </div>
        <p className="text-gray-700 mb-6">
          Over 500+ professionally designed, fully responsive, expertly crafted component examples you can drop into your Tailwind projects and customize to your heart’s content.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-800">Live preview</button>
          <button className="bg-gray-200 text-gray-900 px-4 py-2 rounded hover:bg-gray-300">Documentation</button>
        </div>
      </main>

      
      <aside className="fixed right-0 top-20 w-72 bg-white shadow-lg rounded-lg p-6 space-y-4">
        <input
          type="text"
          placeholder="Search projects..."
          className="w-full px-4 py-2 border border-gray-300 rounded"
        />
        <div>
          <h3 className="text-gray-500 text-sm mb-2">Recent searches</h3>
          <div className="space-y-2">
            <button className="w-full text-left px-4 py-2 bg-purple-100 text-purple-800 rounded">Tailwind Labs / Website Redesign</button>
            <button className="w-full text-left px-4 py-2 bg-gray-100 text-gray-700 rounded">Laravel LLC / Conference Branding</button>
            <button className="w-full text-left px-4 py-2 text-gray-500">Add new file...</button>
            <button className="w-full text-left px-4 py-2 text-gray-500">Add new folder...</button>
            <button className="w-full text-left px-4 py-2 text-gray-500">Add hashtag...</button>
            <button className="w-full text-left px-4 py-2 text-gray-500">Add label...</button>
          </div>
        </div>
      </aside>

    
      <div className="fixed right-0 bottom-20 w-72 bg-white shadow-lg rounded-lg p-4 space-y-4">
        <div className="flex items-center space-x-4">
          <img src="https://via.placeholder.com/40" alt="Profile" className="w-10 h-10 rounded-full" />
          <div>
            <p className="text-gray-900 font-medium">Emily Selman</p>
            <p className="text-sm text-gray-500">Sent you an invite to connect.</p>
          </div>
        </div>
        <div className="flex justify-between">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Accept</button>
          <button className="bg-gray-200 text-gray-900 px-4 py-2 rounded hover:bg-gray-300">Decline</button>
        </div>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <img src="https://via.placeholder.com/40" alt="Profile" className="w-10 h-10 rounded-full" />
            <div>
              <p className="text-gray-900 font-medium">Leonard Krasner</p>
              <p className="text-sm text-gray-500">@leonardkrasner</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <img src="https://via.placeholder.com/40" alt="Profile" className="w-10 h-10 rounded-full" />
            <div>
              <p className="text-gray-900 font-medium">Floyd Miles</p>
              <p className="text-sm text-gray-500">@floydmiles</p>
            </div>
          </div>
        </div>
        <button className="w-full text-left text-blue-500 hover:underline">View all</button>
      </div>
    </div>
           
        </>
    )
}

export default About