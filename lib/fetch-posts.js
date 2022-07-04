// The following function is shared
// with getStaticProps and API routes
// from a `lib/` directory
export async function loadPosts({params}) {
  // Call an external API endpoint to get posts
  const res = await fetch(`http://localhost:3000/${params.id}.json`)
  const data = await res.json()

  return data
}



export async function loadPostsIndex() {
  // Call an external API endpoint to get posts
  const res = await fetch(`http://localhost:3000/Life.json`)
  const data = await res.json()

  return data
}

export async function loadPostsPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch(`http://localhost:3000/paths.json`)
  const data = await res.json()

  return data
}