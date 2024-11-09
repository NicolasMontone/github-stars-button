'use client'

import { Star } from 'lucide-react'
import { useState } from 'react'

import GithubIcon from './github-icon'
import { REPO_NAME } from '@/lib/constants'

export default function GithubButton({ count }: { count?: number }) {
  const [isAnimating, setIsAnimating] = useState(false)

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsAnimating(true)

    // Wait for animation to complete before opening link
    setTimeout(() => {
      window.open(`https://github.com/${REPO_NAME}`, '_blank')
      setIsAnimating(false)
    }, 600) // Match this with animation duration
  }

  return (
    <a
      href={`https://github.com/${REPO_NAME}`}
      target="_blank"
      onClick={handleClick}
    >
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
            <Star
              className={`
                w-5 h-5 text-white 
                group-hover:text-yellow-400 
                transition-all duration-300
                ${isAnimating ? 'scale-150 rotate-180 text-yellow-400' : ''}
              `}
            />
            <div>{count ? count : '-'}</div>
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
