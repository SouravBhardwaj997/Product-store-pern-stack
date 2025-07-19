import { inputData } from "../constants";
import LabelInput from "./LabelInput";

const Modal = () => {
  return (
    <>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="add_product_modal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-xl">Add New Product</h3>
          <form className="mt-5 flex flex-col gap-7">
            {inputData.map((data, i) => (
              <LabelInput data={data} key={i} />
            ))}
            <div className="modal-action">
              {/* if there is a button in form, it will close the modal */}
              <button
                type="submit"
                className="btn bg-secondary text-primary-content flex items-center py-4"
              >
                Add a product
              </button>
              <button
                className="btn"
                onClick={() => {
                  (
                    document.getElementById(
                      "add_product_modal"
                    ) as HTMLDialogElement | null
                  )?.close();
                }}
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default Modal;
