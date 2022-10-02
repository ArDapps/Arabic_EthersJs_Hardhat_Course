import { ethers } from 'ethers'
import { useEffect } from 'react'
import { useState } from 'react'
import abiInterface  from '../public/artifacts/contracts/MetaMessage.sol/MetaMessage.json'



export default function Home() {
    const[message,setMessage]= useState("")
    const[newMessage,setNewMessage]= useState("")


    const connectWallet = async()=>{
        const pro= await window.ethereum.request({method:"eth_requestAccounts"});
        console.log(pro)
    }

  const contractAddress = "0x6783F18A8Aab462c8251E7dC366be0749C59f1fa"
const GetMetaverseMessage = async ()=>{
    if(typeof window.ethereum !=="undefined"){
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const contract = new ethers.Contract(contractAddress,abiInterface.abi,provider)

        try {
            const msg = await contract.getMessage();
            console.log(msg)
            setMessage(msg)

                } catch (error) {
            console.log(error)
        }



    }else{
        console.log("Please install metamask wallet")

    }

}

const changeMessage =  async ()=>{

   if(!newMessage)return;
   if(typeof window.ethereum !=="undefined"){
    await connectWallet();
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const signer = provider.getSigner()
    const contract = new ethers.Contract(contractAddress,abiInterface.abi,signer)

    try {
        const changeMsg = await contract.changeMessage(newMessage);
        await changeMsg.wait()
        await GetMetaverseMessage()
        setNewMessage("")
            } catch (error) {
        console.log(error)
    }



}else{
    console.log("Please install metamask wallet")

}

}

  return (
    <div  className='m-5'>
      <h2 className='btn btn-outline-info text-center'>Welceome to Metaverse Data Center </h2>
      <br/>
      <button type="button" className="btn btn-danger" onClick={GetMetaverseMessage}>What is the message ???</button>
      <br/>

{
    message?      <div className='m-3'>
    <div className="card">
<div className="card-header">
  Hello ""
</div>
<div className="card-body">
  <blockquote className="blockquote mb-0">
    <p>{message}</p>
    <footer className="blockquote-footer">Let`s change teh metaverse message` <cite title="Source Title">Source Title</cite></footer>
  </blockquote>
</div>
</div>
    </div>
:""
}
<h2 className='btn btn-outline-warning text-center'>You can change the Metaverse Message now by Small Fees </h2>
      <br/>
<div>
<div class="input-group flex-nowrap">
  <span class="input-group-text" id="addon-wrapping">@</span>
  <input type="text" onChange={(e)=>setNewMessage(e.target.value)}
  value={newMessage}

   className="form-control" placeholder="Write your Message" aria-label="Username" aria-describedby="addon-wrapping"/>
</div>
</div>

<br/>
      <button type="button" className="btn btn-success"  onClick={changeMessage}>Pay and Save your Message</button>
      <br/>



    </div>
  )
}
