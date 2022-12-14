import { Anpan } from '@prisma/client'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [anpan, setAnpan] = useState<Anpan>()
  const [anpans, setAnpans] = useState<Anpan[]>()

  const getAnpan = useCallback(async () => {
    try {
      const res = await fetch('/api/anpan/3').then(res => res.json())
      setAnpan(res.data)
      console.log({ res })
    } catch (e) {
      console.error(e)
    }
  }, [])

  const getAnpans = useCallback(async () => {
    try {
      const res = await fetch('/api/anpan').then(res => res.json())
      setAnpans(res.data)
      console.log({ res })
    } catch (e) {
      console.error(e)
    }
  }, [])

  useEffect(() => {
    getAnpan()
    getAnpans()
  }, [])

  const createAnpan = useCallback(async () => {
    try {
      const res = await fetch('/api/anpan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: "email6", name: "aa"
        })
      }).then(res => res.json())
      console.log("追加に成功", res)
    } catch (e) {
      console.error(e)
    }
  }, [])

  const updateAnpan = useCallback(async () => {
    try {
      const res = await fetch('/api/anpan/1', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          // email: "emailです", name: "test1 update"
         name: "test1 update2"
        })
      }).then(res => res.json())
      console.log("更新に成功", res)
    } catch (e) {
      console.error(e)
    }
  }, [])

  const deleteAnpan = useCallback(async () => {
    try {
      const res = await fetch('/api/anpan/2', {
        method: 'DELETE',
      }).then(res => res.json())
      console.log("削除に成功", res)
    } catch (e) {
      console.error(e)
    }
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <button onClick={createAnpan}>あんぱん追加</button>
        <button onClick={updateAnpan}>あんぱん更新</button>
        <button onClick={deleteAnpan}>あんぱん削除</button>
        {JSON.stringify(anpan)}
        
        <ul>
          {anpans?.map((v, i) => (
            <li key={i} style={{ display: 'flex', gap: '20px' }}>
              <p>{v.id}</p>
              <p>{v.email}</p>
              <p>{v.name}</p>
            </li>
          ))}
        </ul>
      </main>

      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
