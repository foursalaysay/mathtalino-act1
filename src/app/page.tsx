

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Math Talino</h1>
      <p className="mb-6">Discover the fun way to learn mathematics through interactive 3D games!</p>
      <img 
        src="/placeholder.svg?height=300&width=500" 
        alt="Math Talino Screenshot" 
        className="mx-auto mb-6 rounded-lg shadow-md"
      />
      <Button asChild>
        <a href="https://example.com/download" target="_blank" rel="noopener noreferrer">
          Download Math Talino
        </a>
      </Button>
  </div>
  );
}
