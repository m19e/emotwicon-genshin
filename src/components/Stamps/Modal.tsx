export const Modal = () => {
  return (
    <>
      <input type="checkbox" id="modal" className="modal-toggle" />
      <label htmlFor="modal" className="modal">
        <label className="modal-box">
          <h3 className="text-lg font-bold">Hello!</h3>
          <p className="py-4">This modal works with a hidden checkbox!</p>
        </label>
      </label>
    </>
  )
}
