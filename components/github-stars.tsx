import { Star } from 'lucide-react'

import GithubIcon from './github-icon'

const REPO_NAME = 'nicolasmontone/chat-with-your-base'

export default async function GithubStars() {
  const url = `https://api.github.com/repos/${REPO_NAME}`

  const { stargazers_count: stars } = await fetch(url).then((res) => res.json())

  return (
    <a href={`https://github.com/${REPO_NAME}`} target="_blank">
      <button
        className={`
          relative overflow-hidden group
          px-6 py-3 rounded-md backdrop-filter backdrop-blur-lg
          border border-white border-opacity-20
          transition-all duration-300 ease-out
          hover:shadow-lg
          text-white font-medium
          `}
      >
        <div className="relative z-10 flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            <GithubIcon className="w-5 h-5 fill-white" />
            <span>Star on GitHub</span>
          </div>
          <div className="flex items-center space-x-2">
            <Star className="w-5 h-5 text-white group-hover:text-yellow-400 transition-colors duration-300" />
            <span>{stars}</span>
          </div>
        </div>
        <div
          className={`
            absolute inset-0 
            bg-gradient-to-r from-transparent via-white to-transparent
            opacity-20 
            transform -translate-x-full group-hover:translate-x-full
            transition-transform duration-1000 ease-out
            `}
        />
      </button>
    </a>
  )
}
