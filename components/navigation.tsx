'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import styles from '../styles/navigation.module.css'

export default function Navigation(){

    const path = usePathname();
    const [count, setCount] = useState(0)
    const [name, setName] = useState('James')
    return (
        <nav className={styles.nav}>
            <ul className={styles.navList}>
                <li className={styles.navList__item}><Link href="/">Home</Link> {path === "/" ? "🔥" : ""}</li>
                <li className={styles.navList__item}><Link href="/about-us">About Us</Link> {path === "/about-us" ? "🔥" : ""}</li>
            </ul>
        </nav>
    )
}