import Image from 'next/image'
import Banner from '@/components/Banner'
import ProductCard from '@/components/ProductCard'
import styles from './page.module.css'

export default function Home() {
  return (
      <main>
        <Banner/>
        <div style={{margin:"20px", display: "flex",
        flexDirection: "row", alignContent:"space-around",
        justifyContent:"space-around", flexWrap:"wrap"}}>
          <ProductCard hostName='Chulalongkorn Hospital' imgSrc='/img/chula.jpg'/>
          <ProductCard hostName='Rajavithi Hospital' imgSrc='/img/rajavithi.jpg'/>
          <ProductCard hostName='Thammasat Hospital' imgSrc='/img/thammasat.jpg'/>
        </div>
          
      </main>
  );
}
