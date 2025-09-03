import { useForm, Controller, useWatch } from "react-hook-form";
import Select from "react-select";
import RadioGroup from "./RadioGroup";
import { nairobiLocations } from "@/app-data/locations";
import { useOrderMutation } from "@/hooks/query-hooks/orders/useOrderMutation";
import Input from "@/components/UI-primitives/Input";
import TextArea from "@/components/UI-primitives/Input/TextArea";
import { useCartContext } from "@/context/CartContext";
import ErrorText from "@/components/UI-primitives/ErrorText";
import { Order, OrderAddress } from "@/types";
import SectionTitle from "@/components/UI-primitives/SectionTitle";
import mpesaLogo from "@/assets/images/M-PESA-logo.png";

type FormValues = OrderAddress & Pick<Order, "deliveryMethod" | "paymentMethod" | "notes"> & {};

export type PaymentMethod = "cash" | "mpesa" | "paypal";
export type DeliveryMethod = "pickup" | "delivery";

type SubCounty = keyof typeof nairobiLocations;

const subCounties = Object.keys(nairobiLocations);

const CheckoutForm = () => {
  const { cartItems } = useCartContext();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>();
  const orderMutate = useOrderMutation();

  const deliveryOptions: { value: DeliveryMethod; label: string }[] = [
    { value: "pickup", label: "Pickup" },
    { value: "delivery", label: "Delivery" },
  ];

  const paymentOptions: { value: PaymentMethod; label: string }[] = [
    { value: "cash", label: "Cash on Delivery" },
    { value: "mpesa", label: "Mpesa" },
    { value: "paypal", label: "PayPal" },
  ];

  const subCountyOptions = subCounties.map((item) => ({
    label: item,
    value: item,
  }));

  const selectedSubCounty = useWatch({
    control,
    name: "subCounty",
  });

  const selectedDeliveryMethod = useWatch({
    control,
    name: "deliveryMethod",
  });

  const wardOptions =
    (selectedSubCounty &&
      selectedSubCounty in nairobiLocations &&
      nairobiLocations[selectedSubCounty as SubCounty].map((area) => ({
        label: area,
        value: area,
      }))) ||
    [];

  const submitOrder = (data: FormValues) => {
    console.log("These are the form values ::", data);
    if (!cartItems) throw new Error("No items in cart to place order");
    const payload = {
      paymentMethod: data.paymentMethod,
      deliveryMethod: data.deliveryMethod,
      ...(data.deliveryMethod === "delivery" && {
        address: {
          subCounty: data.subCounty,
          ward: data.ward,
          area: data.area,
          additionalDetails: data.additionalDetails,
        },
      }),
      items: cartItems.map((item) => ({
        ...item,
        product: item.product._id,
        price: item.quantity < 12 ? item.product.unitPrice : item.product.wholesaleUnitPrice,
        priceType: (item.quantity < 12 ? "retail" : "wholesale") as "retail" | "wholesale",
        subTotal: item.quantity < 12 ? item.product.unitPrice * item.quantity : item.product.wholesaleUnitPrice * item.quantity,
      })),
      notes: data.notes,
    };
    console.log("Order payload ::", payload);
    orderMutate.mutate(payload);
  };

  return (
    <form id="order-form" onSubmit={handleSubmit(submitOrder)} className="flex flex-col gap-y-4">
      <SectionTitle className="self-start">Checkout</SectionTitle>
      <section className="border-outline flex flex-col gap-y-4 rounded-md border p-3">
        <section className="flex flex-col gap-y-2">
          <h3 className="text-heading-4 font-bold">Delivery Method</h3>
          <div className="flex gap-3">
            <Controller
              name="deliveryMethod"
              control={control}
              rules={{ required: "Please select a delivery method" }}
              render={({ field }) => <RadioGroup name={field.name} items={deliveryOptions} value={field.value} onChange={field.onChange} />}
            />
          </div>
          {errors.deliveryMethod && <ErrorText>{errors.deliveryMethod.message}</ErrorText>}
        </section>
        {selectedDeliveryMethod === "delivery" && (
          <>
            <h3 className="text-heading-4 font-bold">Shipping Address</h3>
            <div className="">
              <label htmlFor="subCounty" className="text-body text-body-default font-semibold">
                Sub County / Constituency
              </label>
              <Controller
                name="subCounty"
                control={control}
                rules={{ required: "Sub County is required" }}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={subCountyOptions}
                    inputId="subCounty"
                    placeholder="Select your sub county / constituency"
                    value={subCountyOptions.find((option) => option.value === field.value) || null}
                    onChange={(selected) => {
                      field.onChange(selected?.value);
                    }}
                  />
                )}
              />
              {errors.subCounty && <ErrorText>{errors.subCounty.message}</ErrorText>}
            </div>

            <div className="">
              <label htmlFor="ward" className="text-body text-body-default font-semibold">
                Ward
              </label>
              <Controller
                name="ward"
                control={control}
                rules={{ required: "Ward is required" }}
                render={({ field }) => (
                  <Select
                    {...field}
                    isDisabled={!wardOptions}
                    options={wardOptions}
                    inputId="ward"
                    placeholder="Select your ward"
                    value={wardOptions.find((option) => option.value === field.value) || null}
                    onChange={(selected) => {
                      field.onChange(selected?.value);
                    }}
                  />
                )}
              />
              {errors.ward && <ErrorText>{errors.ward.message}</ErrorText>}
            </div>

            <div className="">
              <Controller
                name="area"
                control={control}
                defaultValue=""
                rules={{ required: "Area is required", maxLength: 200 }}
                render={({ field }) => <Input {...field} id="area" label="Area / Street" type="text" placeholder="Enter your Area" />}
              />
              {errors.area && <ErrorText>{errors.area.message}</ErrorText>}
            </div>
          </>
        )}
      </section>

      <section className="border-outline flex flex-col gap-y-2 rounded-md border p-3">
        <h3 className="text-heading-4 font-bold">Payment Method</h3>
        <div className="flex flex-col gap-y-2">
          <Controller
            name="paymentMethod"
            control={control}
            rules={{ required: "Please select a payment method" }}
            render={({ field }) => <RadioGroup name={field.name} icon={mpesaLogo} items={paymentOptions} value={field.value} onChange={field.onChange} />}
          />
          {errors.paymentMethod && <ErrorText>{errors.paymentMethod.message}</ErrorText>}
        </div>
      </section>

      <div className="">
        <Controller
          name="notes"
          control={control}
          defaultValue=""
          rules={{ maxLength: 200 }}
          render={({ field }) => <TextArea {...field} id="notes" label="Notes" placeholder="Enter a message, e.g Extra salted, Deeply roasted till dark" />}
        />
        {errors.notes && <ErrorText>{errors.notes.message}</ErrorText>}
      </div>
    </form>
  );
};

export default CheckoutForm;
