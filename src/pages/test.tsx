import type { NextPage } from 'next'
import { useState } from 'react'
import ConnectWallet from '../components/ConnectWallet'
import useWallet from '../contexts/wallet'

const Test: NextPage = () => {
  const { wallet, walletConnected, connecting } = useWallet()
  const [assets, setAssets] = useState<null | any>(null)
  const [loading, setLoading] = useState<boolean>(false)

  async function getAssets() {
    if (wallet) {
      setLoading(true)
      const _assets = await wallet.getAssets()
      setAssets(_assets)
      setLoading(false)
    }
  }

  return (
    <div>
      {/* <h1>Connect Wallet</h1>
      <ConnectWallet /> */}
      {/* walletが接続されていない場合は表示されない */}
      {walletConnected && (
        <>
          <h1>Get Wallet Assets</h1>
          {assets ? (
            <pre>
              <code className="language-js">
                {JSON.stringify(assets, null, 2)}
              </code>
            </pre>
          ) : (
            <button
              type="button"
              onClick={() => getAssets()}
              disabled={connecting || loading}
              style={{
                margin: '8px',
                backgroundColor: connecting || loading ? 'orange' : 'grey',
              }}
            >
              Get Wallet Assets
            </button>
          )}
        </>
      )}
    </div>
  )
}

export default Test
