import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProductStore } from "../store/useProductStore";
import { ArrowLeftIcon, SaveIcon, Trash2Icon } from "lucide-react";
import { inputData } from "../constants";
import LabelInput from "../components/LabelInput";

const Product = () => {
  const {
    fetchProduct,
    currentProduct,
    loading,
    formData,
    setForm,
    deleteProduct,
    updateProduct,
  } = useProductStore();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) {
      fetchProduct(id);
    }
  }, []);
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <button onClick={() => navigate("/")} className="btn btn-ghost mb-8">
        <ArrowLeftIcon className="size-4 mr-2" />
        Back to Products
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* PRODUCT IMAGE */}
        <div className="rounded-lg overflow-hidden shadow-lg bg-base-100">
          <img
            src={currentProduct?.image}
            alt={currentProduct?.name}
            className="size-full object-cover"
          />
        </div>

        {/* PRODUCT FORM */}
        <div className="card bg-base-100 shadow-lg">
          <div className="card-body">
            <h2 className="card-title text-2xl mb-6">Edit Product</h2>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                // updateProduct(id);
              }}
              className="space-y-6"
            >
              {inputData.map((data, i) => (
                <LabelInput
                  data={data}
                  key={i}
                  formData={formData}
                  setForm={setForm}
                />
              ))}

              {/* FORM ACTIONS */}
              <div className="flex justify-between mt-8">
                <button
                  type="button"
                  onClick={() => {
                    if (id) {
                      deleteProduct(Number(id));
                    }
                  }}
                  className="btn btn-error"
                >
                  <Trash2Icon className="size-4 mr-2" />
                  Delete Product
                </button>

                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={
                    loading ||
                    !formData.name ||
                    !formData.price ||
                    !formData.image
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    if (id) {
                      updateProduct(id);
                    }
                  }}
                >
                  {loading ? (
                    <span className="loading loading-spinner loading-sm" />
                  ) : (
                    <>
                      <SaveIcon className="size-4 mr-2" />
                      Save Changes
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
