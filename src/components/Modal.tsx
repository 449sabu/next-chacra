export default function Modal() {
  return (
    <>
      <label htmlFor="my-modal-4" className="btn modal-button">
        Connect
      </label>

      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative">
          <h3 className="text-lg font-bold">Connect Wallet</h3>
          <p className="py-4">
            ウォレットを接続して委任できるように開発中です。
          </p>
        </label>
      </label>
    </>
  )
}
