import React from 'react'

const Modal = () => {
    return (
        <>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <p className="py-4 font-bold text-lg">Coming Soon!</p>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    )
}

export default Modal