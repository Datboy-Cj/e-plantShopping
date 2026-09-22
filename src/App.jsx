import React,{useState,useEffect} from 'react';
import AboutUs from './AboutUs.jsx';
import ProductList,{Navbar} from './ProductList.jsx';
import CartItem from './CartItem.jsx';
import './App.css';
const getPage=()=>['plants','cart'].includes(location.hash.slice(1))?location.hash.slice(1):'home';
export default function App(){const [page,setPage]=useState(getPage);
useEffect(()=>{const change=()=>{setPage(getPage());window.scrollTo(0,0)};window.addEventListener('hashchange',change);return()=>window.removeEventListener('hashchange',change)},[]);
return page==='home'?<main className="landing"><div className="landing-shade"/><div className="landing-content"><a className="brand light" href="#home">✳ Paradise Nursery</a><div className="hero"><div><span className="eyebrow">BRING THE OUTSIDE IN</span><h1>Grow your<br/>little paradise.</h1><p>Beautiful plants. Happier spaces.</p><a className="button" href="#plants">Get Started <span>↗</span></a></div><AboutUs/></div><div className="landing-bottom">A greener home begins with one plant.<span>EST. 2026 · GROW WITH US</span></div></div></main>:<><Navbar page={page}/>{page==='plants'?<ProductList/>:<CartItem/>}<footer>Paradise Nursery <span>Made for greener everyday living.</span></footer></>;
}
