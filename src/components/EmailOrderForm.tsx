import { useRef } from 'react';

interface EmailOrderFormProps {
  productName: string;
}

const EmailOrderForm = ({ productName }: EmailOrderFormProps) => {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form
      ref={formRef}
      action="https://formsubmit.co/fawaznuhu93@gmail.com"
      method="POST"
      className="space-y-3 text-left"
    >
      <input type="hidden" name="_subject" value={`Order Request: ${productName}`} />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />

      <div>
        <label className="block text-sm font-medium text-gray-700">Full Name</label>
        <input
          type="text"
          name="name"
          required
          className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-green-500 focus:border-green-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Phone Number</label>
        <input
          type="tel"
          name="phone"
          required
          className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-green-500 focus:border-green-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Area of Residence</label>
        <input
          type="text"
          name="area"
          required
          className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-green-500 focus:border-green-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Order Details</label>
        <textarea
          name="order"
          rows={3}
          required
          defaultValue={`I would like to order: ${productName}`}
          className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-green-500 focus:border-green-500"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition"
      >
        Send Order via Email
      </button>
    </form>
  );
};

export default EmailOrderForm;