import { inputData } from "../constants";
import { useProductStore } from "../store/useProductStore";
import LabelInput from "./LabelInput";

const Modal = () => {
  const { formData, setForm, addProduct } = useProductStore();
  return (
    <>
      <dialog id="add_product_modal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-xl">Add New Product</h3>
          <form className="mt-5 flex flex-col gap-7">
            {inputData.map((data, i) => (
              <LabelInput
                data={data}
                key={i}
                formData={formData}
                setForm={setForm}
              />
            ))}
            <div className="modal-action">
              <button
                type="submit"
                className="btn bg-secondary text-primary-content flex items-center py-4"
                onClick={(e) => {
                  (
                    document.getElementById(
                      "add_product_modal"
                    ) as HTMLDialogElement | null
                  )?.close();
                  addProduct(e);
                }}
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
