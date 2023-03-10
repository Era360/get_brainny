import Head from 'next/head'
import { useEffect, useState } from 'react';
import TheNumber from '../components/Number'
import Timer from '../components/timer/timer';
import { generateNumber, generateSign } from '../components/utils';
import styles from '../styles/Home.module.css'

export default function Home() {
  const [firstNumber, setfirstNumber] = useState(generateNumber());
  const [secondNumber, setsecondNumber] = useState(generateNumber())
  const [sign, setsign] = useState("+")
  const [hydrated, setHydrated] = useState(false);

  const handleAnswer = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)

    let correctAnswer
    switch (sign) {
      case "-":
        correctAnswer = firstNumber - secondNumber
        break

      case "*":
        correctAnswer = firstNumber * secondNumber
        break

      case "/":
        correctAnswer = Math.round(firstNumber / secondNumber)
        break

      default:
        correctAnswer = firstNumber + secondNumber
        break;
    }

    if (parseFloat(data.get("theAnswer")) === correctAnswer) console.log("Correct")
    else {
      console.log("wrong")
      console.log("Corret answer is: " + correctAnswer)
    }

    let generatedSign = generateSign()

    if (generatedSign === "/") {
      let firstStateNumber = generateNumber()
      let secondStateNumber = generateNumber(firstStateNumber)

      setfirstNumber(firstStateNumber)
      setsign(generatedSign)
      setsecondNumber(secondStateNumber)
    } else {
      setfirstNumber(generateNumber())
      setsign(generatedSign)
      setsecondNumber(generateNumber())
    }

    e.target.reset()
  }

  useEffect(() => {
    setHydrated(true);
  }, [])

  if (!hydrated) {
    // Returns null on first render, so the client and server match
    return null;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Get Brainny</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1 className={styles.title}>
          Get Brainny!
          {/* <a href="https://nextjs.org">Get Brainny!</a> */}
        </h1>
        <Timer />
      </header>

      <main className={styles.main}>
        <div className={styles.calculation}>
          <TheNumber randomNumber={firstNumber} />
          <span style={{ fontSize: 50 }}>
            {
              sign
            }
          </span>
          <TheNumber randomNumber={secondNumber} />
        </div>
        <form onSubmit={handleAnswer} className={styles.answer}>
          <input type="number" name='theAnswer' />
        </form>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sponsor
        </a>
      </footer>
    </div>
  )
}
