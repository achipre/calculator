import { useState } from 'react'

function App () {
  const [valor, setValor] = useState('')
  const handleCalc = (char) => {
    if (valor === '') {
      setValor(char)
    } else if (valor === 0) {
      setValor(char)
    } else if (typeof (Number(valor)) === 'number') {
      setValor(valor + char.toString())
    }

    console.log(valor === '')
    console.log(char === 0)
    console.log(valor === 0)
    console.log(typeof Number(valor) === 'number')
  }
  return (
    <main>
      <input
        className="bg-transparent w-full outline-none text-[#F5F7F8] font-primary md:text-9xl lg:text-[180px] text-right px-24 cursor-"
        placeholder="0"
        maxLength={14}
        disabled
        value={valor}
      />
      <aside className="text-[#F5F7F8] grid grid-cols-7 p-4 lg:px-24 gap-4 md:text-5xl lg:text-8xl font-primary bg-[#272829]">
        <button
          onClick={() => setValor('')}
          className="h-[calc((100vh-347px)/4)] [grid-column:1/3] hover:[background:radial-gradient(50%_50%_at_50%_50%,_rgba(0,0,0,_0.28)_0%,_#272829_100%)] hover:border-x-[1px] hover:border-[#464748]"
        >
          AC
        </button>
        <button
          onClick={() => handleCalc(7)}
          className="h-[calc((100vh-347px)/4)] hover:[background:radial-gradient(50%_50%_at_50%_50%,_rgba(0,0,0,_0.28)_0%,_#272829_100%)] hover:border-x-[1px] hover:border-[#464748]"
        >
          7
        </button>
        <button
          onClick={() => handleCalc(8)}
          className="h-[calc((100vh-347px)/4)] hover:[background:radial-gradient(50%_50%_at_50%_50%,_rgba(0,0,0,_0.28)_0%,_#272829_100%)] hover:border-x-[1px] hover:border-[#464748]"
        >
          8
        </button>
        <button
          onClick={() => handleCalc(9)}
          className="h-[calc((100vh-347px)/4)] hover:[background:radial-gradient(50%_50%_at_50%_50%,_rgba(0,0,0,_0.28)_0%,_#272829_100%)] hover:border-x-[1px] hover:border-[#464748]"
        >
          9
        </button>
        <button className="text-[#5D5D5D] h-[calc((100vh-347px)/4)]  hover:[background:radial-gradient(50%_50%_at_50%_50%,_rgba(0,0,0,_0.28)_0%,_#272829_100%)] hover:border-x-[1px] hover:border-[#464748]">
          ➗
        </button>
        <button className="text-[#5D5D5D] h-[calc((100vh-347px)/4)]  hover:[background:radial-gradient(50%_50%_at_50%_50%,_rgba(0,0,0,_0.28)_0%,_#272829_100%)] hover:border-x-[1px] hover:border-[#464748]">
          √
        </button>
        <button className="text-[#5D5D5D] h-[calc((100vh-347px)/4)]  hover:[background:radial-gradient(50%_50%_at_50%_50%,_rgba(0,0,0,_0.28)_0%,_#272829_100%)] hover:border-x-[1px] hover:border-[#464748]">
          (
        </button>
        <button className="text-[#5D5D5D] h-[calc((100vh-347px)/4)] hover:[background:radial-gradient(50%_50%_at_50%_50%,_rgba(0,0,0,_0.28)_0%,_#272829_100%)] hover:border-x-[1px] hover:border-[#464748]">
          )
        </button>
        <button
          onClick={() => handleCalc(4)}
          className="h-[calc((100vh-347px)/4)] hover:[background:radial-gradient(50%_50%_at_50%_50%,_rgba(0,0,0,_0.28)_0%,_#272829_100%)] hover:border-x-[1px] hover:border-[#464748]"
        >
          4
        </button>
        <button
          onClick={() => handleCalc(5)}
          className="h-[calc((100vh-347px)/4)] hover:[background:radial-gradient(50%_50%_at_50%_50%,_rgba(0,0,0,_0.28)_0%,_#272829_100%)] hover:border-x-[1px] hover:border-[#464748]"
        >
          5
        </button>
        <button
          onClick={() => handleCalc(6)}
          className="h-[calc((100vh-347px)/4)] hover:[background:radial-gradient(50%_50%_at_50%_50%,_rgba(0,0,0,_0.28)_0%,_#272829_100%)] hover:border-x-[1px] hover:border-[#464748]"
        >
          6
        </button>
        <button className="text-[#5D5D5D] h-[calc((100vh-347px)/4)] hover:[background:radial-gradient(50%_50%_at_50%_50%,_rgba(0,0,0,_0.28)_0%,_#272829_100%)] hover:border-x-[1px] hover:border-[#464748]">
          ✖️
        </button>
        <button className="text-[#5D5D5D] h-[calc((100vh-347px)/4)] hover:[background:radial-gradient(50%_50%_at_50%_50%,_rgba(0,0,0,_0.28)_0%,_#272829_100%)] hover:border-x-[1px] hover:border-[#464748]">
          ﹪
        </button>
        <button className="text-[#5D5D5D] h-[calc((100vh-347px)/4)] hover:[background:radial-gradient(50%_50%_at_50%_50%,_rgba(0,0,0,_0.28)_0%,_#272829_100%)] hover:border-x-[1px] hover:border-[#464748]">
          π
        </button>
        <button className="text-[#5D5D5D] h-[calc((100vh-347px)/4)] hover:[background:radial-gradient(50%_50%_at_50%_50%,_rgba(0,0,0,_0.28)_0%,_#272829_100%)] hover:border-x-[1px] hover:border-[#464748]">
          e
        </button>
        <button
          onClick={() => handleCalc(1)}
          className="h-[calc((100vh-347px)/4)] hover:[background:radial-gradient(50%_50%_at_50%_50%,_rgba(0,0,0,_0.28)_0%,_#272829_100%)] hover:border-x-[1px] hover:border-[#464748]"
        >
          1
        </button>
        <button
          onClick={() => handleCalc(2)}
          className="h-[calc((100vh-347px)/4)] hover:[background:radial-gradient(50%_50%_at_50%_50%,_rgba(0,0,0,_0.28)_0%,_#272829_100%)] hover:border-x-[1px] hover:border-[#464748]"
        >
          2
        </button>
        <button
          onClick={() => handleCalc(3)}
          className="h-[calc((100vh-347px)/4)] hover:[background:radial-gradient(50%_50%_at_50%_50%,_rgba(0,0,0,_0.28)_0%,_#272829_100%)] hover:border-x-[1px] hover:border-[#464748]"
        >
          3
        </button>
        <button className="text-[#5D5D5D] h-[calc((100vh-347px)/4)]  hover:[background:radial-gradient(50%_50%_at_50%_50%,_rgba(0,0,0,_0.28)_0%,_#272829_100%)] hover:border-x-[1px] hover:border-[#464748]">
          ➖
        </button>
        <button className="bg-[#FC5F00] [grid-column:7] [grid-row:3/5] hover:[background:radial-gradient(50%_50%_at_50%_50%,_rgba(252,_95,_0,_0.78)_0%,_#FC5F00_100%)]">
          🟰
        </button>
        <button className="text-[#5D5D5D] h-[calc((100vh-347px)/4)] hover:[background:radial-gradient(50%_50%_at_50%_50%,_rgba(0,0,0,_0.28)_0%,_#272829_100%)] hover:border-x-[1px] hover:border-[#464748]">
          ⌃
        </button>
        <button className="text-[#5D5D5D] h-[calc((100vh-347px)/4)] hover:[background:radial-gradient(50%_50%_at_50%_50%,_rgba(0,0,0,_0.28)_0%,_#272829_100%)] hover:border-x-[1px] hover:border-[#464748]">
          ±
        </button>
        <button
          onClick={() => handleCalc(0)}
          className="[grid-column:3/5] h-[calc((100vh-347px)/4)] hover:[background:radial-gradient(50%_50%_at_50%_50%,_rgba(0,0,0,_0.28)_0%,_#272829_100%)] hover:border-x-[1px] hover:border-[#464748]"
        >
          0
        </button>
        <button
          onClick={() => handleCalc('.')}
          className="h-[calc((100vh-347px)/4)] hover:[background:radial-gradient(50%_50%_at_50%_50%,_rgba(0,0,0,_0.28)_0%,_#272829_100%)] hover:border-x-[1px] hover:border-[#464748]"
        >
          •
        </button>
        <button className="text-[#5D5D5D] h-[calc((100vh-347px)/4)] hover:[background:radial-gradient(50%_50%_at_50%_50%,_rgba(0,0,0,_0.28)_0%,_#272829_100%)] hover:border-x-[1px] hover:border-[#464748]">
          ➕
        </button>
      </aside>
    </main>
  )
}

export default App
