import { useState } from 'react'

function App () {
  const [sectionOp, setSectioOp] = useState('')
  const [valor, setValor] = useState('')
  const [textAC, setTextAC] = useState('AC')
  const valueSecction = sectionOp
    .split('')
    .filter(item => item !== '=' && item !== '+')
    .join('')
  const handleAC = () => {
    setValor('')
    setTextAC('AC')
    if (valor === '') {
      setSectioOp('')
    }
  }

  const handleCalc = (char) => {
    if (valor.toString().split('').includes('.') && char === '.') return
    if (valor.length >= 12) return
    if (valor === '') setValor(char)
    if (valor === 0) setValor(char)
    if (valor !== 0 && valor !== '') setValor(valor.toString().concat(char.toString()))
    setTextAC('C')
  }

  const handlePi = () => {
    setValor(Math.PI)
    setTextAC('C')
  }
  const handleE = () => {
    setValor(Math.E)
    setTextAC('C')
  }
  const handleResult = () => {
    if (sectionOp.at(-1) === '+') {
      // const valueSecction = sectionOp
      //   .split('')
      //   .filter(item => item !== '=' && item !== '+')
      //   .join('')
      setValor(Number(valueSecction) + Number(valor))
      setSectioOp(`=${Number(valueSecction) + Number(valor)}`)
    }
  }
  const handlePlus = () => {
    if (valor === '' && sectionOp === '') {
      setSectioOp('=0+')
    }
    if (valor !== '') {
      setSectioOp(`=${valor}+`)
    }
    if (valor !== '' && sectionOp !== '') {
      setSectioOp(`=${Number(valueSecction) + Number(valor)}+`)
    }
    if (Number(valueSecction) === Number(valor)) {
      setSectioOp(`=${valor}+`)
    }
    setValor('')
  }

  return (
    <main>
      <div className="relative">
        <input
          className="bg-transparent relative w-full outline-none text-[#F5F7F8] font-primary md:text-9xl lg:text-[180px] text-right px-24 cursor-"
          placeholder="0"
          maxLength={14}
          disabled
          value={valor}
        />
        <p className="absolute top-2 right-28 text-2xl text-left text-neutral-300">{sectionOp}</p>
      </div>
      <aside className="text-[#F5F7F8] grid grid-cols-7 p-4 lg:px-24 gap-4 md:text-5xl lg:text-8xl font-primary bg-[#272829]">
        <button
          onClick={handleAC}
          className="h-[calc((100vh-347px)/4)] [grid-column:1/3] hover:[background:radial-gradient(50%_50%_at_50%_50%,_rgba(0,0,0,_0.28)_0%,_#272829_100%)] hover:border-x-[1px] hover:border-[#464748]"
        >
          {textAC}
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
        <button
          onClick={() => setValor(valor.toString().concat('÷'))}
          className="text-[#5D5D5D] h-[calc((100vh-347px)/4)]  hover:[background:radial-gradient(50%_50%_at_50%_50%,_rgba(0,0,0,_0.28)_0%,_#272829_100%)] hover:border-x-[1px] hover:border-[#464748]"
        >
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
        <button
          onClick={() => setValor(valor.toString().concat('*'))}
          className="text-[#5D5D5D] h-[calc((100vh-347px)/4)] hover:[background:radial-gradient(50%_50%_at_50%_50%,_rgba(0,0,0,_0.28)_0%,_#272829_100%)] hover:border-x-[1px] hover:border-[#464748]"
        >
          ✖️
        </button>
        <button className="text-[#5D5D5D] h-[calc((100vh-347px)/4)] hover:[background:radial-gradient(50%_50%_at_50%_50%,_rgba(0,0,0,_0.28)_0%,_#272829_100%)] hover:border-x-[1px] hover:border-[#464748]">
          ﹪
        </button>
        <button
          onClick={handlePi}
          className="text-[#5D5D5D] h-[calc((100vh-347px)/4)] hover:[background:radial-gradient(50%_50%_at_50%_50%,_rgba(0,0,0,_0.28)_0%,_#272829_100%)] hover:border-x-[1px] hover:border-[#464748]"
        >
          π
        </button>
        <button
          onClick={handleE}
          className="text-[#5D5D5D] h-[calc((100vh-347px)/4)] hover:[background:radial-gradient(50%_50%_at_50%_50%,_rgba(0,0,0,_0.28)_0%,_#272829_100%)] hover:border-x-[1px] hover:border-[#464748]"
        >
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
        <button
          onClick={() => setValor(valor.toString().concat('-'))}
          className="text-[#5D5D5D] h-[calc((100vh-347px)/4)]  hover:[background:radial-gradient(50%_50%_at_50%_50%,_rgba(0,0,0,_0.28)_0%,_#272829_100%)] hover:border-x-[1px] hover:border-[#464748]"
        >
          ➖
        </button>
        <button
          onClick={handleResult}
          className="bg-[#FC5F00] [grid-column:7] [grid-row:3/5] hover:[background:radial-gradient(50%_50%_at_50%_50%,_rgba(252,_95,_0,_0.78)_0%,_#FC5F00_100%)]"
        >
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
        <button
          onClick={handlePlus}
          className="text-[#5D5D5D] h-[calc((100vh-347px)/4)] hover:[background:radial-gradient(50%_50%_at_50%_50%,_rgba(0,0,0,_0.28)_0%,_#272829_100%)] hover:border-x-[1px] hover:border-[#464748]"
        >
          ➕
        </button>
      </aside>
    </main>
  )
}

export default App
