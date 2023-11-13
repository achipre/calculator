function App () {
  return (
    <main>
      <input
        className="bg-transparent w-full outline-none text-[#F5F7F8] font-primary md:text-6xl lg:text-[180px] text-right"
        type="text"
        placeholder="0"
        maxLength={14}
      />
      <aside className="text-[#F5F7F8] grid grid-cols-7 p-4 px-24 gap-4 text-8xl font-primary bg-[#272829]">
        <button className="h-[calc((100vh-347px)/4)] [grid-column:1/3] hover:[background:radial-gradient(50%_50%_at_50%_50%,_rgba(0,0,0,_0.28)_0%,_#272829_100%)]">
          AC
        </button>
        <button className="h-[calc((100vh-347px)/4)] hover:[background:radial-gradient(50%_50%_at_50%_50%,_rgba(0,0,0,_0.28)_0%,_#272829_100%)]">
          7
        </button>
        <button className="h-[calc((100vh-347px)/4)] hover:[background:radial-gradient(50%_50%_at_50%_50%,_rgba(0,0,0,_0.28)_0%,_#272829_100%)]">
          8
        </button>
        <button className="h-[calc((100vh-347px)/4)] hover:[background:radial-gradient(50%_50%_at_50%_50%,_rgba(0,0,0,_0.28)_0%,_#272829_100%)]">
          9
        </button>
        <button className="text-[#5D5D5D] h-[calc((100vh-347px)/4)]  hover:[background:radial-gradient(50%_50%_at_50%_50%,_rgba(0,0,0,_0.28)_0%,_#272829_100%)]">
          ➗
        </button>
        <button className="text-[#5D5D5D] h-[calc((100vh-347px)/4)]  hover:[background:radial-gradient(50%_50%_at_50%_50%,_rgba(0,0,0,_0.28)_0%,_#272829_100%)]">
          √
        </button>
        <button className="text-[#5D5D5D] h-[calc((100vh-347px)/4)]  hover:[background:radial-gradient(50%_50%_at_50%_50%,_rgba(0,0,0,_0.28)_0%,_#272829_100%)]">
          (
        </button>
        <button className="text-[#5D5D5D] h-[calc((100vh-347px)/4)] hover:[background:radial-gradient(50%_50%_at_50%_50%,_rgba(0,0,0,_0.28)_0%,_#272829_100%)]">
          )
        </button>
        <button className="h-[calc((100vh-347px)/4)] hover:[background:radial-gradient(50%_50%_at_50%_50%,_rgba(0,0,0,_0.28)_0%,_#272829_100%)]">
          4
        </button>
        <button className="h-[calc((100vh-347px)/4)] hover:[background:radial-gradient(50%_50%_at_50%_50%,_rgba(0,0,0,_0.28)_0%,_#272829_100%)]">
          5
        </button>
        <button className="h-[calc((100vh-347px)/4)] hover:[background:radial-gradient(50%_50%_at_50%_50%,_rgba(0,0,0,_0.28)_0%,_#272829_100%)]">
          6
        </button>
        <button className="text-[#5D5D5D] h-[calc((100vh-347px)/4)] hover:[background:radial-gradient(50%_50%_at_50%_50%,_rgba(0,0,0,_0.28)_0%,_#272829_100%)]">
          ✖️
        </button>
        <button className="text-[#5D5D5D] h-[calc((100vh-347px)/4)] hover:[background:radial-gradient(50%_50%_at_50%_50%,_rgba(0,0,0,_0.28)_0%,_#272829_100%)]">
          ﹪
        </button>
        <button className="text-[#5D5D5D] h-[calc((100vh-347px)/4)] hover:[background:radial-gradient(50%_50%_at_50%_50%,_rgba(0,0,0,_0.28)_0%,_#272829_100%)]">
          π
        </button>
        <button className="text-[#5D5D5D] h-[calc((100vh-347px)/4)] hover:[background:radial-gradient(50%_50%_at_50%_50%,_rgba(0,0,0,_0.28)_0%,_#272829_100%)]">
          e
        </button>
        <button className="h-[calc((100vh-347px)/4)] hover:[background:radial-gradient(50%_50%_at_50%_50%,_rgba(0,0,0,_0.28)_0%,_#272829_100%)]">
          1
        </button>
        <button className="h-[calc((100vh-347px)/4)] hover:[background:radial-gradient(50%_50%_at_50%_50%,_rgba(0,0,0,_0.28)_0%,_#272829_100%)]">
          2
        </button>
        <button className="h-[calc((100vh-347px)/4)] hover:[background:radial-gradient(50%_50%_at_50%_50%,_rgba(0,0,0,_0.28)_0%,_#272829_100%)]">
          3
        </button>
        <button className="text-[#5D5D5D] h-[calc((100vh-347px)/4)]  hover:[background:radial-gradient(50%_50%_at_50%_50%,_rgba(0,0,0,_0.28)_0%,_#272829_100%)]">
          ➖
        </button>
        <button className="bg-[#FC5F00] [grid-column:7] [grid-row:3/5] hover:[background:radial-gradient(50%_50%_at_50%_50%,_rgba(252,_95,_0,_0.78)_0%,_#FC5F00_100%)]">
          🟰
        </button>
        <button className="text-[#5D5D5D] h-[calc((100vh-347px)/4)] hover:[background:radial-gradient(50%_50%_at_50%_50%,_rgba(0,0,0,_0.28)_0%,_#272829_100%)]">
          ⌃
        </button>
        <button className="text-[#5D5D5D] h-[calc((100vh-347px)/4)] hover:[background:radial-gradient(50%_50%_at_50%_50%,_rgba(0,0,0,_0.28)_0%,_#272829_100%)]">
          +/-
        </button>
        <button className="[grid-column:3/5] h-[calc((100vh-347px)/4)] hover:[background:radial-gradient(50%_50%_at_50%_50%,_rgba(0,0,0,_0.28)_0%,_#272829_100%)]">
          0
        </button>
        <button className="h-[calc((100vh-347px)/4)] hover:[background:radial-gradient(50%_50%_at_50%_50%,_rgba(0,0,0,_0.28)_0%,_#272829_100%)]">
          •
        </button>
        <button className="text-[#5D5D5D] h-[calc((100vh-347px)/4)] hover:[background:radial-gradient(50%_50%_at_50%_50%,_rgba(0,0,0,_0.28)_0%,_#272829_100%)]">
          ➕
        </button>
      </aside>
    </main>
  )
}

export default App
