import { REPO_NAME } from '../lib/constants'
import GithubButton from './github-button'

export default async function GithubStars() {
  const url = `https://api.github.com/repos/${REPO_NAME}`

  const data = await fetch(url).then((res) => res.json())
  const { stargazers_count: stars } = data

  return <GithubButton count={stars} />
}
