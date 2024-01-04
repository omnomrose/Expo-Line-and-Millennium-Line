import dynamic from "next/dynamic"

const DynamicMap = dynamic(() => import('../../components/Map'), {ssr: false});

// REASON using dynamic = map will render in client side

export default function Home() {
  return (
    <DynamicMap/>
  )
}
