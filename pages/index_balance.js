import { ethers } from 'ethers'
import { useEffect } from 'react'
import { useState } from 'react'

export default function Home() {

  const[balance,setBalance]=useState("0")
  const mainNetEndPoint = "https://mainnet.infura.io/v3/47b829e7e62f4ccfa9fe9dbd1bde1714"

  const provider = new ethers.providers.JsonRpcProvider(mainNetEndPoint)


const myAddress =  "0xEA674fdDe714fd979de3EdF0F56AA9716B898ec8"
  const getBalance =  async()=>{

    const balance = await provider.getBalance(myAddress)
    const etherBalnce =  ethers.utils.formatEther(balance)
    setBalance(etherBalnce)
    
    console.log("The account Balance",ethers.utils.formatEther(balance))

  }

  useEffect(()=>{
     getBalance()

  },[])




  return (
    <div >
      <h1 className='btn btn-outline-warning'>The Balance of account  {myAddress}</h1>
      <h2 className='btn btn-outline-info'>The Ether Balance is {balance}</h2>

    </div>
  )
}
