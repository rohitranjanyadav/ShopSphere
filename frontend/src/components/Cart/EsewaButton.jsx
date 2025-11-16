import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import CryptoJS from "crypto-js";

const Esewa = ({ amount = 100 }) => {
  const taxAmount = 10;
  const totalAmount = amount + taxAmount;

  const secretKey = import.meta.env.VITE_ESEWA_CLIENT_ID;

  const [formData, setFormData] = useState({
    amount: String(amount),
    tax_amount: String(taxAmount),
    total_amount: String(totalAmount),
    transaction_uuid: uuidv4(),
    product_service_charge: "0",
    product_delivery_charge: "0",
    product_code: "EPAYTEST",
    success_url: `https://shop-sphere-4uyi.vercel.app/paymentsuccess?amount=${totalAmount}`,
    failure_url:
      "https://shop-sphere-4uyi.vercel.app/paymentfailure",
    signed_field_names: "total_amount,transaction_uuid,product_code",
    signature: "",
  });

  useEffect(() => {
    const { total_amount, transaction_uuid, product_code } = formData;

    const hashString = `total_amount=${total_amount},transaction_uuid=${transaction_uuid},product_code=${product_code}`;

    const hash = CryptoJS.HmacSHA256(hashString, secretKey);
    const signature = CryptoJS.enc.Base64.stringify(hash);

    setFormData((prev) => ({ ...prev, signature }));
  }, []);

  return (
    <form
      action="https://rc-epay.esewa.com.np/api/epay/main/v2/form"
      method="POST"
    >
      {Object.entries(formData).map(([key, value]) => (
        <input key={key} type="hidden" name={key} value={value} />
      ))}

      <button
        type="submit"
        className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
      >
        Pay with eSewa
      </button>
    </form>
  );
};

export default Esewa;
